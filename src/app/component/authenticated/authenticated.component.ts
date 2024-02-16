import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-authenticated',
  templateUrl: './authenticated.component.html',
  styleUrls: ['./authenticated.component.css']
})
export class AuthenticatedComponent implements OnInit {
  authenticatedUser: any; // Declare a variable to store authenticated user details

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getAuthenticatedUser().subscribe(
      (user) => {
        this.authenticatedUser = user;
      },
      (error) => {
        console.error('Error fetching authenticated user:', error);
      }
    );
  }

  logout() {
    this.router.navigate(['/logout']);
  }
}
