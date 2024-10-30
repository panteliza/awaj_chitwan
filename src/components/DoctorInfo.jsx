import React, { useEffect, useRef } from 'react';
import doctor1 from '../assets/doctor1.jpeg';

const DoctorInfo = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

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

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 bg-gray-100">
      {/* Left Side: Doctor Information */}
      
      {/* Right Side: Doctor Image with Pink Background */}
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
      <div
        ref={leftRef}
        className="md:w-1/2 w-full p-8 text-center md:text-left opacity-0 transition-opacity duration-800"
        style={{
          animation: 'fadeInLeft 1s ease-out forwards',
          animationPlayState: 'paused',
        }}
      >
        <h1 className="text-4xl md:text-4xl font-bold text-red-600">
          MR. JAYLAL PRASAD YADAV
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Mr. JAYLAL PRASAD YADAV completed his bachelor's and master's degree
          in Audiology and Speech Language Pathology from Dr. M.V Shetty College of Speech and Hearing, Mangalore University. He is currently working as a senior lecturer (Non-Medical) audiologist and speech language pathologist in Chitwan Medical College Teaching Hospital. He has served as the clinical Director of Aawaz hearing and speech care center Bharatpur 10, Chitwan.
        </p>
        <button className="bg-red-500 rounded-3xl mt-[10px] px-4 py-2 text-white text-[18px] hover:text-red-600 hover:bg-red-300">
          More Info
        </button>
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
