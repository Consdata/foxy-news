import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AuthenticatedGuard, AuthService } from '@foxy-news/shared/auth/api';
import { FirebaseModule } from '@foxy-news/shared/firebase';
import { FirebaseAuthService } from './firebase-auth.service';
import { FirebaseAuthenticatedGuard } from './firebase-authenticated.guard';

@NgModule({
  imports: [CommonModule, FirebaseModule]
})
export class AuthFirebaseModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthFirebaseModule,
      providers: [
        { provide: AuthService, useClass: FirebaseAuthService },
        { provide: AuthenticatedGuard, useClass: FirebaseAuthenticatedGuard }
      ]
    };
  }
}
