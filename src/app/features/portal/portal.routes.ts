import { Routes } from "@angular/router";
import { RoutePortal } from '../../shared/routes/portal.route';

export const portalRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./portal.component').then(c => c.PortalComponent),
    children: [
      {
        path: '',
        redirectTo: RoutePortal.PRESENTATION,
        pathMatch: 'full'
      },
      {
        path: RoutePortal.PRESENTATION,
        loadComponent: () => import('../portal/views/presentation/presentation.component').then(c => c.PresentationComponent)
      },
      {
        path: RoutePortal.GROUPS,
        loadComponent: () => import('../portal/views/variants-groups/variants-groups.component').then(c => c.VariantsGroupsComponent)
      },
      {
        path: RoutePortal.PROFILE,
        loadComponent: () => import('../portal/views/profile/profile.component').then(c => c.ProfileComponent)
      },
    ]
  }
]
