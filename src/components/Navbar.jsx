import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { BsFacebook, BsGoogle,  BsWhatsapp } from 'react-icons/bs';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import aawazLogo from '../assets/aawaz.jpeg';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const showIt = () => setShow(!show);

  const handleNavigation = (path) => {
    setShowDropdown(false);
    navigate(path);
  };

  return (
    <div className="flex items-center justify-between w-full gap-10 lg:px-[40px] pt-[6px] pb-[6px] px-[50px]">
      {/* Logo */}
      <Link to='/'>
        <div className="transition-transform duration-200 transform hover:scale-125 cursor-pointer md:hidden lg:block">
          <img
            src={aawazLogo}
            alt="Aawaz Logo"
            className="h-[49px] w-[70px] lg:h-[80px] lg:w-[140px] 2xl:h-[190px] 2xl:w-[200px] rounded-full"
          />
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="hidden lg:flex text-[20px] 2xl:text-[40px] gap-16 text-red-500 cursor-pointer items-center">
        <Link to='/'>
          <div className="hover:text-gray-400 hover:bg-red-200 px-2 py-2 rounded-md">HOME</div>
        </Link>
        <div
          className="relative flex items-center gap-2 hover:text-gray-400 hover:bg-red-200 px-2 py-2 rounded-md"
          onMouseEnter={toggleDropdown}
          onMouseLeave={toggleDropdown}
        >
          <div>SERVICES</div>
          <div className="text-[15px] font-bold 2xl:text-[30px]">
            {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
          </div>
          {showDropdown && (
            <div className="absolute top-12 2xl:top-20 text-[15px] 2xl:text-[30px] bg-white pl-3 2xl:pl-5 gap-7 z-[1] rounded shadow w-[160px] 2xl:w-[280px]">
              <div className="flex flex-col gap-3 pt-2 pb-4">
                <div className="hover:text-[#ec7676]" onClick={() => handleNavigation('/hearing-tests')}>Hearing Tests</div>
                <div className="hover:text-[#ec7676]" onClick={() => handleNavigation('/speech-and-language-therapy')}>Speech And Language Therapy</div>
                <div className="hover:text-[#ec7676]" onClick={() => handleNavigation('/hearing-aid-trial-and-fittings')}>Hearing Aid Trial and Fittings</div>
              </div>
            </div>
          )}
        </div>
        <Link to='/about'>
          <div className="hover:text-gray-400 hover:bg-red-200 px-2 py-2 rounded-md">ABOUT US</div>
        </Link>
        <Link to='/contact'>
          <div className="hover:text-gray-400 hover:bg-red-200 px-2 py-2 rounded-md">CONTACT US</div>
        </Link>
      </div>

      {/* Mobile Sidebar */}
      {show && (
        <div className="lg:hidden flex flex-col w-[300px] top-0 fixed h-full left-0 gap-2 bg-[#F4F4F4] z-[1]">
          <div className="flex justify-end pr-4 py-3">
            <MdOutlineClose className="text-[30px]" onClick={showIt} />
          </div>
          <div className="flex gap-2">
            <div className="flex justify-center items-center w-[80px] pl-5px">
              <img src={aawazLogo} alt="Aawaz Logo" className="h-[45px] w-[48px] rounded-full" />
            </div>
            <div className="font-semibold text-sm text-red-600">Aawaz Hearing And Speech Care Center</div>
          </div>

          {/* Services Dropdown */}
          {/* Services Dropdown */}
<div
  className={`border border-gray-400 relative flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2 cursor-pointer`}
  onClick={toggleDropdown}
>
  <div>SERVICES</div>
  <div className="text-[15px] font-bold 2xl:text-[30px]">
    {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
  </div>
  {showDropdown && (
    <div className="absolute top-[100%] translate-y-2 flex flex-col gap-3 pt-2 pb-4 bg-white shadow-md rounded">
      <div className="border border-gray-400 flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2" onClick={() => handleNavigation('/hearing-tests')}>Hearing Tests</div>
      <div className="border border-gray-400 flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2" onClick={() => handleNavigation('/speech-and-language-therapy')}>Speech And Language Therapy</div>
      <div className="border border-gray-400 flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2" onClick={() => handleNavigation('/hearing-aid-trial-and-fittings')}>Hearing Aid Trial and Fittings</div>
    </div>
  )}
</div>

          {/* Additional Links */}
          <Link to='/about'>
            <div className="border border-gray-400 flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2">About</div>
          </Link>
          <Link to='/contact'>
            <div className="border border-gray-400 flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2">Contact</div>
          </Link>
          <div className='flex ml-[100px] gap-2 text-red-400 cursor-pointer text-[25px]'>
            <a href="https://www.facebook.com/aawazhearing/" target="_blank" rel="noopener noreferrer">
              <BsFacebook className="hover:text-red-600" />
            </a>
            <a href="https://www.google.com/maps/dir/27.705344,84.4131412/aawaz+speech+and+hearing+clinic/@27.6931908,84.4122933,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3994fbc4ab160d6f:0x3fa4c00f10d335cb!2m2!1d84.4320284!2d27.6810354?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
              <BsGoogle className="hover:text-red-600" />
            </a>
            <a href="https://wa.me/9779845192771" target="_blank" rel="noopener noreferrer">
              <BsWhatsapp className="hover:text-red-600" />
            </a>
          </div>
        </div>
      )}

      {/* Mobile Menu Icon */}
      <div className='lg:hidden text-gray-500'>
        <HiOutlineMenuAlt2 className='text-[40px]' onClick={showIt} />
      </div>

      {/* Logo in Medium Screens */}
      <div className="hidden md:block lg:hidden">
        <img src={aawazLogo} alt="Aawaz Logo" className="h-[60px] w-[60px] rounded-full" />
      </div>

      {/* Social Icons in Medium Screens */}
      <div className="hidden md:flex md:text-[30px] 2xl:text-[42px] gap-2 text-red-400 cursor-pointer">
        <a href="https://www.facebook.com/aawazhearing/" target="_blank" rel="noopener noreferrer">
          <BsFacebook className="hover:text-red-600" />
        </a>
        <a href="https://www.google.com/maps/dir/27.705344,84.4131412/aawaz+speech+and+hearing+clinic/@27.6931908,84.4122933,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3994fbc4ab160d6f:0x3fa4c00f10d335cb!2m2!1d84.4320284!2d27.6810354?entry=ttu&g_ep=EgoyMDI0MTAyNy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
          <BsGoogle className="hover:text-red-600" />
        </a>
        <a href="https://wa.me/9779845192771" target="_blank" rel="noopener noreferrer">
          <BsWhatsapp className="hover:text-red-600" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
