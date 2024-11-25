import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import behinstheear from '../assets/behindtheear-removebg-preview.png';
import completelyincanal from '../assets/completelyincanal-removebg-preview.png';
import invisibleinthecanal from '../assets/invisibleinthecanal-removebg-preview.png';
import intheear from '../assets/intheear-removebg-preview.png';
import receiverincanal from '../assets/receiverinthecanal-removebg-preview.png';

export default function App() {
  const [isHovered, setIsHovered] = useState(null);
  const productRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

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

    productRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      productRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const products = [
    { image: behinstheear, title: 'Behind-The-Ear', link: '/behind-the-ear' },
    { image: completelyincanal, title: 'Completely-In-Canal', link: '/completely-in-canal' },
    { image: invisibleinthecanal, title: 'Invisible-In-The-Canal', link: '/invisible-in-the-canal' },
    { image: intheear, title: 'In-The-Ear', link: '/in-the-ear' },
    { image: receiverincanal, title: 'Receiver-In-Canal', link: '/receiver-in-canal' }
  ];

  return (
    <div className="px-5 relative z-0 flex flex-col justify-center items-center py-16">
      <div className="flex justify-center font-bold sm:text-[40px] text-[35px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-red-500">
        Our Products
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8 justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            ref={(el) => (productRefs.current[index] = el)}
            image={product.image}
            title={product.title}
            isHovered={isHovered === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            to={product.link}
            animationIndex={index}
          />
        ))}
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
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(80px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-80px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

const ProductCard = React.forwardRef(({ image, title, isHovered, onMouseEnter, onMouseLeave, to, animationIndex }, ref) => {
  const scale = isHovered ? 1 : 0.9;
  const zIndex = isHovered ? 1 : 'auto';

  // Choose animation based on the index
  let animation;
  if (animationIndex % 4 === 0) {
    animation = 'fadeInLeft';
  } else if (animationIndex % 4 === 1) {
    animation = 'fadeInRight';
  } else if (animationIndex % 4 === 2) {
    animation = 'fadeInUp';
  } else {
    animation = 'fadeInDown';
  }

  return (
    <Link to={to} className="no-underline">
      <div
  ref={ref}
  className={`product-card bg-white rounded-2xl h-[180px] w-[170px] sm:h-[220px] sm:w-[180px] md:h-[250px] md:w-[220px] lg:h-[280px] lg:w-[250px] xl:h-[300px] xl:w-[280px] flex flex-col justify-center items-center p-4 border-gray-200 border-2 hover:border-gray-400 shadow-lg hover:shadow-xl ${
    isHovered ? 'hovered' : ''
  }`}


        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.3s ease',
          zIndex: zIndex,
          animation: `${animation} 1s ease-out forwards`,
          animationPlayState: 'paused',
          opacity: 0, // Start hidden
        }}
      >
        <div>
          <img src={image} alt={title} className="w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px]" />
        </div>
        <div
  className="text-center sm:py-2 text-[14px] sm:text-[18px] lg:text-[20px] xl:text-[22px] font-semibold text-transparent bg-clip-text"
  style={{
    backgroundImage: 'linear-gradient(to right, #1e3a8a, #2563eb, #1d4ed8)', // Dark blue gradient
  }}
>
  {title}
</div>

      </div>
    </Link>
  );
});
