import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { authLogout, selectAuthUser } from 'auth-app-lib';
import firebase from 'firebase/compat';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user$!: Observable<firebase.User>;

  constructor(private store: Store) { }

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
