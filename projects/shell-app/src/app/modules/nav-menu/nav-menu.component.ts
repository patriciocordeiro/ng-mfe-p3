import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { NavMenuService } from './shared/services/nav-menu.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit, OnDestroy {

  menuItems$!: Observable<any[]>;
  subscription!: Subscription;

  constructor(
    private navMenuService: NavMenuService,
    private router: Router
  ) {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    this.subscription.add(this.navMenuService.handleRedirectOnReload(this.router).subscribe());
    this.menuItems$ = this.navMenuService.getMenu();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
