import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';

  private loginUrl = `${this.baseUrl}/login`;
  private registerUrl = `${this.baseUrl}/register`;
  private logoutUrl = `${this.baseUrl}/logout`;
  private userUrl = `${this.baseUrl}/profile`;

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

  register(data: { firstName: string, lastName: string, company: string, email: string, username: string, password: string }): Observable<any> {
    return this.http.post(this.registerUrl, data);
  }

  logout(): Observable<any> {
    return this.http.get(this.logoutUrl);
  }

  getAuthenticatedUser(): Observable<any> {
    return this.http.get(this.userUrl, { withCredentials: true });
  }
}
