import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService, User } from '@foxy-news/auth/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'fxy-navbar-user',
  template: `
    <span *ngIf="(user$ | async) as user" class="user-name">
      ({{ user.displayName }})
    </span>
    <fxy-login-button
      *ngIf="!(user$ | async)"
      (click)="onLoginClicked()"
    ></fxy-login-button>
    <fxy-logout-button
      *ngIf="(user$ | async)"
      (click)="onLogoutClicked()"
    ></fxy-logout-button>
  `,
  styleUrls: ['./navbar-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarUserComponent {
  user$: Observable<User>;

  constructor(private authService: AuthService) {
    this.user$ = authService.user();
  }

  onLoginClicked() {
    this.authService.loginGoogle();
  }

  onLogoutClicked() {
    this.authService.logout();
  }
}
