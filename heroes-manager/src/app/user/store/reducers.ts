import { createReducer, on } from '@ngrx/store';
import { UserActions, UserState } from '.';


export const userReducer = createReducer(
  UserState.initialUserState,
  on(UserActions.setUserState, (state, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.login = action.data.login;
    stateCopy.user = action.data.user;
    return stateCopy;
  }),
  on(UserActions.logout, (state, action) => {
    const stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.login = false;
    stateCopy.user = null;
    return stateCopy;
  })
);
