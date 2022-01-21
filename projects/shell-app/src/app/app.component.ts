import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthApiService } from 'auth-app-lib';
import { Subscription } from 'rxjs';

import { NavMenuService } from './modules/nav-menu/shared/services/nav-menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell-app';
  menu = ['home', 'user'];
  activeLink: string = '';

  subscription!: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private authApiService: AuthApiService,
    private navMenuService: NavMenuService
  ) { }

  ngOnInit(): void {
    this.subscription = new Subscription();
    this.handleAuthRedirect();
    this.subscription.add(this.navMenuService.handleRedirectOnReload(this.router).subscribe());
    this.setLogeedUser();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  private handleAuthRedirect() {
    const redirectURL = localStorage.getItem('redirectURL');
    this.subscription.add(
      this.authApiService.handleAuthRedirect(this.store, redirectURL || '', this.router)
    );
  }

  private setLogeedUser() {
    this.subscription.add(this.authApiService.setLoggedUser(this.store).subscribe());
  }



}
