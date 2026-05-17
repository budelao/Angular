import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { CidadesRepository } from './domain/repositories/cidades.repository';
import { CidadesMockRepository } from './infrastructure/repositories/cidades-mock.repository';
import { UsuarioFuncionarioRepository } from './domain/repositories/usuario-funcionario.repository';
import { UsuarioFuncionarioMockRepository } from './infrastructure/repositories/usuario-funcionario-mock.repository';
import { UsuarioFuncionarioHttpRepository } from './infrastructure/repositories/usuario-funcionario-http.repository';
// import { UsuarioFuncionarioHttpRepository } from './infrastructure/repositories/usuario-funcionario-http.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(),
    { provide: CidadesRepository, useClass: CidadesMockRepository },
    { provide: UsuarioFuncionarioRepository, useClass: UsuarioFuncionarioHttpRepository }
    // Para usar a API real, descomente a linha abaixo e comente a linha acima:
    // { provide: UsuarioFuncionarioRepository, useClass: UsuarioFuncionarioHttpRepository }
  ]
};
