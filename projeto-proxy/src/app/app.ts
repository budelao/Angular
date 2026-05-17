import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaCidadesComponent } from './presentation/pages/lista-cidades.component';
import { ListaUsuarioFuncionarioComponent } from './presentation/pages/lista-usuario-funcionario.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaCidadesComponent, ListaUsuarioFuncionarioComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto-teste-4');
}
