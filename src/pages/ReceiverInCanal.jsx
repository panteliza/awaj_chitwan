// src/components/ReceiverInCanal.js
import React from 'react';
import receiverInCanalImg from '../assets/receiverinthecanal.jpeg'; // Update with correct path

const ReceiverInCanal = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <h2 className="text-center font-bold text-[28px] md:text-[36px] lg:text-[42px] text-red-600 mb-8">
          Receiver In Canal (RIC)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <img
              src={receiverInCanalImg}
              alt="Receiver in Canal Hearing Aid"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right - Features */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Features:
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-3">
              <li>
                Compact and discreet design, ideal for those seeking less
                visibility.
              </li>
              <li>
                Provides superior sound quality, especially for high-frequency
                sounds.
              </li>
              <li>
                Suitable for individuals with mild to severe hearing loss.
              </li>
              <li>
                Lightweight and comfortable, minimizing ear fatigue during long
                hours of wear.
              </li>
              <li>Battery options range from standard to rechargeable types.</li>
            </ul>

            {/* Call to Action */}
            <div className="mt-6">
              <a
                href="#order"
                className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
              >
                How to Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceiverInCanal;
