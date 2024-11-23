import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

// Import all images
import hearing1 from '../assets/last1.jpg';
import hearing2 from '../assets/manpic.jpg';
import hearing3 from '../assets/last3.jpg';
import hearing4 from '../assets/more.png';
import hearing5 from '../assets/more2.jpeg';
import hearing6 from '../assets/tyoes.png';

// Define the images in an array
const images = [
  { src: hearing1, alt: 'Slide 1' },
  { src: hearing6, alt: 'Slide 2' },
  { src: hearing2, alt: 'Slide 3' },
  { src: hearing3, alt: 'Slide 4' },
  { src: hearing5, alt: 'Slide 5' },
  { src: hearing4, alt: 'Slide 6' },
];

export default function Slider() {
  return (
    <div className="w-full relative z-[0]">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // Only include the Autoplay module
        className="swiper-container"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[300px] sm:h-[600px] md:h-[640px] 2xl:h-[900px] object-cover object-center"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
