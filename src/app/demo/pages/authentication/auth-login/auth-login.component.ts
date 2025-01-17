import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzAlertModule } from 'ng-zorro-antd/alert'; // Import para alertas

@Component({
  selector: 'app-auth-login',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    NzProgressModule, // Módulo de progresso
    NzAlertModule,    // Módulo de alerta
  ],
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent {
  email: string = '';
  senha: string = '';
  errorMessage: string = '';
  loginInProgress: boolean = false;
  loginSuccess: boolean | null = null;

  // Opções de autenticação via terceiros
  SignInOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google',
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter',
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook',
    },
  ];

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (!this.email || !this.senha) {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      return;
    }

    this.loginInProgress = true;
    this.loginSuccess = null;
    this.errorMessage = '';

    this.authService.login(this.email, this.senha).subscribe({
      next: (authData) => {
        console.log('Login bem-sucedido', authData);
        this.authService.handleLoginSuccess(authData);
        this.loginSuccess = true;
        this.loginInProgress = false;
      },
      error: (err) => {
        console.error('Erro ao fazer login:', err);
        this.errorMessage = 'Credenciais inválidas.';
        this.loginSuccess = false;
        this.loginInProgress = false;
      },
    });
  }
}
