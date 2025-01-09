import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
import { ToastService } from '../Services/toast.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private toastService: ToastService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticated() && this.authService.isTokenValid()) {
      return true;
    } else {
      this.authService.logout();
      this.toastService.show('Debe iniciar sesión.')
      this.router.navigate(['/login']);
      return false;
    }
  }
}