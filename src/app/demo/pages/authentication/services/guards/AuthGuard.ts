import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const requiresAuth = route.data['requiresAuth'] || false; // Exemplo de uso
    console.log('Route requiresAuth:', requiresAuth);
   
  
    const isAuthenticated = this.authService.isAuthenticated();
    console.log('AuthGuard - isAuthenticated:', isAuthenticated);
  
    if (isAuthenticated) {
      return true;
    } else {
      console.log('AuthGuard - Não autenticado. Redirecionando para /login.');
      this.router.navigate(['/login']);
      return false;
    }
  }
  
  
}
