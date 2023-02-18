import { HeroesActions } from '../store';
import { HeroService } from '../services/hero.service';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class HeroesResolver implements Resolve<any> {

  constructor(
    private heroService: HeroService,
    private store: Store
  ) { }

  resolve() {
    return this.heroService.getHeroes(1, 'name').pipe(
      map(_heroesList => {
        this.store.dispatch(HeroesActions.loadHeroes({ data: { page: 1, orderBy: 'name' ? 'name' : 'powers' } }));
      })
    );
  }
}