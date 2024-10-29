import React from 'react';
import abc from '../assets/butterfly.jpg';
import { BsFacebook, BsGoogle, BsInstagram, BsTelephoneFill } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { MdLocationOn, MdHearing } from "react-icons/md";
import { Link } from 'react-router-dom';

const Footer = () => {
  const navItems1 = [
    { icon: <MdHearing className='text-red-800' />, link: "/", label: "Home" },
    { icon: <MdHearing className='text-red-800' />, link: "/about", label: "About" },
    { icon: <MdHearing className='text-red-800' />, link: "/contact", label: "Contact" }
  ];

  const navItems2 = [
    { icon: <MdHearing className='text-red-800' />, link: "/hearing-tests", label: "Hearing Tests And Assessments" },
    { icon: <MdHearing className='text-red-800' />, link: "/speech-therapy", label: "Speech And Language Therapy" },
    { icon: <MdHearing className='text-red-800' />, link: "/hearing-trial", label: "Hearing Aid Trial And Fittings" }
  ];

  const contactItems = [
    { icon: <BsTelephoneFill />, link: "tel:+9779855060867", label: "977 9845192771" },
    { icon: <HiOutlineMail />, link: "mailto:aawazclinic42@gmail.com", label: "aawazclinic42@gmail.com" },
    { icon: <MdLocationOn className='text-white' />, label: "Bharatpur-10, Hospital Road Chitwan" }
  ];

  return (
    <div className='bg-red-400'>
      <div className='flex flex-col gap-4 py-8 px-4 sm:px-7 md:flex-row justify-center items-center md:gap-16 lg:gap-24 xl:gap-32'>
        <div className="flex flex-col items-center">
          <Link to="/">
            <MdHearing className="h-14 w-14 rounded-full text-red-700" />
          </Link>
          <div className="font-semibold text-lg text-white text-center">Aawaz Hearing And Speech Care Center</div>
          <div className='flex gap-2 text-red-700 text-[25px]'>
            <a href="https://www.facebook.com/aawazhearing/" className="hover:text-red-600">
              <BsFacebook />
            </a>
            <a href="https://www.google.com/maps/dir//Hospital+Rd+10,+Bharatpur+44200/@27.681011,84.349627,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3994fbc4ab160d6f:0x3fa4c00f10d335cb!2m2!1d84.4320284!2d27.6810354?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D" className="hover:text-red-600">
              <BsGoogle />
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
      <div className='text-center py-3 font-semibold text-white'>&copy; 2024 Aawaz Hearing And Speech Care Center. All rights reserved.</div>
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
    <Link to={link} className='text-white'>{label}</Link>
  </div>
);

const ContactItem = ({ icon, link, label }) => (
  <div className='flex gap-2 items-center text-white'>
    {icon}
    {link ? <a href={link}>{label}</a> : <span>{label}</span>}
  </div>
);

export default Footer;
