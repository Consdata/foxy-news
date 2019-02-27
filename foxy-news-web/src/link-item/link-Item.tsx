import React from 'react';
import {Link} from '../app-state/app-state';
import {LabelBadge} from '../label-badge/label-badge';
import styles from './link-item.module.scss';

type Props = {
  link: Link
};

export class LinkItem extends React.Component<Props> {
  render() {
    const {link} = this.props;
    return (
      <div className={styles.item}>
        <div className={styles.summary}>
          <div>{link.title}</div>
          <div>
            {link.summary}
          </div>
          <div>{link.href}</div>
        </div>
        <div className={styles.tags}>
          <LabelBadge label={link.tag}/>
        </div>
      </div>
    );
  }
}
