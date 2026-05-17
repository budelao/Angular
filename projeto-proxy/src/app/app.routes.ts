import { Routes } from '@angular/router';
import { ListaCidadesComponent } from './presentation/pages/lista-cidades.component';
import { ListaUsuarioFuncionarioComponent } from './presentation/pages/lista-usuario-funcionario.component';

export const routes: Routes = [
    { path: 'cidades', component: ListaCidadesComponent },
    { path: 'usuarios', component: ListaUsuarioFuncionarioComponent },
    { path: '', redirectTo: '/cidades', pathMatch: 'full' },
    { path: 'cidades', redirectTo: '/cidades', pathMatch: 'full' },
    { path: 'usuarios', redirectTo: '/usuarios', pathMatch: 'full' }
];
