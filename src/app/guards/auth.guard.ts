import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Observable<boolean>((observer) => {
      this.authService.getAuthenticatedUser().subscribe({
        next: (authenticated: boolean) => {
          if (authenticated) {
            observer.next(true); // User is authenticated, allow access
            observer.complete();
          } else {
            this.router.navigate(['/login']); // User is not authenticated, redirect to the login page
            observer.next(false);
            observer.complete();
          }
        },
        error: (error) => {
          this.router.navigate(['/login']); // An error occurred, redirect to the login page
          observer.next(false);
          observer.complete();
        },
      });
    });
  }
}
