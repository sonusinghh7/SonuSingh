import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { VscFilePdf } from "react-icons/vsc";


const HamburgerMenu = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);

  return (
    <div className={`z-30 h-8 top-5 right-16 absolute md:hidden ${className}`}>
      <input
        type="checkbox"
        className="peer hidden"
        id="menu-toggle"
        checked={isOpen}
        onChange={toggleMenu}
        aria-label="Toggle menu"
      />
      <label htmlFor="menu-toggle" className="h-8 w-8 flex relative cursor-pointer">
        {/* first line */}
        <div
          className={`w-6 h-[3px] dark:bg-[#F8F9FA] bg-[#121212] absolute top-1 left-1 transition-all rounded-xl duration-300 origin-center ${
            isOpen ? 'rotate-45 translate-y-2' : 'rotate-0'
          }`}
        />
        {/* second line (middle) */}
        <div
          className={`h-[3px] dark:bg-[#F8F9FA] bg-[#121212] absolute top-3 left-1 transition-all rounded-xl duration-300 origin-center ${
            isOpen ? 'w-0 h-0' : 'w-6'
          }`}
        />
        {/* third line */}
        <div
          className={`w-6 h-[3px] dark:bg-[#F8F9FA] bg-[#121212] absolute top-5 left-1 transition-all rounded-xl duration-300 origin-center ${
            isOpen ? '-rotate-45 -translate-y-2' : 'rotate-0 h-0.5'
          }`}
        />
      </label>

      {/* Menu content */}
      {isOpen && (
        <div className="absolute top-16 -right-[10px] w-[85vw] max-w-sm h-[60vh] rounded-xl bg-black/10 dark:bg-white/10 backdrop-blur-xl border flex flex-col gap-2 border-white/20 text-2xl text-black dark:text-white p-6 z-20 shadow-lg overflow-y-auto ">

          <div className='flex relative gap-2 border-gray-800  dark:border-gray-100 border-2 rounded-md    w-70 h-12 items-center  hover:border-black  hover:text-white hover:dark:white hover:dark:text-black group hover:dark:bg-white hover:dark:border-white overflow-hidden transition-all duration-200 ease-in-out '>
            <div className='relative h-full  w-14 flex items-center justify-center bg-gray-400 dark:bg-white dark:text-gray-800  dark:group-hover:bg-gray-500 dark:group-hover:text-gray-200   group-hover:text-white group-hover:bg-gray-800 text-gray-200  '> <FaSearch /> </div>
            <input type="search" placeholder="Projects, Skills, or Blogs.." className=" [&::-webkit-search-cancel-button]:hidden w-full h-full  focus:outline-none placeholder:text-[16px] text-[20px] bg-transparent dark:text-gray-800  text-gray-800 hover:bg-white -ml-2 p-2 dark:bg-transparent dark:placeholder:text-gray-400 hide-clear" />
          </div>

          <a href="https://github.com/sonusinghh7" target='_blank' className='flex gap-2 border-gray-00 border-2 rounded-md p-2  w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:border-black hover:bg-black hover:text-white hover:dark:white hover:dark:text-black hover:dark:bg-white border-gray-800 dark:border-gray-100 transition-all duration-200 ease-in-out'> <FaGithub /><p className='text-[20px] md:hidden'>GitHub</p></a>
          <a href="https://www.linkedin.com/in/sonusinghh7" target='_blank' className='flex gap-2 border-gray-00 border-2 rounded-md p-2  w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:border-black hover:bg-black hover:text-white hover:dark:white hover:dark:text-black hover:dark:bg-white border-gray-800 dark:border-gray-100  transition-all duration-200 ease-in-out'> <FaLinkedin /><p className='text-[20px] md:hidden'>Linkedin</p></a>
          <a href="https://www.instagram.com/sonu.singhh7" target='_blank' className='flex gap-2 border-gray-00 border-2 rounded-md p-2  w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:border-black hover:bg-black hover:text-white hover:dark:white hover:dark:text-black hover:dark:bg-white border-gray-800 dark:border-gray-100  transition-all duration-200 ease-in-out'> <FaInstagram /><p className='text-[20px] md:hidden'>Instagram</p></a>
          <a href="https://www.facebook.com/SONNNUSINGH" target='_blank' className='flex gap-2 border-gray-00 border-2 rounded-md p-2  w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:border-black hover:bg-black hover:text-white hover:dark:white hover:dark:text-black hover:dark:bg-white border-gray-800 dark:border-gray-100  transition-all duration-200 ease-in-out'> <FaFacebookSquare /><p className='text-[20px] md:hidden'>Facebook</p></a>
          <a href="https://x.com/DoubleAce_7" target='_blank' className='flex gap-2 border-gray-00 border-2 rounded-md p-2  w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:border-black hover:bg-black hover:text-white hover:dark:white hover:dark:text-black hover:dark:bg-white  border-gray-800 dark:border-gray-100 transition-all duration-200 ease-in-out'> <FaXTwitter /><p className='text-[20px] md:hidden'>X</p></a>
          <a href="mailto:info7sonu@gmail.com" target='_blank' className='flex gap-2 border-gray-00 border-2 rounded-md p-2  w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:border-black hover:bg-black hover:text-white hover:dark:white hover:dark:text-black hover:dark:bg-white  border-gray-800  transition-all duration-200 ease-in-out dark:text-gray-800 dark:border-gray-800 hover:dark:border-white'> <IoIosMail /><p className='text-[20px] md:hidden'>Send a mail</p></a>
          <a href="../public/SonuResume.pdf" target='_blank' className='flex gap-2 border-gray-00 border-2 rounded-md p-2  w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:border-black hover:bg-black hover:text-white hover:dark:white hover:dark:text-black hover:dark:bg-white border-gray-800   transition-all duration-200 ease-in-out dark:text-gray-800 dark:border-gray-800 hover:dark:border-white '> <VscFilePdf /><p className='text-[20px] md:hidden'>Download Resume</p></a>

          
        </div>

      )}
    </div>
  );
};

export default HamburgerMenu;
