import { Component, input } from '@angular/core';

export enum Button {
  primary = 'primary',
  secondary = 'secondary',
}

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  variant = input.required<Button>()
  protected readonly Button = Button;
}
