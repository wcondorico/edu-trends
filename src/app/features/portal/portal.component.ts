import { Component } from '@angular/core';
import {PresentationComponent} from './views/presentation/presentation.component';
import {ProfileComponent} from './views/profile/profile.component';
import {VariantsGroupsComponent} from './views/variants-groups/variants-groups.component';

@Component({
  selector: 'app-portal',
  imports: [PresentationComponent, ProfileComponent, VariantsGroupsComponent],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent {

}
