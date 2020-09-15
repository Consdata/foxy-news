import {combineEpics} from 'redux-observable';
import {fieldSelectedLocalStorageEpic} from './select-field/field-selected-local-storage.epic';

export const fieldsEpic = combineEpics(
  fieldSelectedLocalStorageEpic
)
