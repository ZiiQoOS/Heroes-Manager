import { HeroListType } from './hero.Type'
export type HeroListPaginationType = {
  count: number;
  next: string | null;
  previous: string | null;
  results: HeroListType;
}
