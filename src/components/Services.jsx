import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Services Data
const services = [
  { title: 'Hearing Tests', description: 'Comprehensive hearing tests to assess your hearing health.', imgSrc: '../assets/ab.jpg', link: '/hearing-tests' },
  { title: 'Speech And Language Therapy', description: 'Personalized care for speech, language, and communication needs.', imgSrc: '../assets/cd.jpg', link: '/speech-and-language-therapy' },
  { title: 'Hearing Aid Trial And Fittings', description: 'Get the perfect fit and improved hearing with our aid trial.', imgSrc: '../assets/digi 1.jpeg', link: '/hearing-aid-trial-and-fittings' },
  { title: 'PTA Test (Diagnostic Audiometer)', description: 'Measure hearing thresholds for hearing loss assessment.', imgSrc: '../assets/ptatest.jpg', link: '/pta-test' },
  { title: 'Tympanometry & Stapedius Reflex Test', description: 'Assess middle ear function for better diagnosis.', imgSrc: '../assets/tymp.png', link: '/tympanometry-stapedius' },
  { title: 'Tinnitus Retraining Therapy (TRT)', description: 'Provide therapeutic support to manage tinnitus perception.', imgSrc: '../assets/tinnitus2.jpg', link: '/tinnitus-retraining-therapy' },
  { title: 'Otoacoustic Emissions (OAE)', description: 'Identify cochlear function, vital for newborn hearing tests.', imgSrc: '../assets/oae.png', link: '/otoacostic-emission' },
  { title: 'Auditory-brainstem-response', description: 'Assess auditory nerve and brainstem function for hearing and neurological diagnosis.', imgSrc: '../assets/ABR.jpg', link: '/auditory-brainstem-response' },
];

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the element is visible
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach((card) => observer.observe(card));

    return () => cards.forEach((card) => observer.unobserve(card));
  }, []);

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-bold text-center text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] text-red-600 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transform opacity-0`}
              style={{
                '--animation-direction': index % 2 === 0 ? 'slideInLeft' : 'slideInRight',
              }}
              onClick={() => navigate(service.link)}
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
      </div>

      {/* Animation Styles */}
      <style>{`
        /* Keyframes for slide-in animations */
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Add animation only when visible */
        .service-card {
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .service-card.visible {
          opacity: 1;
          animation: var(--animation-direction) 1s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Services;
