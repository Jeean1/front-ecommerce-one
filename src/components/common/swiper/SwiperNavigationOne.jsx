// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../swiper/swiperCss.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

// import img company

import BannerImgOne from '../../../../public/banner_uno.png';

export default function SwiperNavigationOne() {
  return (
    <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay className="mySwiper">
      <SwiperSlide>
        <img
          src={BannerImgOne}
          style={{
            objectFit: 'cover',
            transform: 'scale(1)', // 1.0 es sin zoom, > 1 hace zoom
            transformOrigin: 'center center'
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src={BannerImgOne} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={BannerImgOne} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={BannerImgOne} />
      </SwiperSlide>
    </Swiper>
  );
}
