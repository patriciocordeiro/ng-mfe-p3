import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { selectAuthLoading } from '../shared/store/auth.selectors';
import { authSignup } from './../shared/store/auth.actions';
import { selectAuthError } from './../shared/store/auth.selectors';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {

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

  signup() {
    this.store.dispatch(authSignup({
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password
    }));
  }

  private buildFormGroup() {
    this.form = this.fb.group({
      name: new FormControl('Patricio Cordeiro', Validators.required),
      email: new FormControl('paponcio6@gmail.com', Validators.compose([Validators.required, Validators.email])),
      password: new FormControl('pamila', Validators.compose([Validators.required, Validators.minLength(6)])),
      retypePassword: new FormControl('pamila', Validators.compose([Validators.required, Validators.minLength(6)])),
    });
  }

  private initStore() {
    this.loading$ = this.store.select(selectAuthLoading);
    this.loginError$ = this.store.select(selectAuthError);
  }
}
