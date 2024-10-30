import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hearingTest1 from "../assets/a.jpg";
import hearingTest2 from "../assets/b.jpg";

const HearingTest = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center p-4 space-y-8">
        <h1 className="text-3xl font-bold text-center text-blue-600 mt-8 animate-fadeIn">
          Comprehensive Hearing Tests
        </h1>

        <div className="max-w-3xl text-center text-gray-700 animate-slideIn">
          <p className="text-lg">
            At Aawaz Hearing and Speech Center, we offer a wide range of hearing tests designed to assess and enhance your auditory health. Our state-of-the-art facilities and expert audiologists are here to provide you with a comfortable and accurate hearing assessment. Whether you’re experiencing mild difficulties or significant hearing loss, our tests are tailored to identify your unique needs and guide you towards the best solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 animate-slideIn">
          <img
            src={hearingTest1}
            alt="Hearing Test Equipment"
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <img
            src={hearingTest2}
            alt="Audiologist with Patient"
            className="w-full sm:w-1/2 rounded-lg shadow-lg object-cover transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HearingTest;
