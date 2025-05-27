import { Component, inject } from '@angular/core';
import {signInForm} from './login.form';
import {ReactiveFormsModule} from '@angular/forms';
import { RouteApp } from '../../../../shared/routes/app.route';
import { RouteLinkAuthentication } from '../../../../shared/routes/authentication.route';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly form = signInForm();
  private readonly router = inject(Router);

  signIn() {
    console.log('Login', this.form.value)
  }

  goToRegister() {
    this.router.navigateByUrl(`${ RouteApp.AUTHENTICATION }/${ RouteLinkAuthentication.REGISTRATION }`)
  }

}
