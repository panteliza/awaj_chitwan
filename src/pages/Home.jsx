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
    <div className="w-full min-h-screen">
      {/* w-full sets the width to 100% */}
      <Navbar />
      <Slider /> 
      <DoctorInfo/>
     <Main1/>
     <Services/>
      <Mission/>
      <TestimonialPage/>
      <Contact/>
      <Footer/>
      
    </div>
  );
};

export default Home;
