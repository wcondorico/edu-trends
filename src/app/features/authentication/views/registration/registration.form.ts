import { FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { inject } from '@angular/core';

interface SignUpForm {
  userType: FormControl<string>;
  fullName: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
}

export const signUpForm = (): FormGroup<SignUpForm> => {
  const formBuilder = inject(NonNullableFormBuilder);
  return formBuilder.group({
    userType: formBuilder.control('', [Validators.required]),
    fullName: formBuilder.control('', [Validators.required]),
    email: formBuilder.control('', [Validators.required, Validators.email]),
    password: formBuilder.control('', [Validators.required, Validators.minLength(8)])
  })
};
