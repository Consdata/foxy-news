import {PendingLink} from '@foxy-news/links';
import firebase from 'firebase';
import {Epic} from 'redux-observable';
import {combineLatest, Observable, of} from 'rxjs';
import {distinctUntilChanged, map, switchMap, tap} from 'rxjs/operators';
import {AppState} from '../../../../state/app-state';
import {loggedIn} from '../../../authentication/state/login/logged-in.action';
import {firebaseApp} from '../../../firebase/firebase.app';
import {linksFetched} from './links-fetched';

const firestore = firebaseApp.firestore();

export const fetchLinksEpic: Epic<ReturnType<typeof loggedIn>, any, AppState> = (action$, state$) =>
  combineLatest([
    state$.pipe(map(state => state.authentication?.team), distinctUntilChanged()),
    state$.pipe(map(state => state.fields?.field?.id), distinctUntilChanged())
  ]).pipe(
    switchMap(([team, field]) => {
      if (team && field) {
        return new Observable<firebase.firestore.QuerySnapshot>(subscriber => {
          firestore.collection(`team/${team}/field/${field}/link`).onSnapshot(subscriber);
        });
      } else {
        return of<firebase.firestore.QuerySnapshot>();
      }
    }),
    map(messages => linksFetched({
      links: messages.docs.map(doc => (<PendingLink>{
        id: doc.id,
        ...doc.data()
      }))
    })),
  )
