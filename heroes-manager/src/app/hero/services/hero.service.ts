import { EnhancedHttpClientService } from 'src/app/services/enhanced-http-client.service';
import { HeroListPaginationType } from '../models/heroListPagination.type';
import { HeroType } from '../models/hero.Type';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private BASIC_PATH = 'heroes';

  constructor(
    private httpClient: EnhancedHttpClientService
  ) { }

  saveHero(data: Record<string, string>): Observable<{ message: string }> {
    const hero = {
      hero: data
    }
    return this.httpClient.post(`heroes-manager/api/${this.BASIC_PATH}`, hero, true);
  }

  getHeroes(page: number, orderBy: string): Observable<{ heroesWithRatings: HeroListPaginationType, heroesCount: number }> {
    return this.httpClient.get(
      `${this.BASIC_PATH}`, true, { page, orderBy }
    );
  }

  rateHero(rating: any): Observable<{ message: string }> {
    return this.httpClient.post(`heroes-manager/api/hero/${rating.heroId}/rating`, { rating }, true);
  }
}
