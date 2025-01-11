// project import
import { Component } from '@angular/core';
 import {RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';





@Component({
  selector: 'app-auth-login',
   imports: [RouterModule,CommonModule, FormsModule], // Including FormsModule here
  
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.scss'
})
export class AuthLoginComponent {
  isActive = false;

  email: string = '';
  senha: string = '';
  relembrar: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    if (!this.email || !this.senha) {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      return;
    }

    this.authService.login(this.email, this.senha).subscribe({
      next: (authData) => {
        console.log('Login bem-sucedido', authData);
        this.authService.handleLoginSuccess(authData); // Para redirecionamento
      },
      error: (err) => {
        console.log('Erro ao fazer login:', err);
        this.errorMessage = 'Credenciais inválidas.';
      },
    });
  }

  SignInOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];
}
