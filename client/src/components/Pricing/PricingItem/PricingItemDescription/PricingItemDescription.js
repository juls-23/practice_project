import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PricingItemDescription.module.sass';
import CONSTANTS from '../../../../constants';
import ListItemDesc from './ListItem/ListItemDesc';
import TooltipWrapper from '../../Tooltip/TooltipWrapper';



const { SCREEN_WIDTH_BREAKPOINT } = CONSTANTS;

const PricingItemDescription = (props) => {
  const {el, isOpenSection, width} = props;

  const componentParag = (el, styleName) =>(
    <p  className={styleName}>{el.text} {el.link && <Link to={el.path} target="_blank"  className={styles.link}> {el.link}</Link> 
    }</p>)  
  
  return (
    <>
      { isOpenSection || width>=SCREEN_WIDTH_BREAKPOINT  ?
        <div className={styles.wrapper}>
          {
            el.data && el.data.map((el, i)=>
              <div key={i}>
                <TooltipWrapper el={el} styleWithPopup={styles.item} styleWithout={styles.paragraph} component={componentParag} />
                {el.list &&  <ListItemDesc el={el.list} className={styles.paragraph} />}            
              </div>
            )
          }  
        <Link to={'/start-context'} target="_blank" style={{backgroundColor: el.color}} className={styles.startBtn} > <i className="fas fa-check"></i> start </Link>

      </div>

: null}

  </>
  )
}

export default PricingItemDescription;


