import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { AuthApiService } from './auth/shared/services/auth-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'auth-app';
  subscription!: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private authApiService: AuthApiService
  ) { }

  ngOnInit(): void {
    this.subscription = new Subscription();
    this.handleAuthRedirect();
    this.setLoggedUser();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  private handleAuthRedirect() {
    const redirectURL = localStorage.getItem('redirectURL');
    this.subscription.add(
      this.authApiService.handleAuthRedirect(this.store, redirectURL || '', this.router)
    );
    localStorage.removeItem('redirectURL');
  }

  private setLoggedUser() {
    this.subscription.add(this.authApiService.setLoggedUser(this.store).subscribe());
  }


}
