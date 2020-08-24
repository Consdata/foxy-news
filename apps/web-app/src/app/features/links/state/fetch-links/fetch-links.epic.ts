import firebase from 'firebase';
import {Epic} from 'redux-observable';
import {Observable, of} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {AppState} from '../../../../state/app-state';
import {loggedIn} from '../../../authentication/state/login/logged-in.action';
import {firebaseApp} from '../../../firebase/firebase.app';
import {Link} from '../link';
import {linksFetched} from './links-fetched';

const firestore = firebaseApp.firestore();
const team = 'consdata';
const field = 'tech';

export const fetchLinksEpic: Epic<ReturnType<typeof loggedIn>, any, AppState> = (action$, state$) =>
    action$.ofType(loggedIn.type).pipe(
        switchMap(user => {
            if (user) {
                return new Observable<firebase.firestore.QuerySnapshot>(subscriber => {
                    firestore.collection(`team/${team}/field/${field}/link`).onSnapshot(subscriber);
                });
            } else {
                return of<firebase.firestore.QuerySnapshot>();
            }
        }),
        map(messages => linksFetched({
            links: messages.docs.map(doc => (<Link>{
                id: doc.id,
                ...doc.data()
            }))
        })),
    );
