import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthApiService } from 'auth-app-lib';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'user-app-mfe';
  user$!: Observable<Partial<firebase.default.User>>;
  subscription!: Subscription;

  constructor(
    private store: Store,
    private router: Router,
    private authApiService: AuthApiService
  ) { }

  ngOnInit(): void {
    this.subscription = new Subscription();
    this.setLoggedUser();
    this.handleAuthRedirect();
  }

  private handleAuthRedirect() {
    const redirectURL = localStorage.getItem('redirectURL');
    this.subscription.add(
      this.authApiService.handleAuthRedirect(this.store, redirectURL || '', this.router)
    );
  }

  private setLoggedUser() {
    this.subscription.add(this.authApiService.setLoggedUser(this.store).subscribe());
  }
}
