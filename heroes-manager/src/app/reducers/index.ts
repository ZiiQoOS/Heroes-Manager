import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { heroesReducer } from '../hero/store/reducers';
import { userReducer } from '../user/store/reducers';


export interface AppState {

}

export const reducers: ActionReducerMap<AppState> = {
  'user': userReducer,
  'heroes': heroesReducer
};


export const metaReducers: MetaReducer<AppState>[] = [];
