// import React, { useState } from 'react';
// import pads from '../assets/awareness (2).jpg';
// import pads1 from '../assets/awareness (1).jpg';
// import { Link } from 'react-scroll';

// function Predictor() {
//   const [firstDayOfLastPeriod, setFirstDayOfLastPeriod] = useState('');
//   const [cycleLength, setCycleLength] = useState('');
//   const [occurrenceDuration, setOccurrenceDuration] = useState('');
//   const [predictedDate, setPredictedDate] = useState('');
//   const [isCalculated, setIsCalculated] = useState(false);

//   const handleCalculate = () => {
//     if (firstDayOfLastPeriod && cycleLength && occurrenceDuration) {
//       const cycleDuration = parseInt(cycleLength);
//       const occurrenceDurationValue = parseInt(occurrenceDuration);
//       const firstDate = new Date(firstDayOfLastPeriod);
//       const nextPeriodDate = new Date(
//         firstDate.getTime() +
//           cycleDuration * 24 * 60 * 60 * 1000 +
//           occurrenceDurationValue * 24 * 60 * 60 * 1000
//       );
//       const predictedDateAfterSubtraction = new Date(nextPeriodDate);
//       predictedDateAfterSubtraction.setDate(
//         predictedDateAfterSubtraction.getDate() - cycleDuration
//       ); // Subtract cycle length
//       setPredictedDate(predictedDateAfterSubtraction.toDateString());
//       setIsCalculated(true);
//     }
//   };

//   const handleReset = () => {
//     setFirstDayOfLastPeriod('');
//     setCycleLength('');
//     setOccurrenceDuration('');
//     setPredictedDate('');
//     setIsCalculated(false);
//   };

//   return (
//     <div className="flex flex-col lg:flex-row bg-[#f1b7d4] px-10 py-24 gap-5 items-center justify-center">
//       <div className="lg:flex lg:w-[50%] px-2">
//         <div className="lg:flex lg:flex-row lg:flex-wrap justify-between gap-10">
//           {/* Two Images in a Row */}
//           <div className="lg:w-[52%] mb-6">
            
//             <div>
//               <img src={pads} className="w-full h-[270px]" alt="Image 1" />
//               <div className="font-semibold text-gray-600 text-center">
//                 <Link to='breaking-barriers' spy={true} smooth={true}>
//                   <div className='hover:underline cursor-pointer'>Breaking Barriers: Embracing Open Conversations About Menstruation</div>
//                 </Link>
//               </div>
//             </div>
            
//           </div>
//           <div className="lg:w-[52%] mb-6">
//             <div>
//               <img src={pads1} className="w-full h-[280px]" alt="Image 2" />
//               <div className="font-semibold text-gray-600 text-center">
//                 <Link to='feel-good' spy={true} smooth={true}>
//                   <div className='hover:underline cursor-pointer'>Feel Good: Empower Your Cycle</div>
//                 </Link>
//               </div>
//             </div>
//           </div>
          

//         </div>
//       </div>

//       {/* Calculator Div */}
//       <div
//         className={`bg-white p-8 rounded shadow-md w-96 ${
//           isCalculated ? 'h-[555px]' : 'h-[500px]'
//         }`}
//       >
//         <h1 className="text-2xl font-semibold mb-4 text-center text-gray-500">
//           Period Predictor
//         </h1>
//         <label className="block mb-2 mt-8">Last Period Date:</label>
//         <input
//           type="date"
//           className="w-full px-3 py-2 border rounded mb-4"
//           value={firstDayOfLastPeriod}
//           onChange={(e) => setFirstDayOfLastPeriod(e.target.value)}
//         />
//         <label className="block mb-2">Average Cycle Length (in days):</label>
//         <input
//           type="number"
//           className="w-full px-3 py-2 border rounded mb-4"
//           value={cycleLength}
//           onChange={(e) => setCycleLength(e.target.value)}
//         />
//         <label className="block mb-2">Occurrence Duration (in days):</label>
//         <input
//           type="number"
//           className="w-full px-3 py-2 border rounded mb-4"
//           value={occurrenceDuration}
//           onChange={(e) => setOccurrenceDuration(e.target.value)}
//         />
//         <button
//           className="w-full bg-pink-500 text-white py-2 rounded hover-bg-pink-600"
//           onClick={handleCalculate}
//         >
//           Calculate
//         </button>
//         {predictedDate && (
//           <div className="mt-4 text-center">
//             <p>
//               Predicted Next Period Date:{' '}
//               <span className="text-pink-500">{predictedDate}</span>
//             </p>
//             <button
//               className="mt-2 w-36 bg-pink-500 hover-bg-pink-600 text-white p-2 rounded"
//               onClick={handleReset}
//             >
//               Check Another
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Predictor;
