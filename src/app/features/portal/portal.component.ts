import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { RoutePortal } from '../../shared/routes/portal.route';
import { TitleComponent } from './components/title/title.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-portal',
  imports: [ MenuButtonComponent, RouterOutlet, TitleComponent],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent implements OnInit{
  private readonly route = inject(Router);
  menuItems = [
    {
      icon: '🖥️​',
      text: 'Presentación',
      link: RoutePortal.PRESENTATION
    },
    {
      icon: '🖥️​',
      text: 'Grupos',
      link: RoutePortal.GROUPS
    },
    {
      icon: '🖥️​',
      text: 'Perfil',
      link: RoutePortal.PROFILE
    },
    {
      icon: '🖥️​',
      text: 'Cerrar sesión',
      link: RoutePortal.PROFILE
    }
  ]
  title = signal(this.getTitle(this.route.url));

  ngOnInit() {
    this.route.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(value => this.title.set(this.getTitle(value.url)))
  }

  getTitle(url: string): string {
    return this.menuItems.find(item => url.includes(item.link))?.text || '';
  }

}
