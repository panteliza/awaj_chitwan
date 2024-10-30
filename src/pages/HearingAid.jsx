import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hearingAidTrial1 from "../assets/e.jpg";
import hearingAidTrial2 from "../assets/g.jpg";

const HearingAidTrialsAndFittings = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center p-4 space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mt-8 animate-fadeIn">
          Hearing Aid Trials and Fittings
        </h1>

        <div className="max-w-3xl text-center text-gray-700 animate-slideIn">
          <p className="text-lg">
            At Aawaz Hearing and Speech Center, we understand that choosing the right hearing aid is a significant decision. That's why we offer comprehensive hearing aid trials and fittings to ensure that you find the perfect solution for your hearing needs. Our experienced audiologists will guide you through the process, providing personalized assessments to recommend the most suitable devices for your lifestyle.
          </p>
          <br />
          <p className="text-lg">
            During your trial period, you can test different models in real-world environments, allowing you to experience the benefits firsthand. Our team will provide ongoing support and adjustments to ensure optimal comfort and performance, making your transition to hearing aids as smooth as possible.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 animate-slideIn">
          <img
            src={hearingAidTrial1}
            alt="Hearing Aid Fitting"
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <img
            src={hearingAidTrial2}
            alt="Patient Trying Hearing Aids"
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HearingAidTrialsAndFittings;
