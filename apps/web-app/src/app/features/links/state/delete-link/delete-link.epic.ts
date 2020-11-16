import {ArchivedLink, PendingLink} from '@foxy-news/links';
import {Epic} from 'redux-observable';
import {from, of} from 'rxjs';
import {mergeMap, switchMap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../../../../state/app-state';
import {firebaseApp} from '../../../firebase/firebase.app';
import {deleteLinkAction} from './delete-link.action';

const firestore = firebaseApp.firestore();

export const deleteLinkEpic: Epic<ReturnType<typeof deleteLinkAction>, any, AppState> = (action$, state$) =>
  action$.ofType(deleteLinkAction.type).pipe(
    withLatestFrom(state$),
    mergeMap(([action, state]) => {
      return from(firestore.runTransaction(async trn => {
        const linkDoc = firestore.collection(`/team/${state.authentication.team}/field/${state.fields.field.id}/link`).doc(action.payload.link.id);
        const link = await trn.get(linkDoc);
        const archivedLinks = firestore.collection(`/team/${state.authentication.team}/field/${state.fields.field.id}/archivedLink`).doc();
        const archivedLink: ArchivedLink = {...link.data() as PendingLink, archivingReason: 'removed'};
        trn.set(archivedLinks, archivedLink)
          .delete(linkDoc)
      }));
    }),
    switchMap(_ => of())
  );


