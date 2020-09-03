import {PendingLink} from '@foxy-news/links';
import firebase from 'firebase';
import {Epic} from 'redux-observable';
import {Observable, of} from 'rxjs';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../../../../state/app-state';
import {loggedIn} from '../../../authentication/state/login/logged-in.action';
import {firebaseApp} from '../../../firebase/firebase.app';
import {newsletterDraftFetched} from './newsletter-draft-fetched';

const firestore = firebaseApp.firestore();

export const fetchNewsletterDraftEpic: Epic<ReturnType<typeof loggedIn>, any, AppState> = (action$, state$) =>
  action$.ofType(loggedIn.type).pipe(
    withLatestFrom(state$),
    switchMap(([action, state]) => {
      if (action.payload) {
        return new Observable<firebase.firestore.QuerySnapshot>(subscriber => {
          firestore
            .collection(`team/${state.links.team}/field/${state.links.field}/link`)
            .where('newsletter', '==', 'current')
            .onSnapshot(subscriber);
        });
      } else {
        return of<firebase.firestore.QuerySnapshot>();
      }
    }),
    map(messages => newsletterDraftFetched({
      links: messages.docs.map(doc => (<PendingLink>{
        id: doc.id,
        ...doc.data()
      }))
    })),
  );
