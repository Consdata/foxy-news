import {FieldsState} from './fields.state';

const fieldId = localStorage?.getItem('foxyNews.lastField') ?? 'tech';

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
