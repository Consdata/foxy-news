import {Newsletter} from '@foxy-news/newsletters';
import firebase from 'firebase';
import {Epic} from 'redux-observable';
import {Observable} from 'rxjs';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../../../../state/app-state';
import {firebaseApp} from '../../../firebase/firebase.app';
import {fetchNewsletters} from './fetch-newsletters';
import {newslettersFetched} from './newsletters-fetched';

const firestore = firebaseApp.firestore();

export const fetchNewslettersEpic: Epic<ReturnType<typeof fetchNewsletters>, any, AppState> = (action$, state$) =>
  action$.ofType(fetchNewsletters.type).pipe(
    withLatestFrom(state$),
    switchMap(([action, state]) => new Observable<firebase.firestore.QuerySnapshot>(subscriber => {
      firestore.collection(`team/${state.links.team}/field/${state.links.field}/newsletter`).onSnapshot(subscriber);
    })),
    map(newsletters => newslettersFetched({
      newsletters: newsletters.docs.map(doc => doc.data() as Newsletter)
    })),
  );
