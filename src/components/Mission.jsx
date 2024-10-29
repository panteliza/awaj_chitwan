import React from 'react';
import { SlBadge } from "react-icons/sl";
import { BiBadge } from "react-icons/bi";

const Mission = () => {
  const sections = [
    {
      icon: <SlBadge className="text-red-400 text-[40px]" />,
      title: "Our Mission",
      text: "To empower individuals with hearing and speech challenges by providing compassionate, innovative care and personalized therapy to enhance communication, confidence, and quality of life."
    },
    {
      icon: <BiBadge className="text-red-400 text-[40px]" />,
      title: "Our Vision",
      text: "To be a leading center for hearing and speech health, known for transforming lives through expert care, education, and a commitment to accessibility and inclusivity."
    }
  ];

  return (
    <div className="bg-white py-7 px-4 sm:px-14">
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 2xl:gap-12">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col w-full sm:w-[400px] justify-center items-center gap-5">
            <div>{section.icon}</div>
            <div className="font-bold text-gray-700 text-[25px]">{section.title}</div>
            <div className="text-gray-500 text-center">{section.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mission;
