import {Button, Card, CardActions, CardContent, TextField as MaterialTextField} from '@material-ui/core';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import styled from 'styled-components';
import {AppState} from '../../../state/app-state';
import {addLinkToNewsletterAction} from '../state/add-link-to-newsletter/add-link-to-newsletter.action';
import {Link} from '../state/link';
import {LinkSummary} from './link-summary';

const StyledCard = styled(Card)`
    width: 100%;
    margin-bottom: 16px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  margin: 32px auto;
`

const TextField = styled(MaterialTextField)`
  margin-bottom: 8px;
`;

const Spacer = styled.div`
  flex: 1;
`;

const NewsletterDraftView = ({newsletter, removeFromDraft}: ViewProps) => <Container>
  <StyledCard>
    <CardContent>
      <TextField fullWidth value={newsletter?.title} placeholder={'Numer newslettera, eg. 34/2020'}/>
      <TextField fullWidth multiline value={newsletter?.description} placeholder={'Zwięzły tytuł newslettera'}/>
    </CardContent>
    <CardActions>
      <Button size="small" color="secondary">Opublikuj</Button>
    </CardActions>
  </StyledCard>
  <hr/>
  {newsletter?.links?.map(link => <StyledCard key={link.id}>
    <CardContent>
      <LinkSummary link={link}/>
    </CardContent>
    <CardActions>
      <Spacer/>
      <Button size="small" color="primary" onClick={() => removeFromDraft(link)}>
        <DeleteOutlineOutlinedIcon/>
      </Button>
    </CardActions>
  </StyledCard>)}
</Container>

interface ViewProps extends ConnectedProps<typeof connector> {
}

const connector = connect(
  (state: AppState) => ({
    newsletter: state.links.newsletter
  }),
  {
    removeFromDraft: (link: Link) => addLinkToNewsletterAction({link, newsletter: ''}),
  }
);

export const NewsletterDraft = connector(NewsletterDraftView);

