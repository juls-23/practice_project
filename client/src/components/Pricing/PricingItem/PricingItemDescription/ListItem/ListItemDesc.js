import React from 'react';
import { Link } from 'react-router-dom/';
import TooltipWrapper from '../../../Tooltip/TooltipWrapper';
import styles from './ListItemDesc.module.sass';

const ListItemDesc = (props) => {
  const {el} = props;

  const componentList = (el, styleName) => (
    <p className={styleName}> 
      <i className="fas fa-check"/> {el.text} 
      {
       el.link && <Link to={el.path} target="_blank" className={styles.link}> {el.link}</Link> 
      }
     </p>
)
  
  return (
    <>
      {el.map((el, i)=>  
        <ul key={i}>
          <TooltipWrapper  el={el} styleWithPopup={styles.listItem} styleWithout={styles.paragraph} component={componentList} />
        </ul>
            
      )}
        
    </>
  );
}

export default ListItemDesc;
