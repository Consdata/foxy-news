import {Epic} from 'redux-observable';
import {Observable} from 'rxjs';
import {first, switchMap, withLatestFrom} from 'rxjs/operators';
import {appBootstrap} from '../../../../platform/app-bootstrap';
import {AppState} from '../../../../state/app-state';
import {firebaseApp} from '../../../firebase/firebase.app';
import {loggedIn} from '../login/logged-in.action';
import {loggedOut} from '../logout/logged-out.action';

export const initAuthenticationOnAppBootstrapEpic: Epic<any, any, AppState> = (action$, state$) => action$
    .ofType(appBootstrap.type)
    .pipe(
        first(),
        withLatestFrom(state$),
        switchMap(([_, state]) => new Observable(subscriber =>
            firebaseApp.auth().onAuthStateChanged(
                auth => subscriber.next(auth ? loggedIn({email: auth.email}) : loggedOut(state.authentication.authenticated))
            )
        ))
    );
