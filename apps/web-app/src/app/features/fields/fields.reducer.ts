import {createReducer} from '@reduxjs/toolkit';
import {FieldsState} from './fields.state';
import {fieldsStateInitial} from './fields.state.initial';
import {fieldSelected} from './select-field/field-selected.action';
import {fieldSelectedReducer} from './select-field/field-selected.reducer';

export const fieldsReducer = createReducer<FieldsState>(
  fieldsStateInitial,
  builder => builder
    .addCase(fieldSelected, fieldSelectedReducer)
)
