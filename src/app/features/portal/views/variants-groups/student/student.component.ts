import { Component } from '@angular/core';
import { TitleComponent } from '../../../components/title/title.component';
import { Button, ButtonComponent } from '../../../components/button/button.component';

@Component({
  selector: 'app-student',
  imports: [
    TitleComponent,
    ButtonComponent
  ],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  protected readonly Button = Button;
}
