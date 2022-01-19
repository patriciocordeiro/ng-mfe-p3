import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { authLogin } from '../shared/store/auth.actions';
import { selectAuthLoading } from '../shared/store/auth.selectors';
import { selectAuthError } from './../shared/store/auth.selectors';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {

  form!: FormGroup;
  hidePassword = true;
  loginError$!: Observable<firebase.default.FirebaseError>;
  loading$!: Observable<boolean>;
  constructor(
    private fb: FormBuilder,
    private store: Store) {
  }

  ngOnInit(): void {
    this.buildFormGroup();
    this.initStore();
  }

  login() {
    this.store.dispatch(authLogin({
      email: this.form.value.email,
      password: this.form.value.password
    }));
  }

  private buildFormGroup() {
    this.form = this.fb.group({
      email: new FormControl('paponcio6@gmail.com', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('pamila', Validators.compose([Validators.required, Validators.minLength(6)])),
    });
  }

  private initStore() {
    this.loading$ = this.store.select(selectAuthLoading);
    this.loginError$ = this.store.select(selectAuthError);
  }

}
