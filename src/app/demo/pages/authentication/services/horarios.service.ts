import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {
  private apiUrl = 'http://localhost:5174/api/alunosreposicao'; // URL base da sua API

  constructor(private http: HttpClient) { }

  // Método para buscar horários com base na data
  getHorariosPorData(data: string): Observable<string[]> {
    const url = `${this.apiUrl}/listar/data/${data}`;
    return this.http.get<string[]>(url);
  }
  

  // Método para buscar nomes com base na data e no horário
  getNomesPorDataEHorario(data: string, horario: string): Observable<{ diaSemana: string; nome: string; horario: string }[]> {
    const url = `${this.apiUrl}/listar/data/${data}/horario/${horario}`;
    return this.http.get<{ diaSemana: string; nome: string; horario: string }[]>(url);
  }
  
  
}
