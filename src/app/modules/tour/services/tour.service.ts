import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tour } from '@app/shared/modal/tour';
import { environment } from '@env/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TourService {
  private baseUrl = `${environment.api}/api/v1`;

  constructor(private http: HttpClient) {}

  getAllTours(): Observable<Tour[]> {
    return this.http
      .get<Tour[]>(`${this.baseUrl}/tour`)
      .pipe(map((res: any) => res.data));
  }

  getTopTourCheap(): Observable<Tour[]> {
    return this.http
      .get<Tour[]>(`${this.baseUrl}/tour/top-5-cheap`)
      .pipe(map((res: any) => res.data));
  }

  getTourbyId(id: string): Observable<Tour> {
    return this.http
      .get<Tour>(`${this.baseUrl}/tour/${id}`)
      .pipe(map((res: any) => res.data));
  }

  reviewTour(id: string, body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/tour/${id}/reviews`, body);
  }
}
