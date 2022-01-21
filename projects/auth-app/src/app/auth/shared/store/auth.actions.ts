import { createAction, props } from '@ngrx/store';
import firebase from 'firebase/compat';

export const authLogin = createAction(
  '[Auth] Login', props<{ email: string, password: string; }>()
);

export const authLoginSuccess = createAction(
  '[Auth] Login  Success',
  props<{ data: any; }>()
);
export const authLoginFailure = createAction(
  '[Auth] Auth Login Failure',
  props<{ error: any; }>()
);


export const authSignup = createAction(
  '[Auth] Signup', props<{ name: string, email: string, password: string; }>()
);

export const authSignupSuccess = createAction(
  '[Auth] Signup  Success',
  props<{ data: firebase.User | null; }>()
);

export const authSignupFailure = createAction(
  '[Auth] Auth Signup Failure',
  props<{ error: any; }>()
);

export const authLogout = createAction(
  '[Auth] Logout'
);
export const authLogoutSuccess = createAction(
  '[Auth] Logout  Success',
);
export const authLogoutFailure = createAction(
  '[Auth] Auth Logout Failure',
  props<{ error: any; }>()
);
export const authSetLoggedUser = createAction(
  '[Auth] Auth Set Logged User ',
  props<{ data: firebase.User }>()
);


export const authSignupClearStore = createAction(
  '[Auth] Signup Clear Store',
);


