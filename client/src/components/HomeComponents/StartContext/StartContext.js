import React from 'react';
import { Link } from 'react-router-dom';
import styles from './StartContext.module.sass'

const StartContext = () => {
  return (
    <div className={styles.container}>
      <article className={styles.gradient}>
        <p className={styles.text}>Ready to get started? Launch a contest and start receiving submissions instantly.</p>
        <Link to='/start-context' className={styles.btn}> <i className="far fa-lightbulb"></i> start a contest</Link>
      </article>
    </div>
  );
}

export default StartContext;


