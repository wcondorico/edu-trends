import { Component, inject } from '@angular/core';
import {signInForm} from './login.form';
import {ReactiveFormsModule} from '@angular/forms';
import { RouteApp } from '../../../../shared/routes/app.route';
import { RouteLinkAuthentication } from '../../../../shared/routes/authentication.route';
import { Router } from '@angular/router';
import { UserFacade } from '../../application/facade/user.facade';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  readonly form = signInForm();
  private readonly router = inject(Router);
  private readonly userFacade = inject(UserFacade);

  signIn() {
    if (this.form.invalid) return;

    this.userFacade.signIn(this.form.getRawValue()).subscribe({
      next: () => {
        this.router.navigateByUrl(
          `${RouteApp.PORTAL}`
        );
      },
      error: () => {
        console.log('error al registrarse')
      },
    });
  }

  goToRegister() {
    this.router.navigateByUrl(`${ RouteApp.AUTHENTICATION }/${ RouteLinkAuthentication.REGISTRATION }`)
  }

}
