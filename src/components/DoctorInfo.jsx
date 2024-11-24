import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import doctor1 from '../assets/doctor1.jpeg';

const DoctorInfo = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Trigger when 50% of the element is in view
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  const handleNavigate = () => {
    navigate('/about');
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-gray-100">
      {/* Right Side: Doctor Image */}
      <div
        ref={rightRef}
        className="md:w-1/2 w-full flex items-center justify-center p-4 rounded-lg opacity-0 transition-opacity duration-700 mt-8 md:mt-0"
        style={{
          animation: 'fadeInRight 1s ease-out forwards',
          animationPlayState: 'paused',
        }}
      >
        <img
          src={doctor1}
          alt="Dr. Alex Thompson"
          className="w-60 h-59 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Left Side: Text Content */}
      <div
        ref={leftRef}
        className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left opacity-0 transition-opacity duration-800 space-y-5"
        style={{
          animation: 'fadeInLeft 1s ease-out forwards',
          animationPlayState: 'paused',
        }}
      >
        {/* Heading */}
        <div className="w-full">
          <h1 className="  text-4xl md:text-4xl font-bold text-red-600">
            MR. JAYLAL PRASAD YADAV
          </h1>
        </div>

        {/* Information */}
        <div className="w-full">
  <p
    className="mt-4 text-lg md:text-xl text-transparent bg-clip-text leading-relaxed sm:leading-loose sm:text-lg sm:px-4 text-justify"
    style={{
      backgroundImage: 'linear-gradient(to right, #6B21A8, #9333EA, #3B82F6, #F43F5E, #F59E0B)',
    }}
  >
    Mr. JAYLAL PRASAD YADAV completed his bachelor's and master's degree
    in Audiology and Speech Language Pathology from M.V Shetty College of Speech and Hearing, Mangalore University. He is currently working as assistant professor at Chitwan Medical College. He has served as the clinical Director of Aawaj hearing and speech care center Bharatpur 10, Chitwan.
  </p>
</div>

        {/* Button */}
        <div className="w-full">
          <button
            onClick={handleNavigate}
            className="bg-red-500 rounded-3xl px-4 py-2 text-white text-[18px] hover:text-red-600 hover:bg-red-300"
          >
            More About Aawaj
          </button>
        </div>
      </div>

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default DoctorInfo;
