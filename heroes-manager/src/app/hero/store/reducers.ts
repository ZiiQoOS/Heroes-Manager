import { createReducer, on } from '@ngrx/store';
import { HeroesActions, HeroesState } from '.';

export const heroesReducer = createReducer(
  HeroesState.initialHeroesState,
  on(HeroesActions.loadHeroesSuccess, (state, action) => {    
    let stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy = [...stateCopy, ...action.data.heros];
    return stateCopy;
  }),
  on(HeroesActions.saveHeroSuccess, (state, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));
    stateCopy.push(action.hero);    
    return JSON.parse(JSON.stringify(stateCopy));
  }),
  on(HeroesActions.rateHeroSuccess, (state, action) => {
    let stateCopy = JSON.parse(JSON.stringify(state));    
    stateCopy.find((hero: any) => hero._id === action.rating.hero ).rating = action.rating.value;
    return stateCopy;
  }),
  on(HeroesActions.resetHeroesList, (state, action) => {
    return [];
  })
)
