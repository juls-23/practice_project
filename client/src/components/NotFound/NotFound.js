import React from 'react';
import Logo from '../Logo';
import styles from './NotFound.module.sass';

const NotFound = () => (
  <div className={styles.container}>
  <Logo />
  <div className={styles.textContainer}><span>Not Found</span></div>
  </div>
);

export default NotFound;
