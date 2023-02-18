import { AddComponent } from './components/add/add.component';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from './store/effetcs';
import { HeroesResolver } from './resolvers/heroes.resolver';
import { ListComponent } from './components/list/list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';
import { TextFieldModule } from '@angular/cdk/text-field';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: ListComponent,
    resolve: {
      preFetchHeroes: HeroesResolver
    }
  },
  {
    path: 'add',
    component: AddComponent,
  }
]

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatFormFieldModule,
    TextFieldModule,
    MatSnackBarModule,
    EffectsModule.forFeature([HeroesEffects]),
    StarRatingModule.forRoot()
  ],
  providers: [
    HeroesResolver
  ]
})
export class HeroModule { }
