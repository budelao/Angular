import { of, Observable } from "rxjs";
import { UsuarioFuncionario } from "../../domain/entities/usuario-funcionario.entity";
import { UsuarioFuncionarioRepository } from "../../domain/repositories/usuario-funcionario.repository";

export class UsuarioFuncionarioMockRepository implements UsuarioFuncionarioRepository {
  getUsuarioFuncionarios(): Observable<UsuarioFuncionario[]> {
    // Mock implementation - replace with actual API call
    return of([
      new UsuarioFuncionario(1, "Admin", "777")
    ]);
  }
}