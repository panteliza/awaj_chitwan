import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hearingTest1 from "../assets/a.jpg";
import hearingTest2 from "../assets/b.jpg";

const HearingTest = () => {
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
          Comprehensive Hearing Tests
        </h1>

        {/* Description Section */}
        <div className="max-w-3xl text-center text-gray-700 slideIn">
          <p className="text-lg">
            At Aawaj Hearing and Speech Center, we offer a wide range of hearing tests designed to assess and enhance your auditory health. Our state-of-the-art facilities and expert audiologists are here to provide you with a comfortable and accurate hearing assessment. Whether you’re experiencing mild difficulties or significant hearing loss, our tests are tailored to identify your unique needs and guide you towards the best solutions.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6 slideIn">
          <img
            src={hearingTest1}
            alt="Hearing Test Equipment"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          />
          <img
            src={hearingTest2}
            alt="Audiologist with Patient"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-transform duration-700 ease-in-out hover:scale-110"
          />
        </div>
      </div>

      <Footer />

      {/* Inline CSS for Stronger Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          0% { opacity: 0; transform: translateX(-50px); }
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

export default HearingTest;
