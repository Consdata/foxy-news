import {Epic} from 'redux-observable';
import {from, of} from 'rxjs';
import {switchMap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../../../../state/app-state';
import {firebaseApp} from '../../../firebase/firebase.app';
import {editLinkAction} from './edit-link.action';

const firestore = firebaseApp.firestore();

export const editLinkEpic: Epic<ReturnType<typeof editLinkAction>, any, AppState> = (action$, state$) =>
  action$.ofType(editLinkAction.type).pipe(
    withLatestFrom(state$),
    switchMap(([action, state]) =>
      from(firestore.collection(`team/${state.links.team}/field/${state.links.field}/link`)
        .doc(action.payload.link.id)
        .update({
          'data.category': action.payload.link.data.category,
          'data.description': action.payload.link.data.description,
          'data.summary': action.payload.link.data.summary,
          'data.link': action.payload.link.data.link,
        }))
        .pipe(
          switchMap(_ => of())
        )
    )
  );
