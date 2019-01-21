import {AuthenticationReducer} from './authentication/authentication-reducer';

export class Injector {

  static readonly injector = new Injector();
  readonly authenticationReducer: AuthenticationReducer;

  constructor() {
    this.authenticationReducer = new AuthenticationReducer();
  }

}
