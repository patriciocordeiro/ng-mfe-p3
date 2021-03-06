import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { authLogout, selectAuthUser } from 'auth-app-lib';
import firebase from 'firebase/compat';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
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
