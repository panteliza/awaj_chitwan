import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import hearing1 from '../assets/last1.jpg';
import hearing2 from '../assets/manpic.jpg';
import hearing3 from '../assets/last3.jpg';
import hearing4 from '../assets/more.png';
import hearing5 from '../assets/more2.jpeg';
import hearing6 from '../assets/tyoes.png';
import hearing7 from '../assets/digital hearing aids.jpg';
import hearing8 from '../assets/Ear-anatomy-with-probe-inserted.jpg';

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
            <img
              src={hearing1}
              className="w-full h-[300px] sm:h-[600px] md:h-[640px] 2xl:h-[900px] object-cover object-center"
              alt="Slider"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              src={hearing2}
              className="w-full h-[300px] sm:h-[600px] md:h-[640px] 2xl:h-[900px] object-cover object-center"
              alt="Slider"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              src={hearing3}
              className="w-full h-[300px] sm:h-[600px] md:h-[640px] 2xl:h-[900px] object-cover object-center"
              alt="Slider"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              src={hearing4}
              className="w-full h-[300px] sm:h-[600px] md:h-[640px] 2xl:h-[900px] object-cover object-center"
              alt="Slider"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              src={hearing5}
              className="w-full h-[300px] sm:h-[600px] md:h-[640px] 2xl:h-[900px] object-cover object-center"
              alt="Slider"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <img
              src={hearing6}
              className="w-full h-[300px] sm:h-[600px] md:h-[640px] 2xl:h-[900px] object-cover object-center"
              alt="Slider"
            />
          </div>
        </SwiperSlide>
      
       
       
       
       
      </Swiper>
    </div>
  );
}
