import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { portalRoutes } from './portal.routes';

@NgModule({
  providers: [
    provideRouter(portalRoutes)
  ],
})
export class PortalConfig {
}
