import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';

@Component({
  selector: 'app-portal',
  imports: [ MenuButtonComponent, RouterOutlet ],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent {
  menuItems = [
    {
      icon: '🖥️​',
      text: 'Presentación'
    },
    {
      icon: '🖥️​',
      text: 'Grupos'
    },
    {
      icon: '🖥️​',
      text: 'Perfil'
    },
    {
      icon: '🖥️​',
      text: 'Cerrar sesión'
    }
  ]
}
