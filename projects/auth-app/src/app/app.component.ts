import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { skip } from 'rxjs/operators';

import { AuthApiService } from './auth/shared/services/auth-api.service';
import { authSetIsLoggedIn } from './auth/shared/store/auth.actions';
import { selectAuthIsLoggedIn } from './auth/shared/store/auth.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'auth-app'
  subscription!: Subscription

  constructor(
    private store: Store,
    private router: Router,
    private authApiService: AuthApiService
  ) {}

  ngOnInit(): void {
    this.subscription = new Subscription()
    this.listenIsLoggedIn()
    this.setUserIsLoggedIn()
  }
  private listenIsLoggedIn() {
    this.subscription.add(
      this.store
        .select(selectAuthIsLoggedIn)
        .pipe(skip(1))
        .subscribe((res) => {
          if (res) {
            this.router.navigate(['/'])
          } else {
            this.router.navigate(['/auth'])
          }
        })
    )
  }

  setUserIsLoggedIn() {
    this.subscription.add(
      this.authApiService.authState().subscribe((user) => {
        this.store.dispatch(authSetIsLoggedIn({ data: !!user }))
      })
    )
  }
}
