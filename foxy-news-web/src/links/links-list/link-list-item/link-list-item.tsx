import React from 'react';
import {LinkItem} from '../../../link-item/link-Item';
import styles from './link-list-item.module.scss';

export class LinkListItem extends React.Component {
  render(): React.ReactNode {
    return (
      <div className={styles.item}>
        <div className={styles.check}>
          <input type={'checkbox'}/>
        </div>
        <div>
          <LinkItem/>
          {/*or link edit*/}
        </div>
      </div>
    );
  }
}
