import { Component, OnInit } from '@angular/core';
import { MoviesApiService } from '../services/moviesApiService.service';
import { ApiMovies } from '../models/ApiMovies';
import { MoviesInterface } from '../models/Movies';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies: MoviesInterface[];
  subscription: Subscription;
  movieName: string;
  error: string;

  constructor(private service: MoviesApiService) {}

  ngOnInit(): void {}

  onSubmit(movieName: string): void {
    this.subscription = this.service
      .getMovies(movieName)
      .subscribe((result: ApiMovies) => {
        if (result.Response === 'True') {
          this.movies = result.Search;
        } else {
          this.error = result.Error;
          setTimeout(() => {
            this.error = '';
          }, 3000);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
