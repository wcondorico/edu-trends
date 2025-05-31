import { Component, inject, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { RouteApp } from '../../../../shared/routes/app.route';
import { RoutePortal } from '../../../../shared/routes/portal.route';

@Component({
  selector: 'app-menu-button',
  imports: [MatIconModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {
  icon = input.required<string>();
  link = input<RoutePortal>();
  private readonly router = inject(Router);

  goToLink() {
    if (!this.link()) return;
    this.router.navigateByUrl(`${ RouteApp.PORTAL }/${this.link()}`)
  }
}
