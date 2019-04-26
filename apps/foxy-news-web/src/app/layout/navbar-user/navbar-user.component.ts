import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Component({
  selector: 'fxy-navbar-user',
  template: `
    <span *ngIf="auth.user | async as user" class="user-name">
      ({{user.displayName}})
    </span>
    <fxy-login-button *ngIf="!(auth.user | async)" (click)="onLoginClicked()"></fxy-login-button>
    <fxy-logout-button *ngIf="(auth.user | async)" (click)="onLogoutClicked()"></fxy-logout-button>
  `,
  styleUrls: ['./navbar-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarUserComponent {

  constructor(public auth: AngularFireAuth) {
  }

  onLoginClicked() {
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  onLogoutClicked() {
    this.auth.auth.signOut();
  }

}
