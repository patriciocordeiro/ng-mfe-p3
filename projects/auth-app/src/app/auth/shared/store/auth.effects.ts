import { Injectable } from '@angular/core';
import { UserCredential } from '@firebase/auth-types';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';

import { AuthApiService } from '../services/auth-api.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  authLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authLogin),
      switchMap((payload) =>
        this.authApiService.login(payload.email, payload.password).pipe(
          map((data: UserCredential) => {
            const temp = data as UserCredential
            const user = temp.user
            const { uid, displayName, email, phoneNumber, photoURL, emailVerified } = user
              ? user
              : ({} as any)
            return AuthActions.authLoginSuccess({
              data: { uid, displayName, email, phoneNumber, photoURL, emailVerified },
            })
          }),
          catchError((error) => of(AuthActions.authLoginFailure({ error })))
        )
      )
    )
  })

  authLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authLogout),
      switchMap(() =>
        this.authApiService.logout().pipe(
          map(() => AuthActions.authLogoutSuccess()),
          catchError((error) => of(AuthActions.authLogoutFailure({ error })))
        )
      )
    )
  })

  authSignup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.authSignup),
      switchMap((payload) =>
        this.authApiService.signup(payload.email, payload.password, payload.name).pipe(
          mergeMap(() => this.authApiService.login(payload.email, payload.password)),
          map((data) => AuthActions.authSignupSuccess({ data: data.user })),
          catchError((error) => of(AuthActions.authSignupFailure({ error })))
        )
      )
    )
  })

  constructor(private actions$: Actions, private authApiService: AuthApiService) {}
}
