import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './sliderSwiper.scss'


const SliderSwiper = ({ items }) => {
   return (
      <div className="clients__items">
         <Swiper
            slidesPerView={2}
            spaceBetween={8}
            loop={true}
            breakpoints={{
               575: { slidesPerView: 3 },
               768: { slidesPerView: 4 },
               1024: { slidesPerView: 5 },
            }}
         >
            {items.map((item, id) => (
               <SwiperSlide key={id}>
                  <img src={item} alt={`client-${id}`} />
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="custom-prev"></div>
         <div className="custom-next"></div>
      </div>
   )
}


export default SliderSwiper