// src/components/Services.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import invisibleinthecanal from '../assets/ab.jpg';
import intheear from '../assets/cd.jpg';
import receiverincanal from '../assets/ef.jpg';

// Services array with image imports
const services = [
  {
    title: 'Hearing Tests',
    description:
      'Discover the state of your hearing with our comprehensive hearing tests. At Aawaj, we offer precise assessments using advanced tools to help you take the first step towards better hearing health.',
    imgSrc: invisibleinthecanal,
    link: '/hearing-tests', // Link for this service
  },
  {
    title: 'Speech And Language Therapy',
    description:
      'Enhance communication skills with our personalized Speech and Language Therapy. At Aawaj, we provide expert care for children and adults to overcome speech, language, and communication challenges for a better quality of life.',
    imgSrc: intheear,
    link: '/speech-and-language-therapy', // Link for this service
  },
  {
    title: 'Hearing Aid Trial And Fittings',
    description:
      'Experience the perfect fit with our Hearing Aid Trial and Fitting services. At Aawaj, we offer personalized solutions to match your hearing needs, ensuring comfort, clarity, and improved hearing in every setting.',
    imgSrc: receiverincanal,
    link: '/hearing-aid-trial-and-fittings', // Link for this service
  },
];

const Services = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleCardClick = (link) => {
    navigate(link); // Navigate to the specified link
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Custom Heading */}
        <h2 className="font-bold text-center sm:text-[30px] text-[25px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-red-600 mb-8">
          Our Services
        </h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => handleCardClick(service.link)} // Handle card click
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-red-700">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
