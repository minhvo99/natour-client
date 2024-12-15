import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { environment } from '@env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROLE } from '../models/constants';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.api}/api/v1`;
  private userRoles!: string;
  private userSubject!: BehaviorSubject<User | null | any>;
  public user!: Observable<User | null | any>;

  constructor(private http: HttpClient, private router: Router) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('JWT_Token')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
}

  login (email: string, password: string): Observable<any> {
    const body = { email, password };

    return this.http.post<any>(`${this.baseUrl}/log-in`, body).pipe(
      map(res => {
        localStorage.setItem('JWT_Token', JSON.stringify(res.data));
        this.userRoles = res.roles;
        this.userSubject.next(res.data);
        return res;
      }),
    )
  }

  register (user: { name: string, email: string, password: string, passWordConfirm: string }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(`${this.baseUrl}/sign-up`, user, { headers }).pipe(
      map(res => {
        localStorage.setItem('JWT_Token', JSON.stringify(res.data));
        this.userRoles = res.roles;
        this.userSubject.next(res.data);
        return res;
      }),
    )
  }

  logout (): void {
    localStorage.removeItem('JWT_Token');
    this.userSubject.next(null);
  }

  get role(): string {
    return this.userRoles;
  }

  isAdmin(): boolean {
    return this.role === ROLE.ADMIN;
  }

  isLeadGuide(): boolean {
    return this.role === ROLE.LEAD_GUIDE;
  }

  isGuide(): boolean {
    return this.role === ROLE.GUIDE;
  }

  getUserInfo(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/me`).pipe(
      catchError(err => {
        this.logout();
        this.router.navigate(['/login']);
        return of(null);
      })
    );
  }
}
