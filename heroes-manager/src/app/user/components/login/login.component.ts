import { AuthService } from 'src/app/services/auth.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UserActions } from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../styles/auth.style.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public ACCESS_TOKEN_KEY = environment.ACCESS_TOKEN_KEY;
  public form: FormGroup = new FormGroup({});
  public invalidCredentials: any ;

  private subs: Subscription = new Subscription();

  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  logIn() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.authService.login(this.form.value).subscribe(
      {
        next: (data) => {
          const expirationDate = new Date();
          expirationDate.setDate(expirationDate.getDate() + 30);
          this.cookieService.set(this.ACCESS_TOKEN_KEY, data.token, expirationDate, '/');
          this.store.dispatch(UserActions.setUserState({ data: { login: true, user: (data as any) } }));
          this.router.navigate(['/hero/list']);
        },
        error: () => {
          this.invalidCredentials = true;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
