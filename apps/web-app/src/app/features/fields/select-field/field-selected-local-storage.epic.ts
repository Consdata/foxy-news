import {Epic} from 'redux-observable';
import {of} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';
import {AppState} from '../../../state/app-state';
import {fieldSelected} from './field-selected.action';


export const fieldSelectedLocalStorageEpic: Epic<ReturnType<typeof fieldSelected>, any, AppState> = (action$, state$) =>
  action$.ofType(fieldSelected.type).pipe(
    tap(field => localStorage?.setItem('foxyNews.lastField', field.payload.id)),
    switchMap(() => of())
  );
