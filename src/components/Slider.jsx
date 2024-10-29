import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import hearing1 from '../assets/hearing1.jpg';
import hearing2 from '../assets/hearing2.jpg';
import hearing3 from '../assets/hearing3.jpg';

export default function Slider() {
  return (
    <div className="w-full relative z-[0]">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="object-scale-down swiper-container"
      >
        <SwiperSlide>
          <div className="w-full">
            <img src={hearing1} className="h-[500px] sm:h-[640px] 2xl:h-[900px] w-full object-cover" alt="Slider" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img src={hearing2} className=" h-[500px] sm:h-[640px] 2xl:h-[900px] w-full object-cover" alt="Slider" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img src={hearing3} className=" h-[500px] sm:h-[640px] 2xl:h-[900px] w-full object-cover" alt="Slider" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
