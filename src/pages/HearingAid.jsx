import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hearingAidTrial1 from "../assets/digi 1.jpeg";
import hearingAidTrial2 from "../assets/digital-hearing-aids.jpg";

const HearingAidTrialsAndFittings = () => {
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
          Hearing Aid Trials and Fittings
        </h1>

        {/* Description Section */}
        <div className="max-w-3xl text-center text-gray-700 fadeIn">
          <p className="text-lg">
            At Aawaj Hearing and Speech Center, we understand that choosing the right hearing aid is a significant decision. That's why we offer comprehensive hearing aid trials and fittings to ensure that you find the perfect solution for your hearing needs. Our experienced audiologists will guide you through the process, providing personalized assessments to recommend the most suitable devices for your lifestyle.
          </p>
          <br />
          <p className="text-lg">
            During your trial period, you can test different models in real-world environments, allowing you to experience the benefits firsthand. Our team will provide ongoing support and adjustments to ensure optimal comfort and performance, making your transition to hearing aids as smooth as possible.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={hearingAidTrial1}
            alt="Hearing Aid Fitting"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out imageLeft hover:scale-110"
          />
          <img
            src={hearingAidTrial2}
            alt="Patient Trying Hearing Aids"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out imageRight hover:scale-110"
          />
        </div>
      </div>

      <Footer />

      {/* Inline CSS for Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(50px); }
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

export default HearingAidTrialsAndFittings;
