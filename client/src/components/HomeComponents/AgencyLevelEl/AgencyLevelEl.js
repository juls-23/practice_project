import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AgencyLevelEl.module.sass'
import cx from 'classnames'
import { useIsHovering } from '../../../hooks';
import SetsHoveringStyles from '../AgencyLevel/SetsHoveringStyles/SetsHoveringStyles';


const AgencyLevelEl = (props) => {
  const {isHovering, handalHovering} = useIsHovering();
  const {el, i, size} = props;

  return (
    <article className={styles.article}>
    <div className={styles.iconWrapping} style={SetsHoveringStyles(isHovering, i)} onMouseEnter={() => handalHovering()} onMouseLeave={() => handalHovering()}>
        <span className={cx(`${el.icon} ${size}`, styles.icon)}></span>
      </div>
      <h3 className={styles.title}> {el.title} </h3>
      <p className={styles.description}>{el.description}<Link to={el.link} target="_blank">Learn More.</Link></p> 
    </article>
  );
}

export default AgencyLevelEl;