import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {ToastComponent} from "../toast/toast.component";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../app.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('toast') toastComponent!: ToastComponent;
  loginForm: FormGroup;

  constructor( private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          // Handle response
          this.router.navigate(['/dashboard']); // Navigate to dashboard after successful login
        },
        error: (error) => {
          // Handle error
        }
      });
    }
  }

  showToast(message: string, type: 'success' | 'danger' | 'info' | 'warning') {
    this.toastComponent.display(message, type);
  }


  get f() { return this.loginForm.controls; }
}
