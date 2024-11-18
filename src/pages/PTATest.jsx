import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ptaTest1 from "../assets/ptatest2.jpg"; // Update with actual image file paths if different
import ptaTest2 from "../assets/ptatest.jpg";

const PTATest = () => {
  const imageRefs = useRef([]);

  // Scroll effect: Trigger animations when images come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    imageRefs.current.forEach((image) => observer.observe(image));

    return () => {
      imageRefs.current.forEach((image) => observer.unobserve(image));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-col items-center p-4 space-y-8">
        {/* Page Header */}
        <h1 className="text-3xl font-bold text-center text-blue-600 mt-8 fadeIn">
          PTA Test (Diagnostic Audiometer)
        </h1>

        {/* Description Section */}
        <div className="max-w-3xl text-center text-gray-700 fadeIn">
          <p className="text-lg">
            The Pure Tone Audiometry (PTA) test is a key diagnostic tool used at
            Aawaj Hearing and Speech Center to assess hearing sensitivity. This
            test helps us determine the softest sounds you can hear at various
            pitches. Our experienced audiologists use advanced diagnostic
            audiometers to ensure accurate results, which guide us in crafting
            personalized treatment plans to meet your auditory needs.
          </p>
        </div>

        {/* Images Section */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            ref={(el) => imageRefs.current.push(el)}
            src={ptaTest1}
            alt="Diagnostic Audiometer"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-all duration-700 ease-in-out fadeLeft opacity-0"
          />
          <img
            ref={(el) => imageRefs.current.push(el)}
            src={ptaTest2}
            alt="Audiologist Performing PTA Test"
            className="w-full sm:w-1/2 h-64 rounded-lg shadow-lg object-cover transition-all duration-700 ease-in-out fadeRight opacity-0"
          />
        </div>
      </div>

      <Footer />

      {/* Inline CSS for Enhanced Animations */}
      <style>{`
        .fadeIn {
          animation: fadeIn 1.5s ease-in-out forwards;
        }

        .fadeLeft {
          transform: translateX(-100px);
          opacity: 0;
        }

        .fadeRight {
          transform: translateX(100px);
          opacity: 0;
        }

        .visible.fadeLeft {
          transform: translateX(0);
          opacity: 1;
        }

        .visible.fadeRight {
          transform: translateX(0);
          opacity: 1;
        }

        @media (max-width: 640px) {
          .fadeLeft {
            transform: translateX(-150px);
          }
          .fadeRight {
            transform: translateX(150px);
          }

          .visible.fadeLeft,
          .visible.fadeRight {
            animation: fadeInMobile 2s ease-in-out forwards;
          }

          @keyframes fadeInMobile {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
        }
      `}</style>
    </div>
  );
};

export default PTATest;
