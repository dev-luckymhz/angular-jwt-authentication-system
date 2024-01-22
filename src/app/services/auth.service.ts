import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://yourapi.com/login';
  private registerUrl = 'http://yourapi.com/register';
  private logoutUrl = 'http://yourapi.com/logout';
  private userUrl = 'http://yourapi.com/user';

  constructor(private http: HttpClient) { }

  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post(this.loginUrl, credentials);
  }

  register(data: { firstname: string, lastname: string, company: string, email: string, password: string }): Observable<any> {
    return this.http.post(this.registerUrl, data);
  }

  logout(): Observable<any> {
    return this.http.get(this.logoutUrl);
  }

  getAuthenticatedUser(): Observable<any> {
    return this.http.get(this.userUrl, { withCredentials: true });
  }
}
