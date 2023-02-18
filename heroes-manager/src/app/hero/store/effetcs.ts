import { Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, throwError } from 'rxjs';
import { createEffect } from '@ngrx/effects';
import { HeroesActions } from '.';
import { HeroService } from '../services/hero.service';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';

@Injectable()
export class HeroesEffects {
  constructor(
    private heroService: HeroService,
    private actions$: Actions,
    private store: Store,
    private _snackBar: MatSnackBar
  ) { }

  saveHero$ = createEffect(() => this.actions$.pipe(
    ofType(HeroesActions.saveHero),
    map((action) => action.hero),
    switchMap((params) => this.heroService.saveHero((params as any))),
    map(response => {
      this.openSnackBar("Your hero is added successfully!", '');
      return HeroesActions.saveHeroSuccess({ hero: (response as any) });
    }),
    catchError(err => {
      this.store.dispatch(HeroesActions.loadHeroesFailed());
      return throwError(() => new Error(err));
    })
  ));

  rateHero$ = createEffect(() => this.actions$.pipe(
    ofType(HeroesActions.rateHero),
    map((action) => action),
    switchMap((params) => this.heroService.rateHero(params)),
    map(response => {
      return HeroesActions.rateHeroSuccess({ rating: (response as any) });
    }),
    catchError(err => {
      this.store.dispatch(HeroesActions.rateHeroFailed(err));
      return throwError(() => new Error(err));
    })
  ));

  loadHeroes$ = createEffect(() => this.actions$.pipe(
    ofType(HeroesActions.loadHeroes),
    map((action) => action.data),
    switchMap((params) => this.heroService.getHeroes(params.page, params.orderBy)),
    map(response => {
      return HeroesActions.loadHeroesSuccess({ data: { heros: (response as any) } });
    }),
    catchError(err => {
      this.store.dispatch(HeroesActions.loadHeroesFailed());
      return throwError(() => new Error(err));
    })
  ));

  openSnackBar(message: string, action: string, duration: number = 1000) {
    this._snackBar.open(message, action, { duration });
  }

}
