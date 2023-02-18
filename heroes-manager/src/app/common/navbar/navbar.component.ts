import { Component } from '@angular/core';
import { EnhancedHttpClientService } from 'src/app/services/enhanced-http-client.service';
import { Store } from '@ngrx/store';
import { UserState } from 'src/app/user/store';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public userName: string = ''
  constructor(
    private store: Store,
    private httpClient: EnhancedHttpClientService
  ) { }

  ngOnInit() {
    this.store.select(UserState.userName)
      .subscribe(
        userName => this.userName = userName
      );
  }

  logoOut() {
    this.httpClient.logout();
  }
}
