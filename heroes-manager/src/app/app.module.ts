import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { EffectsModule } from '@ngrx/effects';
import { EnhancedHttpClientService } from './services/enhanced-http-client.service';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './common/navbar/navbar.component';
import { reducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';





function initApp(http: EnhancedHttpClientService) {
  return () => http.checkAuth();
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreModule.forRoot(reducers)
  ],
  providers: [
    CookieService,
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [EnhancedHttpClientService],
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
