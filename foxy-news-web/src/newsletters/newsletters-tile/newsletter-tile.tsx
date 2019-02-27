import React from 'react';
import {Newsletter} from '../../app-state/app-state';
import {NewsletterTags} from '../../newsletter-tags/newsletter-tags';
import {NewsletterTileSummary} from './newsletter-tile-summary/newsletter-tile-summary';
import styles from './newsletter-tile.module.scss';

type Props = {
  newsletter: Newsletter
};

export class NewsletterTile extends React.Component<Props> {
  render() {
    const {newsletter} = this.props;
    return (
      <div>
        <div className={styles.title}>
          {newsletter.title}
        </div>
        <div className={styles.date}>
          {newsletter.date}
        </div>
        <div className={styles.summary}>
          <NewsletterTileSummary summary={newsletter.summary} />
        </div>
        <div className={styles.tags}>
          <NewsletterTags tags={
            newsletter.links
              .map(link => link.tag)
              .reduce((list, tag) => [...list, tag], [] as string[])
          }/>
        </div>
      </div>
    );
  }
}
