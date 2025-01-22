import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tour } from '@app/shared/modal/tour';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ManagementTourService {
  constructor(private http: HttpClient) {}

  private baseUrl = `${environment.api}/api/v1`;

  getAllTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(`${this.baseUrl}/tour`);
  }

  getAllReviews(): Observable<any> {
    return this.http.get(`${this.baseUrl}/review`);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/user`);
  }

  getAllBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings`);
  }

  getTourStast(): Observable<any> {
    return this.http.get(`${this.baseUrl}/tour/tour-stast`);
  }
}
