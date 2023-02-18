import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserActions } from '../../store';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../styles/auth.style.scss']
})
export class RegisterComponent {
  public form: FormGroup = new FormGroup({});
  public generalError: boolean = false;
  public ACCESS_TOKEN_KEY = environment.ACCESS_TOKEN_KEY;


  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private store: Store,
    private router: Router) {

  }
  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  register() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.generalError = false;
    this.authService.signup(this.form.value).subscribe(
      data => {
        const date = new Date();
        date.setDate(date.getDate() + 7);
        this.cookieService.set(this.ACCESS_TOKEN_KEY, data.token, date, '/');
        this.store.dispatch(UserActions.updateUsersStore({ data: { login: true, user: data.user } }));
        this.router.navigate(['/hero/list']);
      },
      error => this.generalError = true
    );
  }

}
