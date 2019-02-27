import React from 'react';
import styles from './newsletter-tile-summary.module.scss';

type Props = {
  summary: string;
};

export class NewsletterTileSummary extends React.Component<Props> {
  render() {
    return (
      <div className={styles.summary}>
        My money's in that office, right? If she start giving me some bullshit about it
        ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there.
      </div>
    );
  }
}
