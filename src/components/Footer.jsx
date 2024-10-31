import React, { useEffect, useRef } from 'react';
import aawazLogo from '../assets/aawaz.jpeg';
import { BsFacebook, BsGoogle, BsWhatsapp,BsTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationOn, MdHearing } from "react-icons/md";
import { Link } from 'react-router-dom';
import footerbgimage from '../assets/footerpic.jpg';

const Footer = () => {
  const navItems1 = [
    { icon: <MdHearing className='text-white' />, link: "/", label: "Home" },
    { icon: <MdHearing className='text-white' />, link: "/about", label: "About" },
    { icon: <MdHearing className='text-white' />, link: "/contact", label: "Contact" }
  ];

  const navItems2 = [
    { icon: <MdHearing className='text-white' />, link: "/hearing-tests", label: "Hearing Tests And Assessments" },
    { icon: <MdHearing className='text-white' />, link: "/speech-and-language-therapy", label: "Speech And Language Therapy" },
    { icon: <MdHearing className='text-white' />, link: "/hearing-aid-trial-and-fittings", label: "Hearing Aid Trial And Fittings" }
  ];

  const contactItems = [
    { icon: <BsTelephoneFill />, link: "tel:+9779855060867", label: "977 9845192771" },
    { icon: <HiOutlineMail />, link: "mailto:aawazclinic42@gmail.com", label: "aawazclinic42@gmail.com" },
    { icon: <MdLocationOn className='text-white' />, label: "Bharatpur-10, Hospital Road Chitwan" }
  ];

  const footerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
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

    if (footerRef.current) observer.observe(footerRef.current);

    return () => {
      if (footerRef.current) observer.unobserve(footerRef.current);
    };
  }, []);

  return (
    <div
      className='relative'
      style={{
        backgroundImage: `url(${footerbgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Light red overlay */}
      <div className="absolute inset-0 bg-red-600 opacity-30 z-0"></div>

      <div
        ref={footerRef}
        className='flex flex-col gap-4 py-8 px-4 sm:px-7 md:flex-row justify-center items-center md:gap-16 lg:gap-24 xl:gap-32 relative z-10'
        style={{
          animation: 'fadeIn 0.6s ease forwards',
          animationPlayState: 'paused',
        }}
      >

        <div className="flex flex-col items-center">
          <Link to="/">
            <img src={aawazLogo} alt="Aawaz Logo" className="h-[63px] w-[63px] rounded-full" />
          </Link>
          <div className="font-semibold text-lg text-white text-center">Aawaz Hearing And Speech Care Center</div>
          <div className='flex gap-2 text-white text-[25px]'>
            <a href="https://www.facebook.com/aawazhearing/" className="text-blue-800 hover:text-blue-600 ">
              <BsFacebook />
            </a>
            <a href="https://www.google.com/maps/dir//Hospital+Rd+10,+Bharatpur+44200" className="text-yellow-800 hover:text-yellow-600  ">
              <BsGoogle />
            </a>
            <a href="https://wa.me/9779845192771" className="text-green-800 hover:text-green-600 font-bold">
              <BsWhatsapp />
            </a>
          </div>
        </div>

        <NavSection title="Quick Links" items={navItems1} />
        <NavSection title="Services" items={navItems2} />

        <div className='flex flex-col items-center font-semibold text-[18px] gap-2'>
          <div className="font-bold text-[20px] text-white text-center">Aawaz Hearing And Speech Care Center</div>
          {contactItems.map((item, index) => (
            <ContactItem key={index} icon={item.icon} link={item.link} label={item.label} />
          ))}
        </div>
      </div>

      <div className='text-center py-3 font-semibold text-white bg-red-600'>&copy; 2024 Aawaz Hearing And Speech Care Center. All rights reserved.</div>

      {/* Inline CSS for custom animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const NavSection = ({ title, items }) => (
  <div className='flex flex-col items-center font-semibold text-[18px] md:text-[15px] gap-5'>
    {items.map((item, index) => (
      <NavItem key={index} icon={item.icon} link={item.link} label={item.label} />
    ))}
  </div>
);

const NavItem = ({ icon, link, label }) => (
  <div className='flex gap-2 items-center'>
    {icon}
    <Link to={link} className='text-white hover:text-gray-700'>{label}</Link>
  </div>
);

const ContactItem = ({ icon, link, label }) => (
  <div className='flex gap-2 items-center text-white hover:text-gray-400'>
    {icon}
    {link ? <a href={link}>{label}</a> : <span>{label}</span>}
  </div>
);

export default Footer;
