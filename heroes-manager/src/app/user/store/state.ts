import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserType } from '../models/User.type';


export interface IUserState {
  login: boolean;
  user: UserType | null;
}

export const initialUserState: IUserState = {
  login: false,
  user: null
}


const selectAuthState = createFeatureSelector<IUserState>("user");

export const isLoggedIn = createSelector(selectAuthState, (state) => state.login);

export const userFullName = createSelector(selectAuthState, (state) => state.login ? `${state.user?.firstName} ${state.user?.lastName}` : '');

export const userId = createSelector(selectAuthState, (state) => {
  console.log('state', state);
  return state.user?._id;
});
