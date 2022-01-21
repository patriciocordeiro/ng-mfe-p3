import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import firebase from 'firebase/compat';

import * as AuthActions from './auth.actions';

export const AuthFeatureKey = 'auth';

export interface AuthState extends EntityState<firebase.User> {
  loading: boolean;
  error: any;
  isLoggedIn: boolean;
}

export const authAdapter: EntityAdapter<firebase.User> = createEntityAdapter<firebase.User>({
  selectId: selectUserId,
});

export function selectUserId(user: firebase.User): string {
  return user.uid;
}

export const authInitialState: AuthState = authAdapter.getInitialState({
  loading: false,
  error: {} as any,
  isLoggedIn: false,
});

const { selectAll, selectEntities, selectIds, selectTotal } = authAdapter.getSelectors();
export {
  selectAll as authSelectAll,
  selectEntities as authSelectEntities,
  selectIds as authSelectIds,
  selectTotal as authSelectTotal,
};

const _authReducer = createReducer(
  authInitialState,

  // Login
  on(AuthActions.authLogin, (state) => ({
    ...state,
    ...{ loading: true, error: null, isLoggedIn: false },
  })),

  on(AuthActions.authLoginSuccess, (state, action) => {
    const data = action.data as Partial<firebase.User>;
    const { displayName, email, phoneNumber, photoURL, uid } = data;
    return authAdapter.addOne(
      {
        displayName,
        email,
        phoneNumber,
        photoURL,
        uid,
      } as firebase.User,
      {
        ...state,
        ...{ loading: false, error: null, isLoggedIn: true },
      }
    );
  }),

  on(AuthActions.authLoginFailure, (state, action) => ({
    ...state,
    ...{ loading: false, error: action.error, isLoggedIn: false },
  })),

  //Logout
  on(AuthActions.authLogout, (state) => ({ ...state, ...{ loading: true, error: null } })),
  on(AuthActions.authLogoutSuccess, (state) => ({ ...state, ...authInitialState })),
  on(AuthActions.authLogoutFailure, (state) => ({ ...state, ...authInitialState })),

  // Signup
  on(AuthActions.authSignup, (state) => ({
    ...state,
    ...{ loading: true, error: null, isLoggedIn: false },
  })),
  on(AuthActions.authSignupSuccess, (state, action) => {
    const data = action.data as Partial<firebase.User>;
    const { displayName, email, phoneNumber, photoURL, uid } = data;
    return authAdapter.addOne(
      {
        displayName,
        email,
        phoneNumber,
        photoURL,
        uid,
      } as firebase.User,
      {
        ...state,
        ...{ loading: false, error: null, isLoggedIn: true },
      }
    );
  }),
  on(AuthActions.authSignupFailure, (state, action) => ({
    ...state,
    ...{ loading: false, error: action.error, isLoggedIn: false },
  })),

  //Set currentUser
  on(AuthActions.authSetLoggedUser, (state, action) => {
    return authAdapter.addOne(action.data,
      {
        ...state,
        ...{ loading: false, error: null, isLoggedIn: !!action.data?.uid },
      }
    );
  }),

  //Clear store
  on(AuthActions.authSignupClearStore, (state) => ({ ...state, ...authInitialState }))
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return _authReducer(state, action);
}
