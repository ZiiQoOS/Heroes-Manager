import { createAction, props } from "@ngrx/store";
import { UserState } from ".";


export const updateUsersStore = createAction(
  '[Users] UPDATE_STORE',
  props<{ data: UserState.IUserState }>()
);

export const logout = createAction(
  '[Users] LOGOUT'
);
