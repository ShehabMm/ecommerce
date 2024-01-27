import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './stylesss.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (

          <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          
      
          <img src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1706334825/banner-15_wz3hzx.jpg" alt="" />
          
          </SwiperSlide>


          <SwiperSlide>
          
      
          <img src="https://res.cloudinary.com/dvytkrzaq/image/upload/v1706334825/banner-15_wz3hzx.jpg" alt="" />
          
          </SwiperSlide>



      
      </Swiper>
    </>


  );
}

export default Slider;
