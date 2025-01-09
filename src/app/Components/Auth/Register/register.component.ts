import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastService } from '../../../Services/toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm;
  errorMessage: string = '';
  constructor(private fb: FormBuilder, private authService: AuthService, private toastService: ToastService, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { email, password } = this.registerForm.value;
      this.authService.register({ email, password }).subscribe(
        () => {
          this.toastService.show('¡Registro exitoso! Por favor, inicia sesión.');
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        (error) => {
          this.errorMessage = error.error.message || 'Error desconocido al registrar';
          this.toastService.show(error.error.message);
          this.registerForm.patchValue({ password: ''});
        }
      );
    }
  }
}
