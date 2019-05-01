import { Observable } from 'rxjs';
import { User } from './user/user';

export abstract class AuthService {
  abstract loginGoogle(): void;

  abstract logout(): void;

  abstract user(): Observable<User>;
}
