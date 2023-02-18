import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { UserState } from '../user/store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store
  ) { }

  canActivate(
  ) {
    return this.store.pipe(
      select(UserState.isLoggedIn),
      map(isLoggedIn => {
        if (!isLoggedIn) {
          this.router.navigate(['/user/login']);
        }
        return true;
      })
    );
  }

}
