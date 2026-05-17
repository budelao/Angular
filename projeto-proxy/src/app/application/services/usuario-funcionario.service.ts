import { Injectable } from "@angular/core";
import { GetUsuarioFuncionariosUseCase } from "../../domain/use-cases/get-usuario-funcionarios.usecase";

@Injectable({ providedIn: 'root' })
export class UsuarioFuncionarioService {
  constructor(private getUsuarioFuncionariosUseCase: GetUsuarioFuncionariosUseCase) {}

  getUsuarioFuncionarios() {
    return this.getUsuarioFuncionariosUseCase.execute();
  }
}