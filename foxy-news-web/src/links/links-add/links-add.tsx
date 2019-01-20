import React from 'react';
import {LinkEdit} from '../../link-edit/link-edit';
import styles from './links-add.module.scss';

type LinksAddProps = {
  onCancel?: () => void,
  onSave?: () => void
}

export class LinksAdd extends React.Component<LinksAddProps, {}> {
  render(): React.ReactNode {
    return (
      <div className={styles.container}>
        <div className={styles.form}>
          <LinkEdit/>
        </div>
        <div className={styles.controls}>
          <div className={styles.line}>
            <button>zapisz</button>
          </div>
          <div className={styles.line}>
            <button onClick={() => this.props.onCancel && this.props.onCancel()}>anuluj</button>
          </div>
        </div>
      </div>

    );
  }
}
