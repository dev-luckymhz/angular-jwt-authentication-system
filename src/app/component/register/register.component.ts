import {Component, OnInit, ViewChild} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";
import {ToastComponent} from "../toast/toast.component";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../app.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  @ViewChild('toast') toastComponent!: ToastComponent;

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      company: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  showToast(message: string, type: 'success' | 'danger' | 'info' | 'warning') {
    this.toastComponent.display(message, type);
  }

  ngOnInit(): void {
  }

  register() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {

          this.router.navigate(['/login']);
        },
        error: (error) => {
          // Handle error here
        }
      });
    }
  }

  get f() { return this.registerForm.controls; }
}
