import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ptaTest1 from "../assets/ptatest2.jpg"; // Update with actual image file paths if different
import ptaTest2 from "../assets/ptatest.jpg";

const PTATest = () => {
  // Scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center p-4 space-y-8">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mt-8 fadeIn">
          PTA Test (Diagnostic Audiometer)
        </h1>

        {/* Description Section */}
        <div className="max-w-3xl text-center text-gray-700 fadeIn">
          <p className="text-lg">
            The Pure Tone Audiometry (PTA) test is a key diagnostic tool used at
            Aawaj Hearing and Speech Center to assess hearing sensitivity. This
            test helps us determine the softest sounds you can hear at various
            pitches. Our experienced audiologists use advanced diagnostic
            audiometers to ensure accurate results, which guide us in crafting
            personalized treatment plans to meet your auditory needs.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={ptaTest1}
            alt="Diagnostic Audiometer"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out imageLeft"
          />
          <img
            src={ptaTest2}
            alt="Audiologist Performing PTA Test"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out imageRight"
          />
        </div>
      </div>

      <Footer />

      {/* Inline CSS for Enhanced Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-100px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(100px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .fadeIn {
          animation: fadeIn 1.5s ease-in-out forwards;
        }

        .imageLeft {
          animation: slideInLeft 2s ease-in-out forwards;
        }

        .imageRight {
          animation: slideInRight 2s ease-in-out forwards;
        }

        @media (max-width: 640px) {
          .imageLeft {
            animation: slideInLeft 2s ease-in-out forwards, fadeIn 1s ease-in-out forwards;
          }
          .imageRight {
            animation: slideInRight 2s ease-in-out forwards, fadeIn 1s ease-in-out forwards;
          }
        }
      `}</style>
    </div>
  );
};

export default PTATest;
