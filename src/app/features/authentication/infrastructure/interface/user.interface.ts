export interface Tokens {
  access: string;
  refresh: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  fullName: string;
  email: string;
  password: string;
  isStudent: boolean;
  isTeacher: boolean;
}

export interface RefreshRequest {
  refresh: string;
}
