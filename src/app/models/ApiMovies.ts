import { MoviesInterface } from './Movies';

export interface ApiMovies {
  Response: string;
  Search: MoviesInterface[];
  totalResults: string;
  Error?: string;
}
