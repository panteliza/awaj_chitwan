import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import oaeImage1 from "../assets/oae.png"; // Replace with actual image paths
import oaeImage2 from "../assets/Ear-anatomy-with-probe-inserted.jpg"; // Replace with actual image paths

const OAE = () => {
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
          Otoacostic Emissions (OAE)
        </h1>

        {/* Description Section */}
        <div className="max-w-3xl text-center text-gray-700 slideIn">
          <p className="text-lg">
            Otoacostic Emissions (OAE) testing is a crucial tool used at Aawaj Hearing and Speech Center to evaluate the function of the inner ear, specifically the cochlea. This non-invasive test helps detect hearing loss in individuals of all ages, including newborns and young children who may not be able to communicate their hearing difficulties.
          </p>
          <br />
          <p className="text-lg">
            Our advanced OAE testing equipment provides quick and accurate results, enabling our audiologists to make informed recommendations for your hearing health. We strive to make the testing process as comfortable as possible, ensuring a stress-free experience for both children and adults.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 slideIn">
          <img
            src={oaeImage1}
            alt="OAE Testing Equipment"
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          />
          <img
            src={oaeImage2}
            alt="Audiologist Performing OAE Test"
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      <Footer />

      {/* Inline CSS for Stronger Animations */}
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

export default OAE;
