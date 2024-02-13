import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { ToastComponent } from "../toast/toast.component";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // Form Group for registration
  registerForm: FormGroup;

  // Reference to the ToastComponent for displaying messages
  @ViewChild('toast') toastComponent!: ToastComponent;

  constructor(private authService: AuthService, private router: Router) {
    // Initialize the registration form with form controls
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      company: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  // Display toast messages for user feedback
  showToast(message: string, type: 'success' | 'danger' | 'info' | 'warning') {
    this.toastComponent.display(message, type);
  }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  // Handle user registration
  register() {
    // Check if the registration form is valid
    if (this.registerForm.valid) {
      // Call the AuthService to register the user
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          // Redirect to login page upon successful registration
          this.router.navigate(['/login']);
        },
        error: (error) => {
          // Handle error here, if needed
          console.error('Registration error:', error);
        }
      });
    }
  }

  // Getter to easily access form controls in the template
  get f() { return this.registerForm.controls; }
}
