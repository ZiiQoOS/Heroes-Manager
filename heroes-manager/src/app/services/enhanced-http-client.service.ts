import { catchError, firstValueFrom, Observable, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserActions } from '../user/store';

@Injectable({
  providedIn: 'root'
})
export class EnhancedHttpClientService {

  private BASE_URL = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private store: Store,
    private router: Router) { }



  post(url: string, params: { [key: string]: any }, needsAuth: boolean = false): Observable<any> {
    let options = {
      headers: this.getHeaders(needsAuth)
    }
    return this.http.post(`${this.BASE_URL}/${url}`, params, options).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.logout();
        }
        return throwError(() => new Error(err));
      })
    );
  }

  get(url: string, needsAuth: boolean = false, params = {}): Observable<any> {
    let options = {
      params,
      headers: this.getHeaders(needsAuth)
    }

    return this.http.get(`${this.BASE_URL}/heroes-manager/api/${url}`, options).pipe(
      catchError(err => {
        if (err.status === 401) {
          this.logout();
        }
        return throwError(() => new Error(err));
      })
    );
  }


  getHeaders(isAuth: boolean) {
    const token = this.cookieService.get(environment.ACCESS_TOKEN_KEY);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return isAuth ? headers.append("Authorization", `Bearer ${token}`) : headers;
  }

  async checkAuth() {
    try {
      const token = this.cookieService.get(environment.ACCESS_TOKEN_KEY);
      if (token) {
        const init_rsp = await firstValueFrom(this.post(`heroes-manager/api/verify-token`, {
          token
        }));
        this.store.dispatch(UserActions.updateUsersStore({ data: { login: true, user: init_rsp.user } }));
      }
    } catch (error: any) {
      this.cookieService.delete(environment.ACCESS_TOKEN_KEY, '/');
    }
  }

  logout() {
    this.cookieService.delete(environment.ACCESS_TOKEN_KEY, '/');
    this.store.dispatch(UserActions.logout());
    this.router.navigate(['/user/login']);
  }
}
