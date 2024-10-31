import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import aawazlocation from '../assets/aawazlocation.png';

const mapImageUrl = 'https://www.google.com/maps/dir/27.705344,84.4131412/Aawaz+Hearing+and+Speech+care+Center,+Hospital+Rd+10,+Bharatpur+44200/@27.6939849,84.3893104,13.75z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3994fbc4ab160d6f:0x3fa4c00f10d335cb!2m2!1d84.4320284!2d27.6810354?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="p-8 text-center">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-700 to-pink-700 text-center py-2 text-4xl font-semibold">
          We Value Your Voice! We're here to listen and to serve you better.
          </h1>

          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-600 to--700">
          Your thoughts and experiences with us matter deeply, and your feedback helps us enhance our services for everyone. Whether it's a suggestion, a question, or a comment, please feel free to reach out.
          </p>
        </div>
        
        
        <div className="text-center">
          <a href={mapImageUrl} target="_blank" rel="noopener noreferrer">
            <img src={aawazlocation} alt="Map" className="mx-auto max-w-full h-auto" />
          </a>
        </div>

      
      </div>
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default Contact;
