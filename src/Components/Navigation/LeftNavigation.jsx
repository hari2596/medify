import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as LeftArrow } from '../../Assets/leftarrow.svg';
import './Navigation.css';  

const LeftNavigation = () => {
  const swiper = useSwiper();
  const [isBegin, setIsBegin] = useState(true);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBegin(swiper.isBeginning);
    });
  }, [swiper]); 

  return (
    <div>
      {!isBegin && (
        <LeftArrow 
          className="navigation leftNavigation" 
          onClick={() => swiper.slidePrev()} 
        />
      )}
    </div>
  );
};

export default LeftNavigation;
