// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../swiper/swiperCss.css';

// import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default function SwiperNavigationOne() {
  return (
    <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay className="mySwiper">
      <SwiperSlide>
        <img
          src="https://www.pintuco.com.co/wp-content/uploads/2024/06/banner-bonito-pintuco-2.webp"
          style={{ width: '100%' }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.pintuco.com.co/wp-content/uploads/2024/09/P1.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.pintuco.com.co/wp-content/uploads/2024/09/BANNER_ULTRALAVABLE_desktop.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://www.pintuco.com.co/wp-content/uploads/2024/09/Banner_Koraza_Desktop.jpg" />
      </SwiperSlide>
    </Swiper>
  );
}
