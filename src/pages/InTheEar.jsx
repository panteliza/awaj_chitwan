// src/components/InTheEar.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import inTheEarImg from '../assets/intheear.jpeg'; // Update with correct path

const InTheEar = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <section className="bg-gray-50 py-12 flex-grow">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <h2 className="text-center font-bold text-[28px] md:text-[36px] lg:text-[42px] text-red-600 mb-8">
            In The Ear (ITE)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div className="flex justify-center">
              <img
                src={inTheEarImg}
                alt="In the Ear Hearing Aid"
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
                  Convenient volume control for easy adjustments on the go.
                </li>
                <li>
                  Designed for individuals with mild to severe hearing loss.
                </li>
                <li>
                  Custom-fitted to provide a snug and comfortable experience.
                </li>
                <li>
                  Reliable battery life, lasting between 6 to 9 days on average.
                </li>
                <li>
                  Compact, single-piece design that fits securely in the outer ear.
                </li>
                <li>
                  Easy-to-handle, suitable for individuals who prefer larger controls.
                </li>
                <li>
                  Available in a range of skin-tone colors to blend naturally.
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

export default InTheEar;
