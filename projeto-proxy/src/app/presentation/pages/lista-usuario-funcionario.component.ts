import { Component, OnInit } from "@angular/core";
import { UsuarioFuncionario } from "../../domain/entities/usuario-funcionario.entity";
import { Observable } from "rxjs/internal/Observable";
import { of } from "rxjs";
import { UsuarioFuncionarioService } from "../../application/services/usuario-funcionario.service";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-lista-usuario-funcionario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-usuario-funcionario.component.html'
})
export class ListaUsuarioFuncionarioComponent implements OnInit {
  usuarioFuncionarios: Observable<UsuarioFuncionario[]> = of([]);

  constructor(private usuarioFuncionarioService: UsuarioFuncionarioService) {}

  ngOnInit(): void {
    // chamada serviço para obter os usuários funcionários
    this.usuarioFuncionarios = this.usuarioFuncionarioService.getUsuarioFuncionarios();
  }
}