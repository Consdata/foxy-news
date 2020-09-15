import {categoriesTech} from '@foxy-news/categories';
import {Card, CardContent, CircularProgress, Typography} from '@material-ui/core';
import React, {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import styled from 'styled-components';
import {AppState} from '../../../state/app-state';
import {CenteredPanel} from '../../ui-components/centered-panel';
import {fetchNewsletters} from '../state/fetch-newsletters/fetch-newsletters';

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  width: 100%;
`;

const NewsletterHeader = styled.div`
  margin-bottom: 16px;
`;

const LinkRow = styled.div`
  margin-bottom: 8px;
`;

const LinkSummary = styled.div`
  font-weight: 500;
`;

const LinkDescription = styled.div`
  font-style: italic;
  margin-left: 8px;
`;

const LinkLink = styled.div`
  margin-left: 8px;
`;

const LinkCategory = styled.div`
  margin-left: 8px;
`;

const NewslettersView = ({newsletters, fetchNewsletters}: ViewProps) => {
  useEffect(() => {
    if (!newsletters) {
      fetchNewsletters();
    }
  });
  return <CenteredPanel>
    {!newsletters && <CircularProgress/>}
    {newsletters && newsletters.map(newsletter => <StyledCard key={newsletter.date}>
      <CardContent>
        <NewsletterHeader>
          <div><Typography variant={'h6'}>{newsletter.title}</Typography></div>
          <div><Typography variant={'body1'}>{newsletter.description}</Typography></div>
          <div><Typography variant={'caption'}>{newsletter.date}</Typography></div>
        </NewsletterHeader>
        {newsletter.links.map(link => <LinkRow key={link.link}>
          <LinkSummary>{link.summary}</LinkSummary>
          <LinkDescription>{link.description}</LinkDescription>
          <LinkLink><a href={link.link}>{link.link}</a></LinkLink>
          <LinkCategory>
            <Typography variant={'caption'}>
              {categoriesTech.find(category => category.key === link.category).label}
            </Typography>
          </LinkCategory>
        </LinkRow>)}
      </CardContent>
    </StyledCard>)}
  </CenteredPanel>;
};

interface ViewProps extends ConnectedProps<typeof connector> {
}

const connector = connect(
  (state: AppState) => ({
    newsletters: state.newsletters.newsletters
  }),
  {
    fetchNewsletters: fetchNewsletters
  }
);

export const Newsletters = connector(NewslettersView);
