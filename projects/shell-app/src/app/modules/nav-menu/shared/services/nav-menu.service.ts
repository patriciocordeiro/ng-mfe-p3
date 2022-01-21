import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { NavigationStart, Route, Router, RouterState } from '@angular/router';
import { loadModule } from 'projects/shell-app/src/app/shared/utils/load-module.util';
import { from, Observable } from 'rxjs';
import { filter, map, mergeMap, takeLast, tap, toArray } from 'rxjs/operators';

import { NavMenu } from '../interfaces/nav-menu';

@Injectable({
  providedIn: 'root'
})
export class NavMenuService {

  currentURL: string = '';

  constructor(
    private router: Router,
    private firestore: Firestore,
  ) { }

  getMenu() {
    const col = collection(this.firestore, 'nav-menu');
    return collectionData(col).pipe(
      mergeMap((e) => this.addMenuToRouterConfig(e as NavMenu[]))
    );
  }

  addMenuToRouterConfig(menuList: NavMenu[]): Observable<Route[]> {

    const currentUrlIndex = this.router.config.findIndex(e => e.path === this.rootRoutePath);

    return from(menuList).pipe(
      filter(item => item.active),
      map(item => {

        const route: Route = this.builDynamicRoutesFromMicroFrontend(item);

        const config = this.router.config as any;

        let children = config[currentUrlIndex]._loadedConfig.routes[0].children as Route[];

        const idx = children.findIndex(el => el.path == route.path);

        if (idx < 0) {
          config[currentUrlIndex]._loadedConfig.routes[0].children = [...config[currentUrlIndex]._loadedConfig.routes[0].children, route];
        }
        this.router.config = config;
        return this.router.config;
      }
      ),
      takeLast(1),
      toArray())
      .pipe(
        tap(() => {
          this.redirectHandler(menuList);
        }),
        map(res => {
          const routes = res[0][currentUrlIndex] as any;
          return routes._loadedConfig.routes[0].children.filter((e: Route) => !!e.path) || [];
        })
      );
  }

  builDynamicRoutesFromMicroFrontend(item: NavMenu): Route {
    return {
      path: item.path, loadChildren: () => loadModule(item.mfeURL).then(m => m[item.libName][item.module]),
      data: {
        title: item.title,
      }
    };
  }

  redirectHandler(menuList: NavMenu[]) {

    const activeMenuList = menuList.filter(e => e.active);
    const firstPageToLoad = activeMenuList.filter(e => e.isFirstPage)[0] || activeMenuList[0];

    if (this.currentURL && this.currentURL != `/${this.rootRoutePath}`) {
      this.router.navigate([`./${this.currentURL}`], { replaceUrl: true });
    } else {
      this.router.navigate([`./${this.rootRoutePath}/${firstPageToLoad?.path}`], { replaceUrl: true });
    }
  }

  handleRedirectOnReload(router: Router) {
    return router.events
      .pipe(
        filter((rs): rs is NavigationStart => rs instanceof NavigationStart))
      .pipe(tap(event => {
        if (event.id === 1 && event.url !== '/' && event.url !== '/auth/login') {
          this.currentURL = event.url;
        }
      }));
  }

  private get rootRoutePath(): string {
    const state: RouterState = this.router.routerState;
    return state.root.children[0].routeConfig?.path || '';

  }

}
