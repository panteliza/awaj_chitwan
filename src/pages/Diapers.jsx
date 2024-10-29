// import React from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import diaperpic from '../assets/baby diaper.png';
// import abc from '../assets/IMG-4762.jpg'
// import cba from '../assets/baby.PNG';

// const Feature = ({ icon, text }) => (
//   <div className='flex items-center'>
//     <div>
//       <img src={icon} className='h-[40px]' alt="Feature Icon" />
//     </div>
//     <div className='ml-2'>
//       {text}
//     </div>
//   </div>
// );

// const Section = ({ title, images, features }) => (
//   <div className='border hover:border-purple-500 bg-pink-200 hover:bg-[#e4b3cb] border-pink-400 gap-7 flex flex-col lg:flex-row rounded-md px-9 py-7'>
//     {/* left side */}
//     <div className='flex flex-col justify-center w-full lg:w-[50%] lg:pr-5 '>
//       <div className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-700 to-pink-700 text-center py-2 text-2xl font-semibold'>
//         {title}
//       </div>
//       {features.map((feature, index) => (
//         <Feature key={index} icon={diaperpic} text={feature} />
//       ))}
//     </div>
//     {/* left side */}

//     {/* right side */}
//     <div className='flex justify-center items-center px-5 gap-5 lg:w-[50%]'>
//       {images.map((image, index) => (
//         <img key={index} src={image} className='md:h-[240px] md:w-[240px] h-[150px]
//         w-[150px] transition-transform duration-200 transform hover:scale-125 ' alt={`Image ${index}`} />
//       ))}
//     </div>
//     {/* right side */}
//   </div>
// );

// const Pads = () => {
  
//   const padFeaturesSmall = [
//     "SIZE: Small", 
//     "UV sterilized 100% germs protection",
//     "Soft topsheet for extra comfort",
//     "No harmful perfume or color",
//     "Super High Absorbent Japanese Sumitomo Gel",
//     "Protection Against Heavy Flow",
//     "Additional Feature 1 for Small",
//     "Additional Feature 2 for Small",
    
//   ];

  
//   const padFeaturesMedium = [
//     "SIZE: Medium", 
//     "Super dry baby pants",
//     "Up to 12 hours absorption",
//     "Silky soft & breathable material layer",
//     "Pant style diapers",
//     "Leakproof",
//     "Anti rashes",
   
//   ];

  
//   const padFeaturesLarge = [
//     "SIZE: Large", 
//     "Up to 12 hours of absorption",
//     "Leakproof",
//     "Anti rashes",
//     "European Standard",
//     "Premium Quality",
//     "Ultra Diaper double leakguards",
//     "Absorbs 40X its weight",
//     "Bubble Topsheet",
//     "Wetness Indicator",
//     "Made without: Chlorine, Latex, Fragrance, Parabens",
   
//   ];

//   return (
//     <div>
//       <Navbar />
//       <div className=''>
//         <img
//           src="https://images.ctfassets.net/9wtva4vhlgxb/4ctwud75d425G2fKSt2mr/e484856bf2245b0db94163a5ba65756e/Leaking_Diaper_720________432.jpg?fm=webp&q=70"
//           className='w-full h-[450px] object-cover'
//           alt="Sanitary Pads"
//         />
//       </div>
//       <div className='font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 text-center px-6 lg:px-28 py-7'>
//         Explore baby diapers that keep your little one dry and comfy.
//       </div>
//       <div className='w-full flex flex-col gap-6 justify-center py-6 px-4 lg:px-32'>
//         {/* Section for Small-sized diaper */}
//         <Section
//           title="Baby Boss Diaper Small"
//           images={[abc, cba]}
//           features={padFeaturesSmall}
//         />

//         {/* Section for Medium-sized diaper */}
//         <Section
//           title="Baby Boss Diaper Medium"
//           images={[abc, cba]}
//           features={padFeaturesMedium} 
//         />

//         {/* Section for Large-sized diaper */}
//         <Section
//           title="Baby Boss Diaper Large"
//           images={[abc, cba]}
//           features={padFeaturesLarge} 
//         />
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default Pads;
