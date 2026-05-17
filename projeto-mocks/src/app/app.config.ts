import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { EstadosRepository } from './core/domain/repositories/estados.repository';
import { EstadosMockRepository } from './core/data/repositories-impl/estados-mock.repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    
    { provide: EstadosRepository, useClass: EstadosMockRepository }
  ]
};
