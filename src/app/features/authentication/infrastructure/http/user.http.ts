import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {USER_ENDPOINTS} from '../endpoints/user.endpoints';
import {UserRepository} from '../../domain/repository/user.repository';
import {RefreshRequest, SignInRequest, SignUpRequest, Tokens} from '../interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserHttp implements UserRepository {
  private readonly http = inject(HttpClient);

  signIn(body: SignInRequest): Observable<Tokens> {
    return this.http.post<Tokens>(USER_ENDPOINTS.SIGN_IN, {
      email: body.email,
      password: body.password
    });
  }

  signUp(body: SignUpRequest): Observable<Tokens> {
    return this.http.post<Tokens>(USER_ENDPOINTS.SIGN_UP, {
      full_name: body.fullName,
      email: body.email,
      password: body.password,
      is_student: body.isStudent,
      is_teacher: body.isTeacher
    });
  }

  refresh(body: RefreshRequest): Observable<Tokens> {
    return this.http.post<Tokens>(USER_ENDPOINTS.REFRESH_TOKEN, body);
  }
}
