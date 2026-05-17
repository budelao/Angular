import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { EstadosMockRepository } from './infrastructure/repository/estados-mock.repository';
import { EstadosRepository } from './domain/repository/estados.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    { provide: EstadosRepository, useClass: EstadosMockRepository }
  ]
};
