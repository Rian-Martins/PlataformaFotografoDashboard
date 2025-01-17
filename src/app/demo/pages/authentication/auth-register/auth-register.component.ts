import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthData } from '../interfaces/IAuthData';

@Component({
  selector: 'app-auth-register',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.scss'],
})
export class AuthRegisterComponent {
  // Dados do formulário
  formData: Partial<AuthData> = {
    primeiroNome: '',
    segundoNome: '',
    empresa: '',
    email: '',
    senha: '',
    iniciais: '',
    estado: '',
    cpf: '',
    dataNascimento: '',
    numIdentidade: 0,
    orgaoExpedidor: '',
    naturalidade: '',
    estadoCivil: '',
    profissao: '',
    cep: '',
    bairro: '',
    cidade: '',
    contato: '',
    instagram: '',
  };

  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Método para envio do formulário
  onSubmit() {
    console.log('Valores do formulário:', this.formData);

    // Validação de campos obrigatórios
    const { primeiroNome, segundoNome, email, senha, cpf, dataNascimento } = this.formData;
    if (!primeiroNome || !segundoNome || !email || !senha || !cpf || !dataNascimento) {
      this.errorMessage = 'Por favor, preencha todos os campos obrigatórios.';
      return;
    }

    // Converte a data para o formato ISO
    this.formData.dataNascimento = new Date(this.formData.dataNascimento).toISOString().split('T')[0];

    // Envio dos dados com tipo parcial
    this.authService.cadastrar(this.formData as AuthData).subscribe({
      next: () => {
        console.log('Cadastro realizado com sucesso!');
        this.router.navigate(['/login']).then(() => {
          console.log('Redirecionado para a tela de login.');
        });
      },
      error: (err) => {
        console.error('Erro ao realizar cadastro:', err);
        this.errorMessage = err?.error?.message || 'Erro ao realizar cadastro. Tente novamente.';
      },
    });
  }

  // Opções de autenticação via terceiros
  SignUpOptions = [
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
}
