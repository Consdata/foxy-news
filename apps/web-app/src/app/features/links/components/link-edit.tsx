import {Category} from '@foxy-news/categories';
import {MenuItem, Select, TextField as MaterialTextField} from '@material-ui/core';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from '../state/link';

const TextField = styled(MaterialTextField)`
  margin-bottom: 8px;
`;

export const LinkEdit = ({link, onLinkChange, categories}: { link: Link, onLinkChange: (link: Link) => void, categories: Category[] }) => {
  const [edited, setEdited] = useState(link);
  const onChange = (key: string, value: string) => {
    const newValue = {
      ...edited,
      data: {
        ...edited.data,
        [key]: value
      }
    };
    setEdited(newValue);
    onLinkChange(newValue);
  };
  return <>
    <TextField fullWidth value={edited.data.summary} onChange={event => onChange('summary', event.target.value)}/>
    <TextField fullWidth value={edited.data.link} onChange={event => onChange('link', event.target.value)}/>
    <TextField fullWidth multiline value={edited.data.description}
               onChange={event => onChange('description', event.target.value)}/>
    <Select fullWidth value={edited.data.category}
            onChange={change => onChange('category', change.target.value as string)}>
      {categories.map(category => <MenuItem key={category.key} value={category.key}>{category.label}</MenuItem>)}
    </Select>
  </>;
};
