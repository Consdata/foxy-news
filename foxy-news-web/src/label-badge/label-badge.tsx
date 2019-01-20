import React from 'react';
import styles from './label-badge.module.scss';

interface Props {
  label: string;
}
export class LabelBadge extends React.Component<Props, {}> {
  render() {
    return (
      <div className={styles.badge}>
        <div className={styles.label}>{this.props.label}</div>
      </div>
    );
  }
}
