import {PublishNewsletterRequest} from '@foxy-news/links';
import {Epic} from 'redux-observable';
import {from} from 'rxjs';
import {map, switchMap, withLatestFrom} from 'rxjs/operators';
import {AppState} from '../../../../state/app-state';
import {firebaseApp} from '../../../firebase/firebase.app';
import {newsletterPublished} from './newsletter-published';
import {publishNewsletterAction} from './publish-newsletter.action';

export const publishNewsletterEpic: Epic<ReturnType<typeof publishNewsletterAction>, any, AppState> = (action$, state$) =>
  action$.ofType(publishNewsletterAction.type).pipe(
    withLatestFrom(state$),
    switchMap(
      ([action, state]) => from(
        firebaseApp.functions('europe-west3').httpsCallable('publishNewsletter')({
          description: action.payload.description,
          title: action.payload.title,
          date: action.payload.date,
          newsletter: 'current',
          field: state.links.field,
          team: state.links.team
        } as PublishNewsletterRequest)
      ).pipe(
        map(_ => newsletterPublished())
      )
    )
  );
