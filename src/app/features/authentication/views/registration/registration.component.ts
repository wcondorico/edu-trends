import { Component } from '@angular/core';
import { signUpForm } from './registration.form';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-registration',
  imports: [ ReactiveFormsModule ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  readonly form = signUpForm();

  signUp() {
    console.log('register', this.form.value)
  }
  goToLogin() {
    console.log('go to login')
  }
}
