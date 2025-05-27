import {Observable} from 'rxjs';
import {RefreshRequest, SignInRequest, SignUpRequest, Tokens} from '../../infrastructure/interface/user.interface';


export abstract class UserRepository {
  abstract signIn(body: SignInRequest): Observable<Tokens>;
  abstract signUp(body: SignUpRequest): Observable<Tokens>;
  abstract refresh(body: RefreshRequest): Observable<Tokens>;
}
