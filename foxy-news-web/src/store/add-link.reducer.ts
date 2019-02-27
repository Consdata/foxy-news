import {Action} from 'redux';
import {AppState} from '../app-state/app-state';
import {Injector} from '../injector/injector';

export const addLinkReducer = (injector: Injector) => {
  return (state: AppState, action: Action): AppState => {
    return state;
  }
};
