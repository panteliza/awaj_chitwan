import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; 
import behinstheear from '../assets/behindtheear.jpeg'; 
import completelyincanal from '../assets/completelyincanal.jpeg';
import invisibleinthecanal from '../assets/invisibleinthecanal.jpeg';
import intheear from '../assets/intheear.jpeg';
import receiverincanal from '../assets/receiverinthecanal.jpeg';

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
    <div className="px-10 relative z-0 flex flex-col justify-center items-center py-16">
      <div className='flex justify-center font-bold sm:text-[30px] text-[25px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-red-500'>Our Products</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 justify-center gap-8 2xl:gap-20">
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
      `}</style>
    </div>
  );
}

const ProductCard = React.forwardRef(({ image, title, isHovered, onMouseEnter, onMouseLeave, to }, ref) => {
  const scale = isHovered ? 1 : 0.9;
  const zIndex = isHovered ? 1 : 'auto';

  // Alternate animations between left and right for each product card
  const animation = ref?.current?.dataset?.index % 2 === 0 ? 'fadeInLeft' : 'fadeInRight';

  return (
    <Link to={to} className="no-underline">
      <div
        ref={ref}
        className={`product-card bg-white rounded-2xl h-[280px] w-[270px] 2xl:h-[300px] 2xl:w-[320px] md:w-[300px] lg:w-[300px] flex flex-col justify-center items-center p-5 border border-red-200 hover:border-gray-400 ${
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
          <img src={image} alt={title} className='w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[200px] lg:h-[200px]' />
        </div>
        <div className='text-center sm:py-2 text-[22px] lg:text-[25px]'>{title}</div>
      </div>
    </Link>
  );
});
