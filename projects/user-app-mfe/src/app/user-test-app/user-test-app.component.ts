import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { authLogout, selectAuthUser } from 'auth-app-lib';
import firebase from 'firebase/compat';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-test-app',
  templateUrl: './user-test-app.component.html',
  styleUrls: ['./user-test-app.component.scss']
})

export class UserTestAppComponent implements OnInit {

  user$!: Observable<firebase.User>;

  constructor(
    private store: Store,
  ) { }

  ngOnInit(): void {
    this.getLoggedUser();
  }


  logout() {
    this.store.dispatch(authLogout());
  }

  private getLoggedUser() {
    this.user$ = this.store.select(selectAuthUser);
  }
}
