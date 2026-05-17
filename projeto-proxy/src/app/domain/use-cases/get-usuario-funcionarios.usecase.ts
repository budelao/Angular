import { Injectable, inject } from "@angular/core";
import { UsuarioFuncionarioRepository } from "../repositories/usuario-funcionario.repository";
import { UsuarioFuncionario } from "../entities/usuario-funcionario.entity";
import { Observable } from "rxjs/internal/Observable";

@Injectable({ providedIn: 'root' })
export class GetUsuarioFuncionariosUseCase {
  private usuarioFuncionarioRepository = inject(UsuarioFuncionarioRepository);

  execute(): Observable<UsuarioFuncionario[]> {
    return this.usuarioFuncionarioRepository.getUsuarioFuncionarios();
  }
}