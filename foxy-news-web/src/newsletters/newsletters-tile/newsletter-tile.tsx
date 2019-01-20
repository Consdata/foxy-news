import React from 'react';
import {NewsletterTileSummary} from './newsletter-tile-summary/newsletter-tile-summary';
import {NewsletterTags} from '../../newsletter-tags/newsletter-tags';
import styles from './newsletter-tile.module.scss';

export class NewsletterTile extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.title}>
          2019.3
        </div>
        <div className={styles.date}>
          2019-01-18
        </div>
        <div className={styles.summary}>
          <NewsletterTileSummary/>
        </div>
        <div className={styles.tags}>
          <NewsletterTags/>
        </div>
      </div>
    );
  }
}
