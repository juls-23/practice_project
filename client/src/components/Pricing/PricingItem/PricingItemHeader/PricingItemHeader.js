  import React from 'react';
  import styles from './PricingItemHeader.module.sass'
  import CONSTANTS from '../../../../constants';
  import cx from 'classnames'
  const { SCREEN_WIDTH_BREAKPOINT } = CONSTANTS;

  const PricingItemHeader = (props) => {
    const {el, i, isOpenSection, setIsOpenSection, width} = props;

    return (
      <div style={{borderColor: `${el.color}`}} className={styles.boxWrapper}>
        <h2  style={{color: el.color}} className={styles.title}>{el.name}</h2>

        {width>=SCREEN_WIDTH_BREAKPOINT && <p className={styles.desc}>{el.desc}</p>}
        
        <span style={{color: el.color}} className={styles.price}>{el.currency}{el.price}</span>
        {
          width<SCREEN_WIDTH_BREAKPOINT  && <i style={{color: el.color}}  onClick={()=>setIsOpenSection(!isOpenSection)} className={cx(styles.btn, 'fas fa-minus solid fa-2x')} ></i>
        }
      </div>
    );
  }

  export default PricingItemHeader;
