import { environment } from '../../../../../environments/environment';

export const USER_ENDPOINTS = {
  SIGN_IN: `${environment.api}/api/auth/login/`,
  SIGN_UP: `${environment.api}/api/auth/register/`,
  REFRESH_TOKEN: `${environment.api}/api/auth/refresh/`,
}
