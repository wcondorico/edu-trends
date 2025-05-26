import { Routes } from "@angular/router";
import { RoutePortal } from '../../shared/routes/portal.route';
import { RouteAuthentication } from '../../shared/routes/authentication.route';

export const authenticationRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./authentication.component').then(c => c.AuthenticationComponent),
    children: [
      {
        path: RouteAuthentication.REGISTRATION,
        loadComponent: () => import('./views/registration/registration.component').then(c => c.RegistrationComponent)
      },
      {
        path: RouteAuthentication.LOGIN,
        loadComponent: () => import('./views/login/login.component').then(c => c.LoginComponent)
      },
    ]
  }
]
