import {CircularProgress} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, {useState} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {AppState} from '../../../state/app-state';
import {Field} from '../model/field';
import {fieldSelected} from './field-selected.action';

export const SelectFieldView = ({fields, field, selectField}: ViewProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const onOpen = event => setAnchorEl(event.currentTarget);
  const onElementSelect = (field: Field) => {
    setAnchorEl(null);
    selectField(field);
  };
  return <>
    <Button color="inherit" onClick={onOpen}>
      {fields?.length === 0 ? <CircularProgress size={8} color="secondary"/> : field.name}
    </Button>
    <Menu anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={onElementSelect}
    >
      {fields?.map(field => <MenuItem key={field.id} onClick={() => onElementSelect(field)}>{field.name}</MenuItem>)}
    </Menu>
  </>;
};

interface ViewProps extends ConnectedProps<typeof connector> {
}

const connector = connect(
  (state: AppState) => ({
    fields: Object.values(state.fields.fields?.byId ?? {}),
    field: state.fields.field
  }),
  {
    selectField: (field: Field) => fieldSelected(field)
  }
);

export const SelectField = connector(SelectFieldView);
