import {Component} from '@angular/core';
import {signInForm} from './login.form';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly form = signInForm();

  signIn() {
    console.log('Login', this.form.value)
  }

  goToRegister() {
    console.log('go to register')
  }

}
