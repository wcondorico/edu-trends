import { Component, inject } from '@angular/core';
import { signUpForm } from './registration.form';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFacade } from '../../application/facade/user.facade';
import { Router } from '@angular/router';
import { RouteApp } from '../../../../shared/routes/app.route';
import { RouteLinkAuthentication } from '../../../../shared/routes/authentication.route';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  readonly form = signUpForm();
  private readonly userFacade = inject(UserFacade);
  private readonly router = inject(Router);

  signUp() {
    if (this.form.invalid) return;

    const raw = this.form.getRawValue();
    const payload = {
      fullName: raw.fullName,
      email: raw.email,
      password: raw.password,
      isStudent: raw.userType === 'Alumno',
      isTeacher: raw.userType === 'Profesor',
    }

    this.userFacade.signUp(payload)
      .subscribe({
        next: () => {
          this.router.navigateByUrl(`${ RouteApp.PORTAL }`);
        },
        error: () => {
          console.log('error al registrarse')
        }
      })
  }

  goToLogin() {
    this.router.navigateByUrl(`${ RouteApp.AUTHENTICATION }/${ RouteLinkAuthentication.LOGIN }`)
  }
}
