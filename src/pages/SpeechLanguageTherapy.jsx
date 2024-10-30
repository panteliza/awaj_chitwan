import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import therapyImage1 from "../assets/c.jpg";
import therapyImage2 from "../assets/d.jpg";

const SpeechLanguageTherapy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center p-4 space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mt-8 animate-fadeIn">
          Speech and Language Therapy
        </h1>

        <div className="max-w-3xl text-center text-gray-700 animate-slideIn">
          <p className="text-lg">
            At Aawaz Hearing and Speech Center, we offer comprehensive speech and language therapy services to help individuals of all ages improve their communication skills. Our licensed speech-language pathologists provide personalized assessments and tailored treatment plans to address various speech and language challenges, including articulation, fluency, and language development.
          </p>
          <br />
          <p className="text-lg">
            Our therapy sessions are designed to be engaging and supportive, ensuring that each individual feels comfortable while working towards their communication goals. Whether you are seeking therapy for a child or an adult, our dedicated team is here to assist you on your journey to better communication.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 animate-slideIn">
          <img
            src={therapyImage1}
            alt="Speech Therapy Session"
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <img
            src={therapyImage2}
            alt="Therapist with Client"
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SpeechLanguageTherapy;
