import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError, of } from 'rxjs';
import { YoutubeSearchResponse } from '../models/api-reponse';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly API_KEY = environment.API_KEY
  private readonly API_URL = "https://www.googleapis.com/youtube/v3/search"

  getVideos(query: string): Observable<YoutubeSearchResponse> {
    const params = new HttpParams()
      .set('key', this.API_KEY)
      .set('q', query)
      .set('part', 'snippet')
      .set('maxResults', '25')
      .set('type', 'video');
    
    return this.http.get<YoutubeSearchResponse>(this.API_URL, { params })
      .pipe(
        catchError(error => {
          console.error('Error fetching videos:', error);  
          return throwError(() => new Error('Failed to fetch videos. Please try again later.'));
        })
      );
  }
}
