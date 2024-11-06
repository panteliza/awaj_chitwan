import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import therapyImage1 from "../assets/c.jpg";
import therapyImage2 from "../assets/d.jpg";

const SpeechLanguageTherapy = () => {
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
          Speech and Language Therapy
        </h1>

        {/* Description Section */}
        <div className="max-w-3xl text-center text-gray-700 slideIn">
          <p className="text-lg">
            At Aawaj Hearing and Speech Center, we offer comprehensive speech and language therapy services to help individuals of all ages improve their communication skills. Our licensed speech-language pathologists provide personalized assessments and tailored treatment plans to address various speech and language challenges, including articulation, fluency, and language development.
          </p>
          <br />
          <p className="text-lg">
            Our therapy sessions are designed to be engaging and supportive, ensuring that each individual feels comfortable while working towards their communication goals. Whether you are seeking therapy for a child or an adult, our dedicated team is here to assist you on your journey to better communication.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 slideIn">
          <img
            src={therapyImage1}
            alt="Speech Therapy Session"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          />
          <img
            src={therapyImage2}
            alt="Therapist with Client"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out hover:scale-110"
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

export default SpeechLanguageTherapy;
