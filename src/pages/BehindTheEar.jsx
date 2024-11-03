// src/components/BehindTheEar.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import behindTheEarImg from '../assets/behindtheear.jpeg'; // Update with correct path

const BehindTheEar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="bg-gray-50 py-12 flex-grow">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <h2 className="text-center font-bold text-[28px] md:text-[36px] lg:text-[42px] text-red-600 mb-8">
            Behind The Ear (BTE)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <img
                src={behindTheEarImg}
                alt="Behind the Ear Hearing Aid"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Right - Features */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Features:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-3">
                <li>
                  Comfortable behind-the-ear design for secure and stable fit.
                </li>
                <li>
                  High-powered performance suitable for various levels of hearing loss, from mild to profound.
                </li>
                <li>
                  Sturdy and user-friendly, making it ideal for individuals across different age groups.
                </li>
                <li>
                  Extended battery life for longer periods of uninterrupted use.
                </li>
                <li>
                  Available in a range of colors and styles to match individual preferences.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BehindTheEar;
