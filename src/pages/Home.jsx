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
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50">
      <Navbar />
      <div className="w-full">
        <Slider />
      </div>
      <div className="w-full">
        <DoctorInfo />
      </div>
      <div className="w-full">
        <Main1 />
      </div>
      <div className="w-full">
        <Services />
      </div>
      <div className="w-full">
        <Mission />
      </div>
      <div className="w-full">
        <TestimonialPage />
      </div>
      <div className="w-full">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
