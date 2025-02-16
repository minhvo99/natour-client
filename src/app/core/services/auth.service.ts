import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  from,
  map,
  Observable,
  of,
  switchMap,
} from 'rxjs';
import { environment } from '@env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ROLE } from '../models/constants';
import { User } from '../models/user';
import { Router } from '@angular/router';
import {
  SocialAuthService,
  GoogleLoginProvider,
  SocialUser,
} from '@abacritt/angularx-social-login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = `${environment.api}/api/v1`;
  private userRoles!: string;
  private userSubject!: BehaviorSubject<User | null | any>;
  public user!: Observable<User | null | any>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private socialAuthService: SocialAuthService,
  ) {
    this.userSubject = new BehaviorSubject(
      JSON.parse(localStorage.getItem('JWT_Token')!),
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };

    return this.http.post<any>(`${this.baseUrl}/log-in`, body).pipe(
      map((res) => {
        localStorage.setItem('JWT_Token', JSON.stringify(res.data));
        this.userRoles = res.data.role;
        this.userSubject.next(res.data);
        return res;
      }),
    );
  }

  loginWithGoogle(idToken: string): Observable<any> {
    return this.http
      .post<any>(`${this.baseUrl}/google-login`, {
        idToken,
      })
      .pipe(
        map((res) => {
          localStorage.setItem('JWT_Token', JSON.stringify(res.data));
          this.userRoles = res.data.role;
          this.userSubject.next(res.data);
          return res;
        }),
      );
  }

  register(user: {
    name: string;
    email: string;
    password: string;
    passWordConfirm: string;
  }): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post<any>(`${this.baseUrl}/sign-up`, user, { headers })
      .pipe(
        map((res) => {
          localStorage.setItem('JWT_Token', JSON.stringify(res.data));
          this.userRoles = res.data.role;
          this.userSubject.next(res.data);
          return res;
        }),
      );
  }

  logout(): void {
    this.socialAuthService.signOut().then(() => {
      localStorage.removeItem("JWT_Token");
      this.userSubject.next(null);
      this.router.navigate(["/"]);
    });
  }

  isAdmin(): boolean {
    return this.getCurrentRole() === ROLE.ADMIN;
  }

  isLeadGuide(): boolean {
    return this.getCurrentRole() === ROLE.LEAD_GUIDE;
  }

  isGuide(): boolean {
    return this.getCurrentRole() === ROLE.GUIDE;
  }

  private getCurrentRole(): string {
    const user = this.userSubject.value;
    return user?.role || '';
  }

  getUserInfo(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/user/me`).pipe(
      map((res) => res.data),
      catchError((err) => {
        this.logout();
        this.router.navigate(['/']);
        return of(null);
      }),
    );
  }
}
