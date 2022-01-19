import { createAction, props } from '@ngrx/store';

import { User } from './../../../../../../../dist/user-app-mfe-lib/app/user/shared/interfaces/user.d';


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
  props<{ data: firebase.default.User | null; }>()
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
export const authSetIsLoggedIn = createAction(
  '[Auth] Auth Set IsLoggedIn ',
  props<{ data: boolean; }>()
);


export const authSignupClearStore = createAction(
  '[Auth] Signup Clear Store',
);


