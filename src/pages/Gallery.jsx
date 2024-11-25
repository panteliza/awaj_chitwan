import React, { useEffect, useState, useRef } from 'react';
import galleryImg1 from '../assets/digital hearing aids.jpg'; // Replace with your image paths
import galleryImg2 from '../assets/a.jpg';
import galleryImg3 from '../assets/ptatest.jpg';
import galleryImg4 from '../assets/amazon.jpg';
import galleryImg5 from '../assets/hearingaid.png';
import galleryImg6 from '../assets/digital-hearing-aids.jpg';
import galleryImg7 from '../assets/tinnitus2.jpg';
import galleryImg8 from '../assets/d.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Gallery = () => {
  const cardRefs = useRef([]);
  const [animationClass, setAnimationClass] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger when 30% of the element is in view
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

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const galleryImages = [
    { id: 1, src: galleryImg1, alt: 'Aawaj Clinic Facility 1' },
    { id: 2, src: galleryImg2, alt: 'Aawaj Clinic Facility 2' },
    { id: 3, src: galleryImg3, alt: 'Aawaj Clinic Facility 3' },
    { id: 4, src: galleryImg4, alt: 'Aawaj Clinic Facility 4' },
    { id: 5, src: galleryImg5, alt: 'Aawaj Clinic Facility 5' },
    { id: 6, src: galleryImg6, alt: 'Aawaj Clinic Facility 6' },
    { id: 7, src: galleryImg7, alt: 'Aawaj Clinic Facility 7' },
    { id: 8, src: galleryImg8, alt: 'Aawaj Clinic Facility 8' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="w-full bg-gray-50 py-10 px-4 sm:px-10 lg:px-20">
        {/* Heading Section */}
        <div className={`text-center mb-8 ${animationClass ? 'fade-in' : ''}`}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500">
            Welcome to Aawaj Clinic
          </h1>
          <p className="mt-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-700 to-pink-700 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Discover the compassionate care and innovative services we offer at Aawaj Clinic. Our facilities are designed to provide a serene and welcoming environment for our patients.
          </p>
        </div>

        {/* Gallery Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`relative group overflow-hidden rounded-lg shadow-lg opacity-0 transform transition-opacity duration-700 ease-out ${
                index % 2 === 0 ? 'md:order-first' : 'md:order-last'
              }`}
              style={{
                animation: 'fadeInAll 1s ease-out forwards',
                animationPlayState: 'paused',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-lg">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Description */}
        <div className={`mt-10 text-center ${animationClass ? 'fade-in' : ''}`}>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-700 to-pink-700 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            We are dedicated to providing top-notch care to help our patients with hearing and speech challenges. Explore our gallery to see how we create a warm and professional atmosphere for every visitor.
          </p>
        </div>
      </div>
      <Footer />

      {/* Inline Styles for Animations */}
      <style>{`
        @keyframes fadeInAll {
          0% {
            opacity: 0; 
            transform: translateY(50px) translateX(-30px); /* Move up and slightly left */
          }
          20% {
            transform: translateY(50px) translateX(30px); /* Move up and slightly right */
          }
          100% {
            opacity: 1; 
            transform: translateY(0) translateX(0); /* End position */
          }
        }

        /* Apply general fade-in animation */
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in:not(.fade-in) {
          opacity: 0;
          transform: translateY(30px);
        }

        /* Adjustments for smaller screens */
        @media (max-width: 768px) {
          @keyframes fadeInAll {
            0% { opacity: 0; transform: translateY(30px) translateX(-15px); }
            100% { opacity: 1; transform: translateY(0) translateX(0); }
          }
        }
      `}</style>
    </div>
  );
};

export default Gallery;
