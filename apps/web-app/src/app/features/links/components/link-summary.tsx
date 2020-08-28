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

export const LinkSummary = ({link}: { link: Link }) => <>
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
