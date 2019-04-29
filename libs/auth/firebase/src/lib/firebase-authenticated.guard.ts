import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthenticatedGuard, AuthService} from '@foxy-news/auth/api';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class FirebaseAuthenticatedGuard implements AuthenticatedGuard {

  constructor(private authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.user().pipe(
      map(user => !!user)
    );
  }

}
