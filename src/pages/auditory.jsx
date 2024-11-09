import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import abrImage1 from "../assets/ABR.jpg"; // Update with actual image paths
import abrImage2 from "../assets/arb2.jpg";

const ABRTest = () => {
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
          Auditory Brainstem Response (ABR) Test
        </h1>

        {/* Description Section */}
        <div className="max-w-3xl text-center text-gray-700 slideIn">
          <p className="text-lg">
            The Auditory Brainstem Response (ABR) test is a reliable diagnostic tool offered at Aawaj Hearing and Speech Center. This test measures the brain's response to sounds and is used to assess hearing and neurological function, especially in individuals who cannot undergo standard hearing tests.
          </p>
          <br />
          <p className="text-lg">
            ABR testing is non-invasive and provides valuable information about the auditory pathway, helping our specialists diagnose conditions such as hearing loss, auditory neuropathy, and more. Our team ensures a comfortable experience and accurate results for all patients.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 slideIn">
          <img
            src={abrImage1}
            alt="ABR Test Equipment"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <img
            src={abrImage2}
            alt="Audiologist Conducting ABR Test"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      <Footer />

      {/* Inline CSS for Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(60px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .fadeIn {
          animation: fadeIn 2s ease-in-out forwards;
        }

        .slideIn {
          animation: slideIn 2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ABRTest;
