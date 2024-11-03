import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ptaTest1 from "../assets/pta1.jpg"; // Update with actual image file names if different
import ptaTest2 from "../assets/pta2.jpg";

const PTATest = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center p-4 space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mt-8 animate-fadeIn">
          PTA Test (Diagnostic Audiometer)
        </h1>

        <div className="max-w-3xl text-center text-gray-700 animate-slideIn">
          <p className="text-lg">
            The Pure Tone Audiometry (PTA) test is a key diagnostic tool used at Aawaz Hearing and Speech Center to assess hearing sensitivity. This test helps us determine the softest sounds you can hear at various pitches. Our experienced audiologists use advanced diagnostic audiometers to ensure accurate results, which guide us in crafting personalized treatment plans to meet your auditory needs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 animate-slideIn">
          <img
            src={ptaTest1}
            alt="Diagnostic Audiometer"
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <img
            src={ptaTest2}
            alt="Audiologist Performing PTA Test"
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PTATest;
