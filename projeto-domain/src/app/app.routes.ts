import { Routes } from '@angular/router';
import { ListaEstadosComponent } from './presentation/pages/lista-estados.component';

export const routes: Routes = [
    { path: 'estados', component: ListaEstadosComponent },
    { path: '', redirectTo: '/estados', pathMatch: 'full' }
];
