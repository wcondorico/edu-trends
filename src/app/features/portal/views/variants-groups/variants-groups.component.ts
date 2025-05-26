import {Component} from '@angular/core';
import {StudentComponent} from './student/student.component';
import {TeacherComponent} from './teacher/teacher.component';

@Component({
  selector: 'app-variants-groups',
  imports: [StudentComponent, TeacherComponent],
  templateUrl: './variants-groups.component.html',
  styleUrl: './variants-groups.component.scss'
})
export class VariantsGroupsComponent {

}
