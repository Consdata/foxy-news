import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService, User } from '@foxy-news/shared/auth/api';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseAuthService implements AuthService {
  constructor(private fireAuth: AngularFireAuth) {}

  async loginGoogle(): Promise<void> {
    try {
      await this.fireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error) {
      console.error(`Can't login user`, error);
    }
  }

  async logout(): Promise<void> {
    try {
      await this.fireAuth.auth.signOut();
    } catch (error) {
      console.error(`Can't logout user`, error);
    }
  }

  user(): Observable<User> {
    return this.fireAuth.user.pipe(
      map(u => ({
        displayName: u.displayName
      }))
    );
  }
}
