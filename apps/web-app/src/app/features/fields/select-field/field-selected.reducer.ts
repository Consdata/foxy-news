import {Draft} from '@reduxjs/toolkit';
import {FieldsState} from '../fields.state';
import {fieldSelected} from './field-selected.action';

export const fieldSelectedReducer = (state: Draft<FieldsState>, action: ReturnType<typeof fieldSelected>) => {
  state.field = action.payload;
};
