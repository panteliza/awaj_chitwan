import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

// Images
import invisibleinthecanal from '../assets/ab.jpg';
import intheear from '../assets/cd.jpg';
import receiverincanal from '../assets/ef.jpg';
import ptaTest from '../assets/ptatest.jpg';
import tympanometry from '../assets/tymp.png';
import otoacoustic from '../assets/oae.png';
import tinnitus from '../assets/tinnitus2.jpg';
import arb from '../assets/ABR.jpg';

// Services Data
const services = [
  { title: 'Hearing Tests', description: 'Comprehensive hearing tests to assess your hearing health.', imgSrc: invisibleinthecanal, link: '/hearing-tests' },
  { title: 'Speech And Language Therapy', description: 'Personalized care for speech, language, and communication needs.', imgSrc: intheear, link: '/speech-and-language-therapy' },
  { title: 'Hearing Aid Trial And Fittings', description: 'Get the perfect fit and improved hearing with our aid trial.', imgSrc: receiverincanal, link: '/hearing-aid-trial-and-fittings' },
  { title: 'PTA Test (Diagnostic Audiometer)', description: 'Measure hearing thresholds for hearing loss assessment.', imgSrc: ptaTest, link: '/pta-test' },
  { title: 'Tympanometry & Stapedius Reflex Test', description: 'Assess middle ear function for better diagnosis.', imgSrc: tympanometry, link: '/tympanometry-stapedius' },
  { title: 'Tinnitus Retraining Therapy (TRT)', description: 'Provide therapeutic support to manage tinnitus perception.', imgSrc: tinnitus, link: '/tinnitus-retraining-therapy' },
  { title: 'Otoacoustic Emissions (OAE)', description: 'Identify cochlear function, vital for newborn hearing tests.', imgSrc: otoacoustic, link: '/otoacostic-emission' },
  { title: 'Auditory-brainstem-response', description: 'Assess auditory nerve and brainstem function for hearing and neurological diagnosis.', imgSrc: arb, link: '/auditory-brainstem-response' },
];

const Services = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCardClick = (link) => {
    navigate(link);
  };

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] text-red-600 mb-8">
          Our Services
        </h2>

        {isMobile ? (
          // Stacked layout for mobile screens with alternating animations
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                onClick={() => handleCardClick(service.link)}
                style={{
                  animation: `${index % 2 === 0 ? 'slideInRight' : 'slideInLeft'} 1s ease-out forwards`,
                  animationDelay: `${index * 0.15}s`,
                  opacity: 0,
                }}
              >
                <img
                  src={service.imgSrc}
                  alt={service.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 text-red-700">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Swiper slider for larger screens
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={15}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop={true}
            pagination={{ clickable: true }}
            className="swiper-container"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-105"
                  onClick={() => handleCardClick(service.link)}
                >
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-red-700">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Inline CSS for custom animations */}
      <style>{`
        /* Slide-in animations */
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-40px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(40px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Services;
