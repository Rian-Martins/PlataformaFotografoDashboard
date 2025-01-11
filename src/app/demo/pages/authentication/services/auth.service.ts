import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthData } from '../interfaces/IAuthData';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://localhost:5174/api/login/autenticar';
  //colocar em um enviroment
  private secretKey = 'sua-chave-super-secreta-com-no-minimo-32-caracteres';
  private loggedIn = false;

  constructor(private http: HttpClient, private router: Router) {
    console.log('AuthService initialized!');
  }

  //retorna os dados logados
  getDashboardData(): Observable<unknown> {
    return this.http.get(`${this.apiUrl}/dashboard`);
  }

  
  // Método de login
  login(email: string, senha: string): Observable<AuthData> {
    const body = { email, senha };
    console.log('Enviando requisição para o backend:', body);
    return this.http.post<AuthData>(this.apiUrl, { email, senha });
  }
  
  handleLoginSuccess(authData: AuthData) {
    // Armazena o token no localStorage
    localStorage.setItem('authToken', authData.token);
    console.log('Token armazenado no localStorage:', authData.token);

    // Redireciona para o Dashboard
    this.router.navigate(['/dashboard']).then(() => {
      console.log('Redirecionado para /dashboard');
    });
  }

  //observavel para controle de
  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated());
authStatus$ = this.authStatus.asObservable();

  // Armazena os dados criptografados no localStorage
  storeAuthData(data: AuthData) {
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      this.secretKey
    ).toString();
    localStorage.setItem('authData', encryptedData);
  }

  // Recupera os dados e descriptografa
  getAuthData(): AuthData | null {
    const encryptedData = localStorage.getItem('authData');
    if (encryptedData) {
      const decryptedData = CryptoJS.AES.decrypt(
        encryptedData,
        this.secretKey
      ).toString(CryptoJS.enc.Utf8);
      return JSON.parse(decryptedData);
    }
    return null;
  }


  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    console.log('Token encontrado no localStorage:', token);
  
    if (!token) {
      console.log('isAuthenticated - Token não encontrado.');
      return false; // Sem token, não autenticado
    }
  
    // (Opcional) Adicione verificação de expiração
    const authData = this.getAuthData(); // Se usar dados descriptografados
    if (authData && authData.expiration) {
      const isTokenValid = new Date(authData.expiration) > new Date();
      console.log('isAuthenticated - Token válido:', isTokenValid);
      return isTokenValid;
    }
  
    console.log('isAuthenticated - Nenhuma verificação adicional aplicada.');
    return true; // Apenas verifica a existência do token
  }

  
  

  // Logout (remove dados de autenticação)
  logout() {
    localStorage.removeItem('authData');
    this.router.navigate(['/login']);
  }
}
