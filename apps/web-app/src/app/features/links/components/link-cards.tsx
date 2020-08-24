import {MenuItem, Select} from '@material-ui/core';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Category} from '../state/category';
import {Link} from '../state/link';
import {LinkCard} from './link-card';

const LinkRow = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

const Categories = styled(Select)`
  margin: 16px 0;
  width: 200px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const LinkCards = ({links, categories, onDelete, onAddToNewsletter, onEdit}: { links: Link[], categories: Category[], onDelete: (link: Link) => void, onAddToNewsletter: (link: Link) => void, onEdit: (link: Link) => void }) => {
  const [filter, setFilter] = useState('all');
  return <Container>
    <Categories value={filter} onChange={change => setFilter(change.target.value as string)}>
      <MenuItem value={'all'}>All</MenuItem>
      {categories.map(category => <MenuItem key={category.key} value={category.key}>{category.label}</MenuItem>)}
    </Categories>
    {links && links.filter(link => filter === 'all' || link.data.category === filter).map(link => <LinkRow key={link.id}>
      <LinkCard link={link} categories={categories} onDelete={() => onDelete(link)} onAddToNewsletter={() => onAddToNewsletter(link)} onEdit={link => onEdit(link)} />
    </LinkRow>)}
  </Container>;
};
