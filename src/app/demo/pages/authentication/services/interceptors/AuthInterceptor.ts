import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Adiciona o token JWT ao cabeçalho se disponível
    const authData = this.authService.getAuthData();
    let clonedRequest = req;

    if (authData && authData.token) {
      clonedRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authData.token}`),
      });
    }

    // Continua a requisição e trata possíveis erros
    return next.handle(clonedRequest).pipe(
      catchError((error) => {
        if (error.status === 401) {
          // Redireciona para login/logout em caso de erro 401
          this.authService.logout();
        }
        return throwError(error);
      })
    );
  }
}
