import React from 'react';
import {CounterBadge} from '../counter-badge/counter-badge';
import styles from './newsletter-tags.module.scss'

export class NewsletterTags extends React.Component {
  render() {
    return (
      <div className={styles.tags}>
        <div className={styles.badge}>
          <CounterBadge label="security" counter="3"/>
        </div>
        <div className={styles.badge}>
          <CounterBadge label="misc" counter="1"/>
        </div>
        <div className={styles.badge}>
          <CounterBadge label="jvm" counter="5"/>
        </div>
      </div>
    );
  }
}
