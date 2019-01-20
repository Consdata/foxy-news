import React from 'react';
import {LabelBadge} from '../label-badge/label-badge';
import styles from './link-item.module.scss';

export class LinkItem extends React.Component {
  render() {
    return (
      <div className={styles.item}>
        <div className={styles.summary}>
          <div>bla ble ele</div>
          <div>Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently
            than mine. You don't get sick, I do.
          </div>
          <div>http://....../</div>
        </div>
        <div className={styles.tags}>
          <LabelBadge label={'security'}/>
        </div>
      </div>
    );
  }
}
