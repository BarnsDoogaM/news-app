import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TopRatedNews } from './top-rated-news'
import { Observable, catchError, map, shareReplay, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopRatedNewsService {
  private API_KEY = "ab59be8334c843e39d8ecdcfaa023de6";

  constructor(private http: HttpClient) { }


  getNews(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/sources?country=us&apiKey=' + this.API_KEY)
  }
  getTopHeadLines(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + this.API_KEY)
    
  }
  getArtclesById(source: string): Observable<any> {
    return this.http.get('https://newsapi.org/v2/top-headlines/sources?apiKey=' + source + this.API_KEY)

  }

}
