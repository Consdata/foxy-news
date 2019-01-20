import React from 'react';
import {NewsletterTags} from '../newsletter-tags/newsletter-tags';
import {LinkItem} from '../link-item/link-Item';
import styles from './newsletter.module.scss';

export class Newsletter extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.summary}>
            <div className={styles.name}>
              2019.3
            </div>
            <div className={styles.date}>
              2019-01-18
            </div>
          </div>
          <div className={styles.tags}>
            <NewsletterTags/>
          </div>
        </div>
        <div className={styles.entries}>
          <div className={styles.entry}>
            <LinkItem/>
          </div>
          <div className={styles.entry}>
            <LinkItem/>
          </div>
          <div className={styles.entry}>
            <LinkItem/>
          </div>
        </div>
      </div>
    );
  }
}
