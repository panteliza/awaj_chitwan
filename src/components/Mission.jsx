import React, { useEffect, useRef } from 'react';
import MissionImage from '../assets/mission.png'; // Replace with the actual path
import VisionImage from '../assets/vision.png'; // Replace with the actual path

const Mission = () => {
  const missionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger animation when 30% of the element is in view
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1';
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    missionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      missionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const sections = [
    {
      image: MissionImage, // Use imported image
      title: "Our Mission",
      text: "To empower individuals with hearing and speech challenges by providing compassionate, innovative care and personalized therapy to enhance communication, confidence, and quality of life.",
      animation: 'slideInLeft 1s ease-out forwards'
    },
    {
      image: VisionImage, // Use imported image
      title: "Our Vision",
      text: "To be a leading center for hearing and speech health, known for transforming lives through expert care, education, and a commitment to accessibility and inclusivity.",
      animation: 'slideInRight 1s ease-out forwards'
    }
  ];

  return (
    <div className="bg-white py-7 px-4 sm:px-14">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 2xl:gap-12">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (missionRefs.current[index] = el)}
            className="flex flex-col w-full sm:w-[400px] justify-center items-center gap-5 opacity-0"
            style={{
              animation: section.animation,
              animationPlayState: 'paused'
            }}
          >
            <img 
              src={section.image} 
              alt={section.title} 
              className="w-[80px] h-[80px] object-cover rounded-full" // Customize styling as needed
            />
            <div className="font-bold text-gray-700 text-[25px]">{section.title}</div>
            <div className="text-gray-500 text-center">{section.text}</div>
          </div>
        ))}
      </div>

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-100px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(100px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        /* Media queries for smaller screens */
        @media (max-width: 768px) {
          .sm\\:w-[400px] {
            width: 100%; /* Make sure it takes the full width */
          }
          @keyframes slideInLeft {
            0% { opacity: 0; transform: translateX(-150px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            0% { opacity: 0; transform: translateX(150px); }
            100% { opacity: 1; transform: translateX(0); }
          }
        }
      `}</style>
    </div>
  );
};

export default Mission;
