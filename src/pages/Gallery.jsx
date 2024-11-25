import React from 'react';
import galleryImg1 from '../assets/hearing1.jpg'; // Replace with your image paths
import galleryImg2 from '../assets/hearing2.jpg';
import galleryImg3 from '../assets/hearing3.jpg';
import galleryImg4 from '../assets/hearing4.jpg';
import galleryImg5 from '../assets/hearingaid.png';
import galleryImg6 from '../assets/digital-hearing-aids.jpg';

const Gallery = () => {
  const galleryImages = [
    { id: 1, src: galleryImg1, alt: 'Aawaj Clinic Facility 1' },
    { id: 2, src: galleryImg2, alt: 'Aawaj Clinic Facility 2' },
    { id: 3, src: galleryImg3, alt: 'Aawaj Clinic Facility 3' },
    { id: 4, src: galleryImg4, alt: 'Aawaj Clinic Facility 4' },
    { id: 5, src: galleryImg5, alt: 'Aawaj Clinic Facility 5' },
    { id: 6, src: galleryImg6, alt: 'Aawaj Clinic Facility 6' },
  ];

  return (
    <div className="w-full bg-gray-50 py-10 px-4 sm:px-10 lg:px-20">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-500">
          Welcome to Aawaj Clinic
        </h1>
        <p className="mt-4 text-gray-700 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
          Discover the compassionate care and innovative services we offer at Aawaj Clinic. Our facilities are designed to provide a serene and welcoming environment for our patients.
        </p>
      </div>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
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
      <div className="mt-10 text-center">
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
          We are dedicated to providing top-notch care to help our patients with hearing and speech challenges. Explore our gallery to see how we create a warm and professional atmosphere for every visitor.
        </p>
      </div>
    </div>
  );
};

export default Gallery;
