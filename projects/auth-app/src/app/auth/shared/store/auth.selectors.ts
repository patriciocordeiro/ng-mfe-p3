import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromAuth from './auth.reducer';



export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.AuthFeatureKey
);

export const selectAuthEntities = createSelector(
  selectAuthState,
  fromAuth.authSelectEntities
);
export const selectAllAuth = createSelector(selectAuthState, state => {
  return fromAuth.authSelectAll(state);
});
export const selectAuthUser = createSelector(selectAllAuth, state => {
  return state && state[0];
});


export const selectAuthLoading = createSelector(selectAuthState, state => state.loading);
export const selectAuthError = createSelector(selectAuthState, state => state.error);
export const selectAuthIsLoggedIn = createSelector(selectAuthState, state => state.isLoggedIn);



