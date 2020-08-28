import {Tooltip, Typography} from '@material-ui/core';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import React from 'react';
import styled from 'styled-components';
import {Link} from '../state/link';

const FavBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
  width: 60px;
`;

const Header = styled.div`
  margin-bottom: 16px;
`;

export const LinkSummary = ({link}: { link: Link }) => <>
  <Header>
    <div>
      <Typography variant={'h6'}>{link.data.summary}</Typography>
    </div>
    <div>
      <Typography variant={'caption'}>
        by {link.data.author} in {link.data.category}
      </Typography>
    </div>
  </Header>
  <div>
    <Typography variant="body2">
      {link.data.description}
    </Typography>
  </div>
  <div>
    <Typography variant="caption">
      <a href={link.data.link} target="_blank">{link.data.link}</a>
    </Typography>
  </div>
  <div>
    <Tooltip title={Object.keys(link.userVotes).join(', ')}>
      <FavBar>
        <FavoriteBorderOutlinedIcon color="secondary"/> &nbsp; {link.votes}
      </FavBar>
    </Tooltip>
  </div>
</>;
