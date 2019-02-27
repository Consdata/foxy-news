import React from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps} from 'react-router';
import {AppState} from '../app-state/app-state';
import {LinkItem} from '../link-item/link-Item';
import {NewsletterTags} from '../newsletter-tags/newsletter-tags';
import styles from './newsletter.module.scss';

type OwnProps = {} & RouteComponentProps<{ newsletter: string }>;
const stateToProps = (state: AppState, ownProps: OwnProps) => ({
  newsletter: state.newsletters[ownProps.match.params.newsletter]
});
const dispatchToProps = () => ({});

export const Newsletter = connect(
  stateToProps,
  dispatchToProps
)(class Newsletter extends React.Component<OwnProps & ReturnType<typeof stateToProps> & ReturnType<typeof dispatchToProps>> {
    render() {
      const {newsletter} = this.props;
      return (
        <div>
          <div className={styles.header}>
            <div className={styles.summary}>
              <div className={styles.name}>
                {newsletter.title}
              </div>
              <div className={styles.date}>
                {newsletter.date}
              </div>
            </div>
            <div className={styles.tags}>
              <NewsletterTags tags={
                newsletter.links
                  .map(link => link.tag)
                  .reduce((list, tag) => [...list, tag], [] as string[])
              }/>
            </div>
          </div>
          <div className={styles.entries}>
            {newsletter.links.map(link => (
              <div className={styles.entry} key={link.id}>
                <LinkItem link={link}/>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
);
