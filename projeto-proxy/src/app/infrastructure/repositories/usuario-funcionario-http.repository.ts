import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioFuncionario } from '../../domain/entities/usuario-funcionario.entity';
import { UsuarioFuncionarioRepository } from '../../domain/repositories/usuario-funcionario.repository';

@Injectable({ providedIn: 'root' })
export class UsuarioFuncionarioHttpRepository implements UsuarioFuncionarioRepository {
  private apiUrl = '/UsuarioFuncionario';

  constructor(private http: HttpClient) {}

  getUsuarioFuncionarios(): Observable<UsuarioFuncionario[]> {
    return this.http.get<UsuarioFuncionario[]>(`${this.apiUrl}/all`);
  }
}