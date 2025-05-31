import { Component, input, signal } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-menu-button',
  imports: [MatIconModule],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss'
})
export class MenuButtonComponent {
  icon = input.required<string>();
}
