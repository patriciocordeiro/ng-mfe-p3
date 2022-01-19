import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import firebase from 'firebase/compat';

import { authLogout } from '../auth/shared/store/auth.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<{ auth: firebase.User; }>) { }

  ngOnInit() {
  }


  logout() {
    this.store.dispatch(authLogout());
  }

}
