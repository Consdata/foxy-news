import React from 'react';
import styles from './header.module.scss';

export const Header = () => <React.Fragment>
  <div className={styles.title}>consdata.tech - news</div>
  <div className={styles.subtitle}>Twoje źródło wiedzy</div>
</React.Fragment>;
