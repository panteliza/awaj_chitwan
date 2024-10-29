import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import Mission from '../components/Mission';
import TestimonialPage from '../components/Testimonial';


const Home = () => {
  return (
    <div className="w-full min-h-screen">
      {/* w-full sets the width to 100% */}
      <Navbar />
      <Slider /> 
      <Mission/>
      <TestimonialPage/>
      <Footer/>
      
    </div>
  );
};

export default Home;
