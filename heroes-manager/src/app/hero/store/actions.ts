import { createAction, props } from '@ngrx/store';
import { HeroListType, HeroType } from '../models/hero.Type';

// Load Heroes Actions
export const loadHeroes = createAction(
  '[HEROES] LOAD_HEROES',
  props<{ data: { page: number; orderBy: string; } }>()
);

export const loadHeroesSuccess = createAction(
  '[HEROES] LOAD_HEROES_SUCCESS',
  props<{ data: { heros: HeroListType, heroesCount: number } }>()
);

export const loadHeroesFailed = createAction(
  '[HEROES] LOAD_HEROES_FAILED'
);

export const resetHeroesList = createAction(
  '[HEROES] RESET_HEROES_LIST'
);

// Save Heroes Actions
export const saveHero = createAction(
  '[HEROES] SAVE_HERO',
  props<{ hero: HeroType }>()
);

export const saveHeroSuccess = createAction(
  '[HEROES] SAVE_HERO_SUCCESS',
  props<{ hero: HeroType }>()
);

// Rate Heroes Actions
export const rateHero = createAction(
  '[HEROES] RATE_HERO',
  props<{ rating: any }>()
);

export const rateHeroSuccess = createAction(
  '[HEROES] RATE_HERO_SUCCESS',
  props<{ rating: any }>()
);

export const rateHeroFailed = createAction(
  '[HEROES] RATE_HERO_FAILED',
  props<{ rating: any }>()
);