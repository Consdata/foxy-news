import React from 'react';
import styles from './link-edit.module.scss';

export class LinkEdit extends React.Component {
  render() {
    return (
      <div className={styles.form}>
        <div className={styles.line}>
          <div className={styles.label}>
            Tytuł
          </div>
          <div className={styles.control}>
            <input/>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.label}>
            Link
          </div>
          <div className={styles.control}>
            <input/>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.label}>
            Tytuł
          </div>
          <div className={styles.control}>
            <input/>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.label}>
            Kategoria
          </div>
          <div className={styles.control}>
            <select>
              <option>jvm</option>
              <option>security</option>
              <option>devops</option>
              <option>misc</option>
              <option>org</option>
            </select>
          </div>
        </div>
        <div className={styles.line}>
          <div className={styles.label}>
            Opis
          </div>
          <div className={styles.control}>
            <textarea className={styles.details} placeholder={'Opis'}></textarea>
          </div>
        </div>
      </div>
    );
  }
}
