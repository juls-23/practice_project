import React from 'react';
import pricingData from './PricingData.json'
import PricingItem from './PricingItem/PricingItem';
import styles from './Pricing.module.sass';

const Pricing = () => {

  return (
    <section className={styles.container}>
      <div className={styles.sectionContainer}>
        {pricingData.map( 
          (el,i)=> <article className={styles.wrapper} style={{borderColor: `${el.color}`}} key={i} >
          <PricingItem el={el} i={i} />
        </article>
        )}
      </div>
  </section> 
  );
}

export default Pricing;
