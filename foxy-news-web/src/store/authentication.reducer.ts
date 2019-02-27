import {Action} from 'redux';
import {AppState} from '../app-state/app-state';
import {Injector} from '../injector/injector';
import {Authenticated} from './authenticated.action';

export const authenticationReducer = (injector: Injector) => {
  return (state: AppState, action: Action): AppState => {
    if (Authenticated.is(action)) {
      return state;
    } else {
      return state;
    }
  }
};
