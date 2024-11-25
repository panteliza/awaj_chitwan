import React, { useEffect, useRef } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: '"A life-changing Experience"',
    role: 'Sarita Shrestha',
    content:
      "The team at Aawaj transformed my life! After struggling with hearing issues for years, I finally feel like I’m part of conversations again. Their personalized approach and expertise made me feel so cared for. Thank you",
  },
  {
    id: 2,
    name: '“Compassionate and Professional”',
    role: 'Anuj Singh',
    content:
      'From my first visit, I felt heard and respected. The speech therapy sessions for my son were interactive, fun, and effective. He has made tremendous progress, and it’s all thanks to the dedicated staff here. I’m so grateful!',
  },
  {
    id: 3,
    name: '“Remarkable Results!”',
    role: 'David D',
    content:
      'Aawaj exceeded my expectations. My hearing aids are discreet and incredibly effective, and the staff is always ready to help with adjustments. I can enjoy music and conversations in a way I haven’t been able to in years. Highly recommend!',
  },
];

function TestimonialPage() {
  const cardRefs = useRef([]);

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

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="pt-2 flex flex-col gap-7">
      <header className="text-[#ee4c4c] text-center">
        <h1 className="font-bold sm:text-[40px] text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] animate-header">Our Customer Says</h1>
      </header>
      <main className="container mx-auto px-4 md:px-6">
        <section className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`bg-white hover:bg-red-500 rounded-lg shadow-md p-4 md:p-6 border border-gray-300 opacity-0 transform transition-opacity duration-700 ${
                  index % 2 === 0 ? 'md:order-first' : 'md:order-last'
                } group`}
                style={{
                  animation: 'fadeInAll 1s ease-out forwards',
                  animationPlayState: 'paused',
                }}
              >
                <div className="mb-3">
                  <div className="font-semibold text-red-600 group-hover:text-white">
                    {testimonial.name}
                  </div>
                </div>
                <p className="text-gray-600 group-hover:text-white italic mb-3">
                  {testimonial.content}
                </p>
                <div className="text-gray-500 group-hover:text-white">
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeInAll {
          0% {
            opacity: 0; 
            transform: translateY(50px) translateX(-30px); /* Move up and slightly left */
          }
          20% {
            transform: translateY(50px) translateX(30px); /* Move up and slightly right */
          }
          100% {
            opacity: 1; 
            transform: translateY(0) translateX(0); /* End position */
          }
        }

        /* Header animation */
        @keyframes headerFadeIn {
          0% { opacity: 0; transform: translateY(-20px); } /* Slide in from above */
          100% { opacity: 1; transform: translateY(0); } /* End position */
        }

        /* Apply header animation */
        .animate-header {
          animation: headerFadeIn 1s ease-out forwards; /* Add animation to header */
          opacity: 0; /* Initial opacity */
        }

        /* Adjustments for smaller screens */
        @media (max-width: 768px) {
          @keyframes fadeInAll {
            0% { opacity: 0; transform: translateY(30px) translateX(-15px); }
            20% { transform: translateY(30px) translateX(15px); }
            100% { opacity: 1; transform: translateY(0) translateX(0); }
          }
          @keyframes headerFadeIn {
            0% { opacity: 0; transform: translateY(-15px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        }
      `}</style>
    </div>
  );
}

export default TestimonialPage;
