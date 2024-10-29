import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import pads from '../assets/IMG-6926.jpg';
import bluepads from '../assets/IMG-8118.jpg';
import diapers from '../assets/IMG-4762.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Mission from '../components/Mission';
import aware from '../assets/awareness (1).jpg'

const About = () => {
  return (
    <div>
      <Navbar />

      <div>
        <img
          src={aware}
          className="w-full sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[650px] 2xl:h-[900px] object-cover"
          alt="Sanitary Pads"
        />
      </div>

      <div className="flex flex-col my-7 mx-4 sm:mx-0">
        <div className='mx-5'>
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-600 to-purple-700 text-center">
            WE UNDERSTAND WHAT YOU NEED
          </h1>
        </div>
        <div className="flex flex-col mt-7 sm:flex-row">
          <div className="w-full sm:w-1/2">
            <div className="w-full relative z-[0]">
              <Swiper
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="object-scale-down swiper-container"
              >
                <SwiperSlide>
                  <div className="w-full">
                    <img src={pads} className="h-[640px] w-full object-cover" alt="Slider" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full">
                    <img src={bluepads} className="h-[640px] w-full object-cover" alt="Slider" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full">
                    <img src={diapers} className="h-[640px] w-full object-cover" alt="Slider" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-4 sm:px-10 text-justify">
            <p className='text-base sm:text-lg'>
             
              About Elanta Health Care And Hygiene Products Pvt. Ltd

              Welcome to Elanta Health Care And Hygiene Products Pvt. Ltd, your trusted partner in promoting personal health and hygiene awareness through affordable and accessible solutions. At Elanta, we firmly believe that hygiene is a fundamental human right that should never be compromised due to cost. Our unwavering commitment to this belief drives everything we do.
              <br /><br />

              Our mission is clear: to empower individuals and families worldwide with the highest quality hygiene products, backed by the latest technology, and offered at prices that make them accessible to all. We understand that personal hygiene knows no gender, and our product range is designed to cater to the diverse needs of everyone. We're constantly evolving to ensure that our offerings meet the daily requirements of individuals and families around the globe.

              <br /><br />

              We prioritize excellence with world-class infrastructure and premium raw materials sourced globally.

              <br /><br />

              "Feel Good" enhances female hygiene in Nepal and beyond, while also promoting proper hygiene practices.

              <br /><br />

              We're committed to environmental responsibility with chemical-free, soft, and biodegradable pads, and baby diapers for comfort and planet's well-being.

              <br /><br />

              Elanta Health Care And Hygiene Products Pvt. Ltd is just getting started on our mission to make the world a safer and healthier place one step at a time. We invite you to join us on this exciting journey toward a future where personal health and hygiene are accessible to all, regardless of their background or circumstances.

              Thank you for choosing Elanta as your partner in health and hygiene. Together, we can make a difference.
            </p>
          </div>
        </div>
      </div>

      <Mission />
      <Footer />
    </div>
  );
};

export default About;
