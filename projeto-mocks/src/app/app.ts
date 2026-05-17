import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstadosGridComponent } from './features/estados/estados-grid.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EstadosGridComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('projeto-teste-2');
}
