import { TestBed } from '@angular/core/testing';

import { TopRatedNewsService } from './top-rated-news.service';

describe('TopRatedNewsService', () => {
  let service: TopRatedNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopRatedNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
