import {Category} from '@foxy-news/categories';
import {PendingLink} from '@foxy-news/links';
import {MenuItem, Select} from '@material-ui/core';
import React, {useState} from 'react';
import styled from 'styled-components';
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

export const LinkCards = ({links, categories, onDelete, onAddToNewsletter, onEdit}: { links: PendingLink[], categories: Category[], onDelete: (link: PendingLink) => void, onAddToNewsletter: (link: PendingLink, newsletter: string) => void, onEdit: (link: PendingLink) => void }) => {
  const [filter, setFilter] = useState('all');
  return <Container>
    <Categories value={filter} onChange={change => setFilter(change.target.value as string)}>
      <MenuItem value={'all'}>All</MenuItem>
      {categories.map(category => <MenuItem key={category.key} value={category.key}>{category.label}</MenuItem>)}
    </Categories>
    {links && links.filter(link => filter === 'all' || link.data.category === filter).map(link => <LinkRow key={link.id}>
      <LinkCard link={link} categories={categories} onDelete={() => onDelete(link)} onAddToNewsletter={(newsletter: string) => onAddToNewsletter(link, newsletter)} onEdit={link => onEdit(link)} />
    </LinkRow>)}
  </Container>;
};
