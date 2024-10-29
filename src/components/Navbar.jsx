import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom'; 
import abc from '../assets/butterfly.jpg';
import { BsFacebook, BsGoogle, BsInstagram } from 'react-icons/bs';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { MdHearing } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const[show,setshow]=useState(false)
  const navigate = useNavigate(); // Get the navigate function from useNavigate


  function showIt(){
    setshow(!show)
  }

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to handle the click on "All Products" link
  const handleAllProductsClick = () => {
    setShowDropdown(false); // Close the dropdown
    // Programmatically navigate to the '/categories' route
    navigate('/');
  };

  const handleSanitaryPadsClick = () => {
    setShowDropdown(false); 
   
    navigate('/sanitary-pads');
  };

  const handleAdultDiapersClick = () => {
    setShowDropdown(false); 
   
    navigate('/adult-diaper');
  };

  const handleBabyDiapersClick = () => {
    setShowDropdown(false); 
   
    navigate('/baby-diaper');
  };


  return (
   
  
  <div className="flex items-center justify-between w-full gap-10 lg:px-[40px] bg-[#F4F4F4] pt-[6px] pb-[6px] px-[50px]  ">
   

   <Link to='/'>
        <div className="transition-transform duration-200 transform hover:scale-125 cursor-pointer md:hidden lg:block">
          
  <MdHearing className="h-[50px] w-[50px] lg:h-[70px] lg:w-[70px] 2xl:h-[150px] 2xl:w-[150px] rounded-full md:hidden lg:block text-red-600" />
</div>
</Link>



        <div className=" hidden lg:flex text-[20px] 2xl:text-[40px] gap-16 text-red-500 cursor-pointer items-center">
        <Link to='/about'>
          <div className="hover:text-gray-400 hover:bg-red-200 px-2 py-2 rounded-md">HOME</div>
          </Link> 
          <div
            className="relative flex items-center gap-2 hover:text-gray-400 hover:bg-red-200 px-2 py-2 rounded-md "
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <div className="">SERVICES</div>
            <div className="text-[15px] font-bold 2xl:text-[30px]">
              {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
            </div>
            {showDropdown && (
              <div className="absolute top-12 2xl:top-20 text-[15px] 2xl:text-[30px]  bg-white pl-3 2xl:pl-5 gap-7 z-[1] rounded shadow w-[160px] 2xl:w-[280px]">
                <div className="flex flex-col gap-3 pt-2 pb-4   ">
                  {/* Use the handleAllProductsClick function when clicking on the link */}
                  <Link to='/'>
                  <div className='hover:text-[#ec7676]' onClick={handleAllProductsClick}>Hearing Tests</div>
                  </Link>
                  <Link to='/sanitary-pads'>
                  <div className="hover:text-[#ec7676]"  onClick={handleSanitaryPadsClick}>Speech And Language Therapy</div>
                  </Link>
                  <Link to='/adult-diaper'>
                  <div className="hover:text-[#ec7676]" onClick={handleAdultDiapersClick}>Hearing Aid Trial and Fittings</div>
                  </Link>
                 
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
{/* sidebar */}
{show && (
  <div className="lg:hidden flex flex-col w-[300px] top-0 fixed h-full left-0 gap-2 bg-[#F4F4F4] z-[1]">
    <div className="flex justify-end pr-4 py-3">
      <MdOutlineClose className="text-[30px]" onClick={showIt} />
    </div>
    <div className="flex gap-2">
      <div className="flex justify-center items-center w-[80px] pl-5px">
        <img src={abc} alt="logo" className="h-[50px] w-[50px] rounded-full" />
      </div>
      <div className="font-semibold text-lg">Aawaz Hearing And Speech Care Center</div>
    </div>

    {/* Services Dropdown */}
    <div
      className={`border border-gray-400 relative flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2 cursor-pointer ${showDropdown ? 'mb-[200px]' : 'mb-[0px]'}`}
      onClick={toggleDropdown} // Changed to onClick for toggle functionality
    >
      <div>SERVICES</div>
      <div className="text-[15px] font-bold 2xl:text-[30px]">
        {showDropdown ? <AiOutlineUp /> : <AiOutlineDown />}
      </div>
      {showDropdown && (
        <div className="absolute top-12 flex flex-col gap-3 pt-2 pb-4">
          <div className="border border-gray-400 flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2" onClick={handleAllProductsClick}>
            Hearing Tests
          </div>
          <div className="border border-gray-400 flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2" onClick={handleSanitaryPadsClick}>
            Speech And Language Therapy
          </div>
          <div className="border border-gray-400 flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2" onClick={handleAdultDiapersClick}>
            Hearing Aid Trial and Fittings
          </div>
        </div>
      )}
    </div>

    {/* Additional Links */}
    <Link to='/about'>
      <div className={`border border-gray-400 flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2 ${showDropdown ? 'mt-[25px]' : 'mt-[0px]'}`}>
        <div>About</div>
      </div>
    </Link>

    <Link to='/media'>
      <div className='border border-gray-400 flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2'>
        <div>Media</div>
      </div>
    </Link>

    <Link to='/contact'>
      <div className='border border-gray-400 flex gap-2 text-gray-600 items-center w-[250px] justify-center py-2'>
        <div>Contact</div>
      </div>
    </Link>

    <div className='flex ml-[100px] gap-2 text-red-400 cursor-pointer text-[25px]'>
      <BsFacebook className="hover:text-red-600" />
      <BsInstagram className="hover:text-red-600" />
    </div>

    <Link to='/contact'>
      <div className='bg-red-400 rounded-3xl mt-[80px] px-12 py-2 text-white text-[18px] w-[260px]'>
        <div>Dealership Enquiry</div>
      </div>
    </Link>
  </div>
)}






<div className='lg:hidden text-gray-500    '>
  <HiOutlineMenuAlt2 className=' text-[40px] ' onClick={showIt}/>
</div>

<div className="transition-transform duration-200 transform hover:scale-125 cursor-pointer  hidden md:block lg:hidden">
  
<img src={abc} alt="logo" className="h-[60px] w-[60px] rounded-full" />

</div>

 <div className=" hidden md:flex md:text-[30px] 2xl:text-[42px] gap-2 text-red-400 cursor-pointer">
          <BsFacebook className="hover:text-red-600" />
          <BsGoogle className="hover:text-red-600" />
        </div>
     </div>
   
  
  );
};

export default Navbar;