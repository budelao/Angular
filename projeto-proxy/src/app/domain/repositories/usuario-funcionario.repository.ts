import { Observable } from "rxjs";
import { UsuarioFuncionario } from "../entities/usuario-funcionario.entity";

export abstract class UsuarioFuncionarioRepository {
  abstract getUsuarioFuncionarios(): Observable<UsuarioFuncionario[]>;
}