import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Mission from '../components/Mission';
import TestimonialPage from '../components/Testimonial';
import DoctorInfo from '../components/DoctorInfo';
import Main1 from '../components/Main1';
import Services from '../components/Services';
import Contact from '../components/ContactForm';

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 overflow-hidden">
      <Navbar />
      <div className="w-full flex-shrink-0">
        <Slider />
      </div>
      <div className="w-full flex-shrink-0">
        <DoctorInfo />
      </div>
      <div className="w-full flex-shrink-0">
        <Main1 />
      </div>
      <div className="w-full flex-shrink-0">
        <Services />
      </div>
      <div className="w-full flex-shrink-0">
        <Mission />
      </div>
      <div className="w-full flex-shrink-0">
        <TestimonialPage />
      </div>
      <div className="w-full flex-shrink-0">
        <Contact />
      </div>
      <Footer className="w-full" />
    </div>
  );
};

export default Home;
