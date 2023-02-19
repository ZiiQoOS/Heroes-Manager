import { createAction, props } from '@ngrx/store';
import { UserState } from '.';


export const setUserState = createAction(
  '[Users] SET_USER_STATE',
  props<{ data: UserState.IUserState }>()
);

export const logout = createAction(
  '[Users] LOGOUT'
);
