import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';

import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig =
{
  providers:
  [
    // Provides Angular error handling for the application.
    provideBrowserGlobalErrorListeners(),

    // Enables application routing.
    provideRouter(routes),

    // Allows Angular to communicate with the REST API.
    provideHttpClient()
  ]
};
