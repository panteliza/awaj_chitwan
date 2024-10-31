import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mission from "../components/Mission";

import hearing1 from "../assets/hearing1.jpg";
import hearing2 from "../assets/hearing2.jpg";
import hearing3 from "../assets/hearing3.jpg";
import speech1 from "../assets/speech1.jpg";

const About = () => {
  const headingRef = useRef(null);
  const swiperRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger animation when 30% of the element is in view
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (swiperRef.current) observer.observe(swiperRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (swiperRef.current) observer.unobserve(swiperRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <div>
      <Navbar />

      <div>
        <img
          src={hearing1}
          className="w-full sm:h-[450px] md:h-[550px] lg:h-[600px] xl:h-[650px] 2xl:h-[900px] object-cover"
          alt="hearing"
        />
      </div>

      <div className="flex flex-col my-7 mx-4 sm:mx-0">
        <div ref={headingRef} className="mx-5 opacity-0" style={{ animation: 'fadeIn 1s ease-out forwards', animationPlayState: 'paused' }}>
          <h1 className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-600 to-purple-700 text-center">
            WE UNDERSTAND WHAT YOU NEED
          </h1>
        </div>
        <div className="flex flex-col mt-7 sm:flex-row">
          <div ref={swiperRef} className="w-full sm:w-1/2 opacity-0 transition-opacity duration-700" style={{ animation: 'fadeInLeft 1s ease-out forwards', animationPlayState: 'paused' }}>
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
                  <img src={hearing3} className="h-[640px] w-full object-cover" alt="Slider" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img src={hearing2} className="h-[640px] w-full object-cover" alt="Slider" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="w-full">
                  <img src={speech1} className="h-[640px] w-full object-cover" alt="Slider" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div ref={textRef} className="w-full sm:w-1/2 px-4 sm:px-10 text-justify opacity-0 transition-opacity duration-700" style={{ animation: 'fadeInRight 1s ease-out forwards', animationPlayState: 'paused' }}>
            <p className="text-base sm:text-lg">
              <strong>About Aawaz Hearing and Speech Care Center</strong>
              <br /><br />
              Welcome to Aawaz Hearing and Speech Center, Bharatpur, Chitwan – your trusted partner in empowering communication and improving the quality of life for those with hearing and speech challenges. At Aawaz, we believe that everyone deserves the right to clear, confident communication and accessible support, regardless of background or circumstance.
              <br /><br />
              Our mission is clear: to provide high-quality hearing and speech services and products, supported by the latest technology and a compassionate team dedicated to each individual’s unique needs. From state-of-the-art hearing aids to personalized therapy services, our solutions are designed to cater to the diverse needs of individuals and families across Chitwan and beyond.
              <br /><br />
              We prioritize excellence and accessibility in our services, working closely with leading professionals and suppliers to ensure premium quality at affordable prices. Our center is committed not only to enhancing personal well-being but also to supporting the broader community’s understanding and acceptance of hearing and speech challenges.
              <br /><br />
              At Aawaz Hearing and Speech Center, we’re more than just a service provider; we’re part of a movement toward a future where everyone can be heard and understood. Thank you for choosing Aawaz as your partner in communication and connection. Together, we’re breaking barriers and building bridges toward a more inclusive world.
            </p>
          </div>
        </div>
      </div>

      <Mission />
      <Footer />

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default About;
