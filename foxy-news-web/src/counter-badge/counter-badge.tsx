import React from 'react';
import styles from './counter-badge.module.scss';

interface Props {
  label: string;
  counter: number;
}
export class CounterBadge extends React.Component<Props, {}> {
  render() {
    return (
      <div className={styles.badge}>
        <div className={styles.label}>{this.props.label}</div>
        <div className={styles.counter}>{this.props.counter}</div>
      </div>
    );
  }
}
