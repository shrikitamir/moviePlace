import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MoviesApiService } from './moviesApiService.service';

describe('MoviesServiceService', () => {
  let service: MoviesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientModule] });
    service = TestBed.inject(MoviesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
