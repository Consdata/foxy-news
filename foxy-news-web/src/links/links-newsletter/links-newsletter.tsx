import React from 'react';
import {NewsletterTags} from '../../newsletter-tags/newsletter-tags';
import styles from './links-newsletter.module.scss';

export class LinksNewsletter extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <div className={styles.newsletter}>
          <div>Newsletter 2019.4</div>
          <div className={styles.summary}>2019-01-31, linków: 4</div>
        </div>
        <div className={styles.tags}>
          <NewsletterTags/>
        </div>
        <div className={styles.controls}>
          <button>zapisz</button>
        </div>
      </div>
    );
  }
}
