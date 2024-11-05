import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import aawazlocation from '../assets/aawazlocation.png';

const mapImageUrl =
  'https://www.google.com/maps/dir/27.705344,84.4131412/Aawaz+Hearing+and+Speech+care+Center,+Hospital+Rd+10,+Bharatpur+44200/@27.6939849,84.3893104,13.75z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3994fbc4ab160d6f:0x3fa4c00f10d335cb!2m2!1d84.4320284!2d27.6810354?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D';

const Contact = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger animation when 10% of the element is in view
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = 'running';
          entry.target.style.opacity = '1'; // Make it visible
        } else {
          entry.target.style.animationPlayState = 'paused';
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (headingRef.current) observer.observe(headingRef.current);
    if (textRef.current) observer.observe(textRef.current);
    if (mapRef.current) observer.observe(mapRef.current);

    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
      if (textRef.current) observer.unobserve(textRef.current);
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <div className="p-8 text-center">
          <h1
            ref={headingRef}
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-700 to-pink-700 text-4xl font-semibold opacity-0"
            style={{ animation: 'fadeInDown 1s ease-out forwards', animationPlayState: 'paused' }}
          >
            We Value Your Voice! We're here to listen and to serve you better.
          </h1>

          <p
            ref={textRef}
            className="mt-4 text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-600 to-red-700 opacity-0"
            style={{ animation: 'fadeInUp 1s ease-out forwards', animationPlayState: 'paused' }}
          >
            Your thoughts and experiences with us matter deeply, and your feedback helps us enhance
            our services for everyone. Whether it's a suggestion, a question, or a comment, please
            feel free to reach out.
          </p>
        </div>

        <div ref={mapRef} className="text-center mt-8 opacity-0">
          <a href={mapImageUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={aawazlocation}
              alt="Map"
              className="mx-auto max-w-full h-auto"
              style={{ animation: 'fadeIn 1s ease-out forwards', animationPlayState: 'paused' }}
            />
          </a>
        </div>
      </div>

      <ContactForm />
      <Footer />

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        /* Media queries for better performance on smaller screens */
        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem; /* Adjust heading size */
            animation-duration: 0.8s; /* Faster animations */
          }
          p {
            font-size: 1rem; /* Adjust text size */
            animation-duration: 0.8s; /* Faster animations */
          }
          img {
            animation-duration: 0.8s; /* Faster animations */
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
