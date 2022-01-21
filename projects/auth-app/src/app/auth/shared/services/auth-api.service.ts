import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import firebase from 'firebase/compat';
import { from, Observable, of } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap, skip, tap } from 'rxjs/operators';

import { authSetLoggedUser } from '../store/auth.actions';
import { selectAuthIsLoggedIn } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private auth: AngularFireAuth) { }

  login(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.auth.signInWithEmailAndPassword(email, password));
  }

  loginWith(credential: firebase.auth.AuthCredential): Observable<firebase.auth.UserCredential> {
    return from(this.auth.signInWithCredential(credential));
  }

  signup(email: string, password: string, name: string) {
    return from(this.createUserWithEmailAndPassword(email, password)).pipe(
      map((userCredential) => userCredential.user),
      filter((user) => !!user),
      concatMap((user) =>
        from(user?.updateProfile({ displayName: name }) as any).pipe(
          mergeMap(() => this.auth.currentUser)
        )
      )
    );
  }

  createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Observable<firebase.auth.UserCredential> {
    return new Observable((obs) => {
      from(this.auth.createUserWithEmailAndPassword(email, password))
        .pipe(catchError((error) => of({ error })))
        .subscribe((res: any) => {
          if (res.error) {
            obs.error(res);
          } else {
            obs.next(res);
          }
          obs.complete();
        });
    });
  }

  logout() {
    return from(this.auth.signOut());
  }

  authState() {
    return this.auth.authState;
  }


  setLoggedUser(store: Store) {
    return this.authState().pipe(
      tap((user) => {
        if (user) {
          const { displayName, email, phoneNumber, photoURL, uid } = user;
          store.dispatch(authSetLoggedUser({ data: { displayName, email, phoneNumber, photoURL, uid } as firebase.User }));
        }
      }));
  }

  handleAuthRedirect(store: Store, redirectURL: string, router: Router) {
    return store
      .select(selectAuthIsLoggedIn)
      .pipe(skip(1))
      .subscribe((res) => {
        if (res) {
          router.navigate([redirectURL || '/']);
        } else {
          router.navigate(['/auth/login']);
        }
      });
  }
}
