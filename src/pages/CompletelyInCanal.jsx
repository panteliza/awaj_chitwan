// src/components/CompletelyInCanal.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import completelyInCanalImg from '../assets/completelyincanal.jpeg'; // Update with correct path

const CompletelyInCanal = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="bg-gray-50 py-12 flex-grow">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <h2 className="text-center font-bold text-[28px] md:text-[36px] lg:text-[42px] text-red-600 mb-8">
            Completely In-The-Canal (CIC)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <img
                src={completelyInCanalImg}
                alt="Completely in Canal Hearing Aid"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right - Features */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Features:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-3">
                <li>Low-profile design for reduced visibility.</li>
                <li>Supports mild to severe hearing loss.</li>
                <li>Custom-molded for a secure fit.</li>
                <li>Ideal for all ages with appropriate ear canal size.</li>
                <li>Battery life of approximately 3-6 days.</li>
                <li>Comfortable, even for extended wear.</li>
                <li>Reduces wind noise for clearer sound outdoors.</li>
                <li>Optional wireless connectivity for added convenience.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompletelyInCanal;
