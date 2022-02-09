import React from 'react';
import { LightTooltip } from './LightTooltip';


const TooltipWrapper = (props ) => {
  const {el, styleWithPopup, styleWithout, component}  = props;

  function WithTooltop(component){
    return(
      <LightTooltip title={el.popup}>
        {component}
      </LightTooltip> 
    )
  }

  return(
    <>
      {el.popup ? WithTooltop( component(el, styleWithPopup)) : component(el, styleWithout)}   
    </>
  )
}

export default TooltipWrapper;
