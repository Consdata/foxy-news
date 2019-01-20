import React from 'react';
import {LinkListItem} from './link-list-item/link-list-item';
import styles from './links-list.module.scss';

export class LinksList extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <div className={styles.item}>
          <LinkListItem/>
        </div>
        <div className={styles.item}>
          <LinkListItem/>
        </div>
        <div className={styles.item}>
          <LinkListItem/>
        </div>
        <div className={styles.item}>
          <LinkListItem/>
        </div>
        <div className={styles.item}>
          <LinkListItem/>
        </div>
      </div>
    );
  }
}
