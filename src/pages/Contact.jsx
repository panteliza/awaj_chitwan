import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import map from '../assets/map.png';

const mapImageUrl = 'https://www.google.com/maps/place/Elanta+Health+Care+And+Hygiene+Products/@27.6792007,84.391558,17z/data=!3m1!4b1!4m6!3m5!1s0x3994fb31650c21e5:0xd4c20a9f55ff0d2!8m2!3d27.6792007!4d84.391558!16s%2Fg%2F11qrnsmbfn?entry=ttu';

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="p-8 text-center">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-700 to-pink-700 text-center py-2 text-4xl font-semibold">
            Your thoughts and opinions matter to us!
          </h1>

          <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-red-600 to-purple-700">
            Your feedback and suggestions are invaluable to us. Please reach out
            to us using the contact details provided below.
          </p>
        </div>
        
        
        <div className="text-center">
          <a href={mapImageUrl} target="_blank" rel="noopener noreferrer">
            <img src={map} alt="Map" className="mx-auto max-w-full h-auto" />
          </a>
        </div>

      
      </div>
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default Contact;
