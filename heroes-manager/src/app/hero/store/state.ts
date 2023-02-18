import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HeroListType } from '../models/hero.Type';


export const initialHeroesState: HeroListType = [];

const selectAuthState = createFeatureSelector<HeroListType>("heroes");

export const heroesSelector = createSelector(selectAuthState, (state) => state);
