import {ClassReducer} from '../redux/class-reducer';
import {AuthenticationState} from './authentication-state';

export class AuthenticationReducer extends ClassReducer<AuthenticationState> {

  initialState(): AuthenticationState {
    return {
      user: undefined,
      authenticated: false
    };
  }

  reduce(state: AuthenticationState, action: any): AuthenticationState {
    return state;
  }

}
