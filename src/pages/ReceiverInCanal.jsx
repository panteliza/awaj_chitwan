import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import receiverInCanalImg from '../assets/receiverinthecanal-removebg-preview.png'; // Update with correct path

const ReceiverInCanal = () => {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Initial load animation for page load effect
    const loadAnimationElements = [headerRef.current, imageRef.current, featuresRef.current];
    loadAnimationElements.forEach((el) => {
      if (el) {
        el.style.animationPlayState = 'running';
        el.style.opacity = '1';
      }
    });

    const observerOptions = {
      threshold: 0.3,
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

    if (headerRef.current) observer.observe(headerRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    if (featuresRef.current) observer.observe(featuresRef.current);

    return () => {
      if (headerRef.current) observer.unobserve(headerRef.current);
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (featuresRef.current) observer.unobserve(featuresRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <section className="bg-gray-50 py-12 flex-grow">
        <div className="container mx-auto px-4">
          {/* Header Section */}
          <h2
            ref={headerRef}
            className="text-center font-bold text-[28px] md:text-[36px] lg:text-[42px] text-red-600 mb-8 opacity-0"
            style={{
              animation: 'fadeInDown 1.5s ease-in-out forwards',
              animationPlayState: 'paused',
            }}
          >
            Receiver In Canal (RIC)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left - Image */}
            <div
              ref={imageRef}
              className="flex justify-center opacity-0"
              style={{
                animation: 'fadeInLeft 1.5s ease-in-out forwards',
                animationPlayState: 'paused',
              }}
            >
              <img
                src={receiverInCanalImg}
                alt="Receiver in Canal Hearing Aid"
                className="max-w-full h-auto rounded-lg shadow-lg sm:max-w-[80%] md:max-w-[70%] lg:max-w-full"
              />
            </div>

            {/* Right - Features */}
            <div
              ref={featuresRef}
              className="opacity-0"
              style={{
                animation: 'fadeInRight 1.5s ease-in-out forwards',
                animationPlayState: 'paused',
              }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Features:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-3">
                <li>Compact and discreet design, ideal for those seeking less visibility.</li>
                <li>Provides superior sound quality, especially for high-frequency sounds.</li>
                <li>Suitable for individuals with mild to severe hearing loss.</li>
                <li>Lightweight and comfortable, minimizing ear fatigue during long hours of wear.</li>
                <li>Battery options range from standard to rechargeable types.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          0% { opacity: 0; transform: translateX(-80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          0% { opacity: 0; transform: translateX(80px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        /* Smaller screen adjustments for visibility */
        @media (max-width: 768px) {
          @keyframes fadeInDown {
            0% { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            0% { opacity: 0; transform: translateX(-40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            0% { opacity: 0; transform: translateX(40px); }
            100% { opacity: 1; transform: translateX(0); }
          }
        }
      `}</style>
    </div>
  );
};

export default ReceiverInCanal;
