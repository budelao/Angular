import { Routes } from '@angular/router';
import { EstadosGridComponent } from './features/estados/estados-grid.component';

export const routes: Routes = [
{ path: 'estados', component: EstadosGridComponent },
 {
    path: '',
    redirectTo: 'estados',
    pathMatch: 'full'
  },
];
