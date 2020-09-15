import {createAction} from '@reduxjs/toolkit';
import {Field} from '../model/field';

export const fieldSelected = createAction<Field>('SelectField')
