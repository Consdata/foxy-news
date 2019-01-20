import React from 'react';
import {Link} from 'react-router-dom';
import {NewsletterTile} from './newsletters-tile/newsletter-tile';
import styles from './newsletters.module.scss';

export class Newsletters extends React.Component {
  render() {
    return (
      <div className={styles.grid}>
        <div className={styles.tile}>
          <Link to="/abc">
            <NewsletterTile/>
          </Link>
        </div>
        <div className={styles.tile}>
          <Link to="/abc">
            <NewsletterTile/>
          </Link>
        </div>
        <div className={styles.tile}>
          <Link to="/abc">
            <NewsletterTile/>
          </Link>
        </div>
        <div className={styles.tile}>
          <Link to="/abc">
            <NewsletterTile/>
          </Link>
        </div>
        <div className={styles.tile}>
          <Link to="/abc">
            <NewsletterTile/>
          </Link>
        </div>
        <div className={styles.tile}>
          <Link to="/abc">
            <NewsletterTile/>
          </Link>
        </div>
        <div className={styles.tile}>
          <Link to="/abc">
            <NewsletterTile/>
          </Link>
        </div>
        <div className={styles.tile}>
          <Link to="/abc">
            <NewsletterTile/>
          </Link>
        </div>
      </div>
    );
  }
}
