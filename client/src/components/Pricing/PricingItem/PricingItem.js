import React, {useState} from 'react';
import styles from './PricingItem.module.sass'
import useWindowWidth from '../../../hooks/useWindowWidth'
import PricingItemHeader from './PricingItemHeader/PricingItemHeader';
import PricingItemDescription from './PricingItemDescription/PricingItemDescription';


const PricingItem = (props) => {
const [isOpenSection, setIsOpenSection] = useState(false)
const width = useWindowWidth();
const {el} = props
 
  return (
    <div className={styles.container}>
      <PricingItemHeader el={el} isOpenSection={isOpenSection} width={width}  setIsOpenSection={setIsOpenSection} />
      <PricingItemDescription el={el} isOpenSection={isOpenSection} width={width} />
    </div> 
    ) 
}

export default PricingItem;
