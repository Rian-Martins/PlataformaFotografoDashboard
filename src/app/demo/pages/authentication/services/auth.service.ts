import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthData } from '../interfaces/IAuthData';
import { User } from '../interfaces/IUser';
import { environment } from '../../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private AuteUrl = environment.autenticar; // Endpoint para autenticação
  private userDetailsUrl = environment.userDetails; // Endpoint para obter detalhes do usuário
  private cadasUrl = environment.cadastrar; // Endpoint para cadastro
  private secretKey = 'sua-chave-super-secreta-com-no-minimo-32-caracteres'; // Chave para criptografia
  private currentUser: User = null; // Armazena o usuário atual

  // Gerencia o status de autenticação
  private authStatus = new BehaviorSubject<boolean>(this.isAuthenticated());
  authStatus$ = this.authStatus.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    console.log('AuthService initialized!');
  }

  // Método de login
  login(email: string, senha: string): Observable<AuthData> {
    const body = { email, senha };
    console.log('Enviando requisição para o backend:', body);
    return this.http.post<AuthData>(this.AuteUrl, body);
  }

  // Método para cadastro
  cadastrar(data: Partial<AuthData>): Observable<AuthData> {
    console.log('Cadastrando seguintes dados:', data);
    return this.http.post<AuthData>(this.cadasUrl, data);
  }

  // Manipula o sucesso do login
  handleLoginSuccess(authData: AuthData): void {
    console.log('Dados recebidos do login:', authData);

    if (!authData || !authData.token || !authData.id) {
      console.error('Dados inválidos recebidos do backend:', authData);
      throw new Error('Falha na autenticação. Dados incompletos recebidos.');
    }

    localStorage.setItem('authToken', authData.token);
    localStorage.setItem('userId', authData.id);

    this.fetchUserDetails(authData.id).subscribe({
      next: (user) => {
        this.currentUser = {
          primeiroNome: user.primeiroNome || '',
          segundoNome: user.segundoNome || '',
          email: user.email,
        };
        this.authStatus.next(true);

        // Redirecionar para o dashboard
        this.router.navigate(['/dashboard']).then(() => {
          console.log('Redirecionado para o dashboard');
        });
      },
      error: (err) => {
        console.error('Erro ao buscar detalhes do usuário:', err);
        this.logout();
      },
    });
  }


  

  // Obtém os detalhes do usuário pelo ID
  fetchUserDetails(id: string): Observable<User> {
    const url = `${this.userDetailsUrl}/${id}`.replace(/([^:]\/)\/+/g, '$1'); // Remove barras extras
    console.log('URL construída para buscar usuário:', url);
    return this.http.get<User>(url);
  }
  
  

  // Obtém o usuário atual
  getCurrentUser(): User | null {
    if (!this.currentUser) {
      const userId = localStorage.getItem('userId');
      if (userId) {
        this.fetchUserDetails(userId).subscribe({
          next: (user) => (this.currentUser = user),
          error: (err) => console.error('Erro ao buscar detalhes do usuário:', err),
        });
      }
    }
    return this.currentUser;
  }

  // Verifica se o usuário está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    return !!token;
  }

  // Logout do usuário
  logout(): void {
    localStorage.clear();
    this.currentUser = null;
    this.authStatus.next(false);
    this.router.navigate(['/login']).then(() => {
      console.log('Usuário deslogado e redirecionado para /login');
    });
  }
}
