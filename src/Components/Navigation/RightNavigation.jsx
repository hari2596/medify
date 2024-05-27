import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { ReactComponent as RightArrow } from '../../Assets/rightarrow.svg';
import './Navigation.css';  // Update the import to the plain CSS file

const RightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]); 

  return (
    <div>
      {!isEnd && (
        <RightArrow 
          className="navigation rightNavigation" 
          onClick={() => swiper.slideNext()} 
        />
      )}
    </div>
  );
};

export default RightNavigation;
