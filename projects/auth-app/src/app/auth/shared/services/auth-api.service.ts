import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat';
import { from, Observable, of } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private auth: AngularFireAuth) {}

  login(email: string, password: string): Observable<firebase.auth.UserCredential> {
    return from(this.auth.signInWithEmailAndPassword(email, password))
  }

  loginWith(credential: firebase.auth.AuthCredential): Observable<firebase.auth.UserCredential> {
    return from(this.auth.signInWithCredential(credential))
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
    )
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
            obs.error(res)
          } else {
            obs.next(res)
          }
          obs.complete()
        })
    })
  }

  logout() {
    return from(this.auth.signOut())
  }

  authState() {
    return this.auth.authState
  }
}
