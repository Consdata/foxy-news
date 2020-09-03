import {replace} from 'connected-react-router';
import {Epic} from 'redux-observable';
import {of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {AppState} from '../../../../state/app-state';
import {loggedOut} from './logged-out.action';

export const redirectAfterLogout: Epic<any, any, AppState> = (action$, state$) => action$
  .ofType(loggedOut.type)
  .pipe(
    switchMap(action => {
      if (action.payload) {
        replace('/login');
      }
      return of();
    })
  );
