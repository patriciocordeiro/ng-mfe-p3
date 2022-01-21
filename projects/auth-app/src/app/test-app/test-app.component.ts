import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import firebase from 'firebase/compat';
import { Observable } from 'rxjs';

import { authLogout } from '../auth/shared/store/auth.actions';
import { selectAuthUser } from '../auth/shared/store/auth.selectors';


@Component({
  selector: 'app-test-app',
  templateUrl: './test-app.component.html',
  styleUrls: ['./test-app.component.scss']
})
export class TestAppComponent implements OnInit {

  user$!: Observable<firebase.User>;

  constructor(private store: Store<{ auth: firebase.User; }>) { }

  ngOnInit() {
    this.getLoggedUser();
  }


  logout() {
    this.store.dispatch(authLogout());
  }


  private getLoggedUser() {
    this.user$ = this.store.select(selectAuthUser);
  }

}
