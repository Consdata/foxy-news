import {Fab as FabMaterial} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import styled from 'styled-components';

const Fab = styled(FabMaterial)`
  position: fixed;
  right: 16px;
  bottom: 16px;
`;

export const NewsletterCart = ({onClick}: {onClick: () => void}) => <Fab color="primary" aria-label="add" onClick={onClick}>
  <AddIcon/>
</Fab>;
