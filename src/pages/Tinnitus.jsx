import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tinnitusImage1 from "../assets/tinnitus.jpg"; // Update with actual image paths
import tinnitusImage2 from "../assets/tinnitus2.jpg";

const TinnitusRetrainingTherapy = () => {
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
          Tinnitus Retraining Therapy (TRT)
        </h1>

        {/* Description Section */}
        <div className="max-w-3xl text-center text-gray-700 slideIn">
          <p className="text-lg">
            Tinnitus Retraining Therapy (TRT) is an evidence-based treatment offered at Aawaj Hearing and Speech Center to help individuals manage tinnitus. This therapy aims to retrain the brain to perceive tinnitus sounds as neutral, reducing their impact on daily life.
          </p>
          <br />
          <p className="text-lg">
            Our TRT program combines sound therapy and counseling to address both the auditory and psychological aspects of tinnitus. Our specialists provide personalized guidance to ensure the therapy aligns with each patient’s unique needs, helping them achieve long-term relief.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 slideIn">
          <img
            src={tinnitusImage1}
            alt="Tinnitus Therapy Equipment"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <img
            src={tinnitusImage2}
            alt="Audiologist Conducting Tinnitus Retraining Therapy"
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

export default TinnitusRetrainingTherapy;
