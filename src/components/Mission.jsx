import React, { useEffect, useRef } from 'react';
import { SlBadge } from "react-icons/sl";
import { BiBadge } from "react-icons/bi";

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
      icon: <SlBadge className="text-[#ee4c4c] text-[40px]" />,
      title: "Our Mission",
      text: "To empower individuals with hearing and speech challenges by providing compassionate, innovative care and personalized therapy to enhance communication, confidence, and quality of life."
    },
    {
      icon: <BiBadge className="text-[#ee4c4c] text-[40px]" />,
      title: "Our Vision",
      text: "To be a leading center for hearing and speech health, known for transforming lives through expert care, education, and a commitment to accessibility and inclusivity."
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
              animation: 'fadeInUp 1s ease-out forwards',
              animationPlayState: 'paused'
            }}
          >
            <div>{section.icon}</div>
            <div className="font-bold text-gray-700 text-[25px]">{section.title}</div>
            <div className="text-gray-500 text-center">{section.text}</div>
          </div>
        ))}
      </div>

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Mission;
