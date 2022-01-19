import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from '../../environments/environment';
import { authLogout } from './../auth/shared/store/auth.actions';


export interface State {

}

export const reducers: ActionReducerMap<State> = {

};

export function clearStateMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === authLogout.type) {
      state = {};
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
