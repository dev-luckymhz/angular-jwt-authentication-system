// logout.component.ts
import { Component } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";


@Component({
  template: '',
})
export class LogoutComponent {
  constructor(private authService: AuthService, private router: Router) {
    this.authService.logout().subscribe({
    next : () => {
      this.router.navigate(['/login']);
    },
    error : (error) => {
      console.error('Logout error:', error);
    }
    });
  }
}
