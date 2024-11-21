import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core'; // Importa esto
import { FormsModule } from '@angular/forms'; // Importa FormsModule

import { routes } from './app.routes';
import { registroService } from './pages/Ventas/registro-gastos/services/registro.service';
import { VentasServicio } from './pages/Ventas/services/ventas.service';
import { historicoService } from './pages/Ventas/historico/service/historico.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(), // Proveer HttpClient globalmente
    importProvidersFrom(FormsModule), // Agrega FormsModule como proveedor
    registroService,
    VentasServicio,
    historicoService
  ],
};
