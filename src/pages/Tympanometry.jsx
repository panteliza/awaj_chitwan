import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tympTest1 from "../assets/tymp.png"; // Update with actual image paths
import tympTest2 from "../assets/a.jpg";

const TympanometryTest = () => {
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
          Tympanometry & Stapedius Reflex Test
        </h1>

        {/* Description Section */}
        <div className="max-w-3xl text-center text-gray-700 fadeIn">
          <p className="text-lg">
            Tympanometry and Stapedius Reflex testing are essential diagnostic tools used at Aawaj Hearing and Speech Center to assess middle ear function. Tympanometry measures the movement of the eardrum in response to changes in air pressure, while the Stapedius Reflex Test evaluates the reflexes of the middle ear muscles. These tests help in diagnosing various middle ear conditions and provide a comprehensive understanding of auditory health.
          </p>
          <br />
          <p className="text-lg">
            Our audiologists use state-of-the-art equipment to conduct these tests, ensuring precise results that aid in tailoring the best treatment options for our patients. The testing is non-invasive, quick, and suitable for all age groups.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={tympTest1}
            alt="Tympanometry Equipment"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out imageLeft hover:scale-110"
          />
          <img
            src={tympTest2}
            alt="Audiologist Performing Tympanometry Test"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out imageRight hover:scale-110"
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

        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-60px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(60px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .fadeIn {
          animation: fadeIn 2s ease-in-out forwards;
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

export default TympanometryTest;
