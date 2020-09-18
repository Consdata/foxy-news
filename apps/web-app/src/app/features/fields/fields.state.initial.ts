import {FieldsState} from './fields.state';

let fieldId = localStorage?.getItem('foxyNews.lastField') ?? 'tech';
if (fieldId !== 'tech' && fieldId !== 'biz') {
  fieldId = 'tech';
}

const fieldsById = {
  'tech': {
    id: 'tech',
    name: 'Techniczny'
  },
  'biz': {
    id: 'biz',
    name: 'Biznesowy'
  }
};

export const fieldsStateInitial: FieldsState = {
  field: fieldsById[fieldId],
  fields: {
    byId: fieldsById
  }
}
