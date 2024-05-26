import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';
import { DoctorsData } from "../DoctorsCard/DoctorsData";
import DoctorsCard from "../DoctorsCard/DoctorsCard";
import './DoctorCarousel.css'

function DoctorCarousel() {
  return (
    <div className="container">
      <h1>Our Medical Specialist</h1>
      <div className="wrapper">
        <Swiper
          className="swiper"
          modules={[Pagination]}
          initialSlide={0}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true }}
        >
          <div className="swiper">
            {DoctorsData?.map((doctor) => (
              <SwiperSlide key={doctor.id}>
                <DoctorsCard key={doctor.id} doctor={doctor} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default DoctorCarousel;
