import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core';

interface SignInForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

export const signInForm = (): FormGroup<SignInForm> => {
  const formBuilder = inject(NonNullableFormBuilder);
  return formBuilder.group({
    email: formBuilder.control('', [Validators.required, Validators.email]),
    password: formBuilder.control('', [Validators.required, Validators.minLength(8)])
  })
};
