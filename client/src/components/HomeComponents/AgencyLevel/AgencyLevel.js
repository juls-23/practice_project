import React from 'react';
import AgencyLevelEl from '../AgencyLevelEl/AgencyLevelEl';
import articles from './AgencyData.json';
import styles from './AgencyLevel.module.sass'
import { Link } from 'react-router-dom/cjs/react-router-dom';



const AgencyLevel = () => {

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>Agency level expirience</h2>
        <div className={styles.wrapper}>
          { 
          articles.map((el,i)=> <AgencyLevelEl key={i} el={el} i={i} size={'fa-2x'} /> )
          }
        </div>
        <Link to={'/agency-services'} className={styles.btn}>Learn more abount agency services</Link>
      </div>
    </section>
   
  );
}

export default AgencyLevel;
