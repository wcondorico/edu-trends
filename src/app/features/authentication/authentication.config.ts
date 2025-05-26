import { NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';
import { authenticationRoutes } from './authentication.routes';

@NgModule({
  providers: [
    provideRouter(authenticationRoutes)
  ],
})
export class AuthenticationConfig {
}
