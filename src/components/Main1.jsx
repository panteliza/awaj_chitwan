import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import behinstheear from '../assets/behindtheear.jpeg'; 
import completelyincanal from '../assets/completelyincanal.jpeg';
import invisibleinthecanal from '../assets/invisibleinthecanal.jpeg';
import intheear from '../assets/intheear.jpeg';
import receiverincanal from '../assets/receiverinthecanal.jpeg';

export default function App() {
  const [isHovered, setIsHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setIsHovered(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const products = [
    { image: behinstheear, title: 'Behind-The-Ear', link: '/hearing-aid-behind-the-ear' },
    { image: completelyincanal, title: 'Completely-In-Canal', link: '/hearing-aid-completely-in-canal' },
    { image: invisibleinthecanal, title: 'Invisible-In-The-Canal', link: '/hearing-aid-invisible-in-the-canal' },
    { image: intheear, title: 'In-The-Ear', link: '/hearing-aid-in-the-ear' },
    { image: receiverincanal, title: 'Receiver-In-Canal', link: '/hearing-aid-receiver-in-canal' }
  ];

  return (
    <div className="px-10  relative z-0 flex flex-col justify-center items-center py-16">
      <div className='flex justify-center font-bold sm:text-[30px] text-[25px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] text-red-500'>Our Products</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 justify-center gap-8 2xl:gap-20">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            isHovered={isHovered === index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            to={product.link}
          />
        ))}
      </div>
    </div>
  );
}

const ProductCard = ({ image, title, isHovered, onMouseEnter, onMouseLeave, to }) => {
  const scale = isHovered ? 1 : 0.9;
  const zIndex = isHovered ? 1 : 'auto';

  return (
    <Link to={to} className="no-underline"> 
      <div
        className={`bg-white rounded-2xl h-[280px] w-[270px] 2xl:h-[300px] 2xl:w-[320px] md:w-[300px] lg:w-[300px] flex flex-col justify-center items-center p-5 border border-red-200 hover:border-gray-400 ${isHovered ? 'hover:scale-100' : 'hover:scale-90'}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{ transform: `scale(${scale})`, transition: 'transform 0.3s ease', zIndex: zIndex }}
      >
        <div>
          <img src={image} alt={title} className='w-[180px] h-[180px] md:w-[220px] md:h-[220px] lg:w-[200px] lg:h-[200px]' />
        </div>
        <div className='text-center sm:py-2 text-[22px] lg:text-[25px]'>{title}</div>
      </div>
    </Link>
  );
}
