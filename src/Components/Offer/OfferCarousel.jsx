import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react' ;
import { Navigation,Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { OfferData } from './OfferData'; 


function OfferCarousel() {
  return (
    <div className='offerContainer'>
      <Swiper
        modules={[Navigation, Pagination]}
        initialSlide={2}
        slidesPerView={3}
        pagination={{clickable: true}}
        centeredSlides={true}>
            <div className='{carousel}'>
                {OfferData?.map((OfferData)=>(
                    <SwiperSlide key={OfferData.id}>
                        <img className='{slide}' src={OfferData.image} alt='Offers' />
                    </SwiperSlide>
                ))}
            </div>
      </Swiper>
    </div>
  )
}

export default OfferCarousel
