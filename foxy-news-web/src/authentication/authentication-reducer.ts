import {Action} from 'redux';
import {Injector} from '../injector/injector';
import {AuthenticationInitialState} from './authentication-initial-state';
import {AuthenticationState} from './authentication-state';

export const authenticationReducer = (injector: Injector) => {
  return (state: AuthenticationState = AuthenticationInitialState, action: Action) => {
    switch (action.type) {
      case 'test':
        return {
          ...state,
          authenticated: true
        };
      default:
        return state;
    }
  }
}
