import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import padpic from '../assets/padpic.png';
import pblue from '../assets/bluepad-removebg-preview.png';
import pads from '../assets/IMG-6926.jpg';
import bluep from '../assets/one.jpg';
import redp from '../assets/red_pad-removebg-preview.png';
import pred from '../assets/two.jpg';
import pyellow from '../assets/IMG-5488__1_-removebg-preview.png';
import yellowp from '../assets/three.jpg';


const Feature = ({ icon, text }) => (
  <div className='flex items-center'>
    <div>
      {' '}
      <img src={icon} className='h-[50px] ' alt="Feature Icon" />

    </div>
    <div className='ml-2'>
      {text}
    </div>
  </div>
);

const Section = ({ title, images, features }) => (
  <div className='border hover:border-purple-500 bg-pink-200 hover:bg-[#e4b3cb] border-pink-400 gap-7 flex flex-col md:flex-row rounded-md px-6 py-7'>
    {/* left side */}
    <div className='flex flex-col justify-center w-full md:w-1/2 '>
      <div className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-700 to-pink-700 text-center py-2 text-xl sm:text-2xl font-semibold'>
        {title}
      </div>
      {features.map((feature, index) => (
        <Feature key={index} icon={padpic} text={feature} />
      ))}
    </div>
    {/* left side */}

    {/* right side */}
    <div className='flex justify-center items-center gap-5  '>
      {images.map((image, index) => (
        <img key={index} src={image} className='h-[150px] w-[180px] transition-transform duration-200 transform hover:scale-125 ' alt={`Image ${index}`} />
      ))}
    </div>
    {/* right side */}
  </div>
);

const Pads = () => {
  const padFeatures = [
    "SIZE: 330 MM",
    "UV sterilized 100% germs protection",
    "Soft topsheet for extra comfort",
    "No harmful perfume or color",
    "Super High Absorbent Japanese Sumitomo Gel",
    "Protection Against Heavy Flow"
  ];

  const padFeatures280MM = [
    "SIZE: 280 MM", // Add size 280 MM
    ...padFeatures.slice(1)
  ];

  return (
    <div>
      <Navbar />
      <div className=''>
        <img
          src={pads}
          className='w-full h-[500px] object-cover'
          alt="Sanitary Pads"
        />
      </div>
      <div className='font-extrabold text-3xl sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-center px-6 py-7'>
        Discover a Wide Range of Daily Sanitary Pads.
      </div>
      <div className='w-full flex flex-col gap-6 justify-center py-6 px-4 sm:px-32 '>
        <Section
          title="Ultra Premium Comfort Nights"
          images={[bluep, pblue]}
          features={padFeatures}
        />
        <Section
          title="Long Lasting Ultra Protection Super Active"
          images={[yellowp, pyellow]}
          features={padFeatures}
        />
        <Section
          title="Size 280 MM Pads"
          images={[pred,redp]} 
          features={padFeatures280MM}
        />
       
      </div>
      <Footer/>
    </div>
  );
};

export default Pads;
