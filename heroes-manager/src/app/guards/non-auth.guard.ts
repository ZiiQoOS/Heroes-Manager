import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { UserState } from '../user/store';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return this.store.pipe(
      select(UserState.isLoggedIn),
      map(isLoggedIn => {
        if (isLoggedIn) {
          this.router.navigate(['/hero/list']);
        }
        return true;
      })
    );
  }

}
