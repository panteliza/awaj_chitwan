import React from 'react';

const testimonialsData = [
  {
    id: 1,
    name: '"A life chaging Experience"',
    role: ' Sarita Shrestha',
    content: "The team at Aawaz transformed my life! After struggling with hearing issues for years, I finally feel like I’m part of conversations again. Their personalized approach and expertise made me feel so cared for. Thank you"
    ,
  },
  {
    id: 2,
    name: '“Compassionate and Professional”',
    role: 'Anuj Singh',
    content: 'From my first visit, I felt heard and respected. The speech therapy sessions for my son were interactive, fun, and effective. He has made tremendous progress, and it’s all thanks to the dedicated staff here. I’m so grateful!'
   ,
  },
  {
    id: 3,
    name: '“Remarkable Results!”',
    role: 'David D',
    content: 'Aawaz exceeded my expectations. My hearing aids are discreet and incredibly effective, and the staff is always ready to help with adjustments. I can enjoy music and conversations in a way I haven’t been able to in years. Highly recommend!'
  },
];

function TestimonialPage() {
  return (
    <div className=" pt-2 flex flex-col gap-7">
      <header className="text-[#ee4c4c] text-center">
        <h1 className="font-bold  sm:text-[30px] text-[25px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px]  ">Our Customer Says</h1>
      </header>
      <main className="container mx-auto px-4 md:px-6 ">
        <section className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonialsData.map((testimonial, index) => (

<div
  key={testimonial.id}
  className={`bg-white hover:bg-red-500 rounded-lg shadow-md p-4 md:p-6 border border-gray-300 ${
    index % 2 === 0 ? 'md:order-first' : 'md:order-last'
  } group`}
>
  <div className="mb-3">
    <div className="font-semibold text-red-600 group-hover:text-white">
      {testimonial.name}
    </div>
  </div>
  <p className="text-gray-600 group-hover:text-white italic mb-3">
    {testimonial.content}
  </p>
  <div className="text-gray-500 group-hover:text-white">{testimonial.role}</div>
</div>

            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default TestimonialPage;
