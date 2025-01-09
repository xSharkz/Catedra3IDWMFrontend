import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../../Services/toast.service';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm;
  loginSuccess = false;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private toastService: ToastService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/(?=.*\d)/)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        () => {
          this.toastService.show('¡Inicio de sesión exitoso!');
          this.router.navigate(['/posts']);
        },
        () => {
          this.toastService.show('Credenciales inválidas.');
        }
      );
    }
  }

}
