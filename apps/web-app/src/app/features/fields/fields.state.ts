import {Field} from './model/field';

export interface FieldsState {
  field: Field;
  fields: {
    byId: { [key: string]: Field }
  };
}
