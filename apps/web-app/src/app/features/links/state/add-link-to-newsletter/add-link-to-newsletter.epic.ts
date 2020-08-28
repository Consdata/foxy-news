import {Epic} from 'redux-observable';
import {from, of} from 'rxjs';
import {switchMap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../../../../state/app-state';
import {firebaseApp} from '../../../firebase/firebase.app';
import {addLinkToNewsletterAction} from './add-link-to-newsletter.action';

const firestore = firebaseApp.firestore();

export const addLinkToNewsletterEpic: Epic<ReturnType<typeof addLinkToNewsletterAction>, any, AppState> = (action$, state$) =>
  action$.ofType(addLinkToNewsletterAction.type).pipe(
    withLatestFrom(state$),
    switchMap(([action, state]) => {
      const linkDoc = firestore
        .collection(`team/${state.links.team}/field/${state.links.field}/link`)
        .doc(action.payload.link.id);
      return from(linkDoc.update({
        newsletter: action.payload.newsletter
      })).pipe(
        switchMap(_ => of())
      );
    })
  );
