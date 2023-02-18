import { Actions, ofType } from '@ngrx/effects';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ClickEvent, HoverRatingChangeEvent, RatingChangeEvent } from 'angular-star-rating/index';
import { FormControl } from '@angular/forms';
import { HeroesActions, HeroesState } from '../../store';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ProfileComponent } from '../profile/profile.component';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/user/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public dataSource!: MatTableDataSource<any>;
  public displayedColumns: string[] = ['name', 'powers', 'rate'];
  public heroes$!: Observable<any>;
  public totalPageNumber: number = 0;
  public isLoadingResults: boolean = true;
  public orderBy: FormControl = new FormControl(true);
  public pageNumber: number = 1;
  public userId$!: Observable<any>;
  public userId!: string;

  constructor(
    private store: Store,
    private actions$: Actions,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.heroes$ = this.store.select(HeroesState.heroesSelector);
    this.userId$ = this.store.select(UserState.userId);

    this.getHeroes();

    this.orderBy.valueChanges.subscribe(
      _value => {
        this.isLoadingResults = true;
        this.getHeroes();
      }
    );

    this.actions$.pipe(
      ofType(HeroesActions.loadHeroesSuccess)
    ).subscribe(
      {
        next: (data) => {
          this.totalPageNumber = Math.ceil(data.data.heroesCount/5);
          this.dataSource = new MatTableDataSource<any>(data.data.heros as any);
          this.isLoadingResults = false;
        },
        error: (e) => {
          console.log('err', e)
        }
      }
    );

    this.actions$.pipe(
      ofType(  HeroesActions.saveHeroSuccess)
    ).subscribe(
      {
        next: () => {
          this.getHeroes();
        },
        error: (e) => {
          console.log('err', e)
        }
      }
    );
  }

  getHeroes() {
    this.store.dispatch(HeroesActions.loadHeroes({ data: { page: this.pageNumber, orderBy: this.orderBy.value ? 'name' : 'powers' } }));
  }

  openHeroProfileDialog(hero: any = null, readOnly: boolean = false) {
    this.dialog.open(
      ProfileComponent,
      {
        data: {
          hero,
          readOnly
        },
        height: '500px',
        width: '500px',
        autoFocus: false
      }
    );
  }

  onStarRatingChange = ($event: ClickEvent, heroId: string) => {
    const rating: any = {
      value: $event.rating,
      heroId
    }
    this.store.dispatch(HeroesActions.rateHero(rating));
  }

  onNextPage() {
    this.store.dispatch(HeroesActions.loadHeroes({ data: { page: ++this.pageNumber, orderBy: this.orderBy.value ? 'name' : 'powers' } }));
  }

  onPreviousPage() {
    this.store.dispatch(HeroesActions.loadHeroes({ data: { page: --this.pageNumber, orderBy: this.orderBy.value ? 'name' : 'powers' } }));
  }

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = searchValue.trim().toLowerCase();
  }

  ngOnDestroy() {
    this.store.dispatch(HeroesActions.resetHeroesList());
  }
}
