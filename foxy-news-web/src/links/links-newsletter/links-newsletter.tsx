import React from 'react';
import {connect} from 'react-redux';
import {AppState} from '../../app-state/app-state';
import {NewsletterTags} from '../../newsletter-tags/newsletter-tags';
import styles from './links-newsletter.module.scss';

type OwnProps = {};
const stateToProps = (state: AppState) => ({
  draft: state.newsletterDraft
});
const dispatchToProps = () => ({});

export const LinksNewsletter = connect(
  stateToProps,
  dispatchToProps
)(class LinksNewsletter extends React.Component<OwnProps & ReturnType<typeof stateToProps> & ReturnType<typeof dispatchToProps>> {
  render(): React.ReactNode {
    const {draft} = this.props;
    if (draft) {
      return (
        <div className={styles.container}>
          <div className={styles.newsletter}>
            <div>Newsletter 2019.4</div>
            <div className={styles.summary}>2019-01-31, linków: {draft.links.length}</div>
          </div>
          <div className={styles.tags}>
            <NewsletterTags tags={[]}/>
          </div>
          <div className={styles.controls}>
            <button>zapisz</button>
          </div>
        </div>
      );
    } else {
      return <div/>;
    }
  }
});
