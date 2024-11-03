// src/components/InvisibleInTheCanal.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import invisibleInCanalImg from '../assets/invisibleinthecanal.jpeg'; // Update with correct path

const InvisibleInTheCanal = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="bg-gray-50 py-12 flex-grow">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <h2 className="text-center font-bold text-[28px] md:text-[36px] lg:text-[42px] text-red-600 mb-8">
            Invisible In-The-Canal (IIC)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <img
                src={invisibleInCanalImg}
                alt="Invisible in Canal Hearing Aid"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right - Features */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Features:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-3">
                <li>Custom-fitted for comfort.</li>
                <li>Suitable for mild to severe hearing loss.</li>
                <li>Almost invisible in most ears.</li>
                <li>Best for middle-aged users.</li>
                <li>Battery lasts 3-6 days.</li>
                <li>Lightweight and discreet.</li>
                <li>Enhanced sound clarity.</li>
                <li>Skin-tone color options available.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvisibleInTheCanal;
