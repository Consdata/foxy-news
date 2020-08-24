import {Button as MaterialButton, Card, CardActions, CardContent, CardHeader, Typography} from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import {Link} from '../state/link';

const StyledCard = styled(Card)`
    width: 100%;
`;

const Button = styled(MaterialButton)`
  min-width: initial;
  padding: 4px 8px;
`;

const Spacer = styled.div`
  flex: 1;
`;

export const LinkCard = ({link}: { link: Link }) => <StyledCard>
  <CardHeader title={link.data.summary} subheader={`by ${link.data.author}`} />
  <CardContent>
    <Typography variant="body2" gutterBottom>
      {link.data.description}
    </Typography>
    <Typography variant="caption">
      {link.data.link}
    </Typography>
  </CardContent>
  <CardActions>
    <Button size="small">edit</Button>
    <Button size="small" color="primary">mark as used</Button>
    <Spacer />
    <Button size="small" color="secondary">remove</Button>
  </CardActions>
</StyledCard>;
