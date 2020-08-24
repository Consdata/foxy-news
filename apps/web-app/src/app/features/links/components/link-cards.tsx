import React from 'react';
import styled from 'styled-components';
import {Link} from '../state/link';
import {LinkCard} from './link-card';

const LinkRow = styled.div`
  margin-bottom: 16px;
`;

export const LinkCards = ({links}: { links: Link[] }) => <div>
  {links && links.map(link => <LinkRow key={link.id}>
    <LinkCard link={link}/>
  </LinkRow>)}
</div>;
