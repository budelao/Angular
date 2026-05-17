import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaEstadosComponent } from './presentation/pages/lista-estados.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaEstadosComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto-teste-3');
}
