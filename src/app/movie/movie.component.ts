import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesApiService } from '../services/moviesApiService.service';
import { MovieInterface } from '../models/Movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: MovieInterface;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private service: MoviesApiService
  ) {}

  ngOnInit(): void {
    let movieId = this.route.snapshot.paramMap.get('id');
    this.subscription = this.service
      .getMovie(movieId)
      .subscribe((result: MovieInterface) => {
        this.movie = result;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
