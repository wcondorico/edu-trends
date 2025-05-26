import { Routes } from '@angular/router';
import { RouteApp } from './shared/routes/app.route';
import {authenticatedGuard} from './shared/guards/authenticated.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: RouteApp.AUTHENTICATION,
    pathMatch: 'full'
  },
  {
    path: RouteApp.AUTHENTICATION,
    loadChildren: () => import('./features/authentication/authentication.config').then(c => c.AuthenticationConfig)
  },
  {
    path: RouteApp.PORTAL,
    loadChildren: () => import('./features/portal/portal.config').then(c => c.PortalConfig),
    canActivate: [authenticatedGuard]
  }
];
