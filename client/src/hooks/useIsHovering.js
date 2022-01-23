import {useState} from 'react';

export default function useIsHovering() {
  const [isHovering, setIsHovering] = useState(false);

  return {
    isHovering,
    setIsHovering,
    handalHovering: () => {
      setIsHovering(()=>!isHovering)
    }
  }
}


