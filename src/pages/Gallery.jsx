import React, { useEffect, useState } from 'react';
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
  const [animationClass, setAnimationClass] = useState(false);

  useEffect(() => {
    // Trigger animation when the component is mounted
    const timer = setTimeout(() => {
      setAnimationClass(true);
    }, 100); // Delay to start the animation

    return () => clearTimeout(timer);
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
              className={`relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 ${
                animationClass ? 'fade-in delay-' + index * 100 : ''
              }`}
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
        .fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in:not(.fade-in) {
          opacity: 0;
          transform: translateY(30px);
        }

        .delay-100 {
          transition-delay: 0.1s;
        }
        .delay-200 {
          transition-delay: 0.2s;
        }
        .delay-300 {
          transition-delay: 0.3s;
        }
        .delay-400 {
          transition-delay: 0.4s;
        }
        .delay-500 {
          transition-delay: 0.5s;
        }
      `}</style>
    </div>
  );
};

export default Gallery;
