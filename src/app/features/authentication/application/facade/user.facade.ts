import { inject, Injectable } from '@angular/core';
import { UserRepository } from '../../domain/repository/user.repository';
import {
  RefreshRequest,
  SignInRequest,
  SignUpRequest,
  Tokens
} from '../../infrastructure/interface/user.interface';
import { catchError, mergeMap, tap, throwError } from 'rxjs';
import { JwtParserService } from '../../infrastructure/services/jwt-parser.service';
import { UserStore } from '../../../../application/store/user.store';
import { TokenStore } from '../../../../application/store/token.store';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  private readonly userRepository = inject(UserRepository);
  private readonly jwtParser = inject(JwtParserService);
  private readonly userStore = inject(UserStore);
  private readonly tokenStore = inject(TokenStore);

  init(): void {
    const accessToken = this.tokenStore.accessToken();
    if (!accessToken) return;

    const payload = this.jwtParser.parsePayload(accessToken);
    if (!payload) return;

    this.userStore.setUser({
      id: payload.id,
      fullName: payload.full_name,
      email: payload.email,
      isStudent: payload.isStudent,
      isTeacher: payload.isTeacher
    });
  }

  signIn(body: SignInRequest) {
    return this.userRepository.signIn(body)
      .pipe(
        tap(value => this.handleAuth(value))
      );
  }

  signUp(body: SignUpRequest) {
    return this.userRepository.signUp(body)
      .pipe(
        tap(value => this.handleAuth(value))
      );
  }

  refresh(body: RefreshRequest) {
    return this.userRepository.refresh(body)
      .pipe(
        tap(value => this.handleAuth(value)),
        catchError(error => {
          this.tokenStore.clear();
          this.userStore.clear();
          return throwError(() => error);
        })
      );
  }

  private handleAuth(value: Tokens): void {
    this.tokenStore.setTokens(value.access, value.refresh);

    const payload = this.jwtParser.parsePayload(value.access);
    if (payload) {
      this.userStore.setUser({
        id: payload.id,
        fullName: payload.full_name,
        email: payload.email,
        isStudent: payload.isStudent,
        isTeacher: payload.isTeacher
      });
    }
  }
}
