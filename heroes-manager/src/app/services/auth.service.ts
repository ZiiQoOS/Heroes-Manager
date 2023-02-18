import { EnhancedHttpClientService } from './enhanced-http-client.service';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { LoginType } from '../user/models/login.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  BASIC_PATH = 'heroes-manager/api';

  constructor(private httpClient: EnhancedHttpClientService) { }

  login(data: Record<string, string>): Observable<LoginType> {
    return this.httpClient.post(`${this.BASIC_PATH}/login`, data);
  }

  signup(data: Record<string, string>): Observable<LoginType> {
    return this.httpClient.post(`${this.BASIC_PATH}/register`, data);
  }
}
