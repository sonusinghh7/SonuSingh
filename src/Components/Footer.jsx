import React from 'react'
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className='bg-gray-300 dark:bg-[#000000] text-black dark:text-white py-1 px-8 h-20 w-full flex items-center justify-between m-0 cursor-default'>

      <p className='flex items-center text-sm lg:text-base'>
        © Made with
        <svg className='mx-2 ' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
          <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg> 
          by <span className='font-custom ml-1 text-sm mt-3 rotate-[-12deg]'>Sonu</span></p>

      <div className='flex items-center space-x-2 text-sm lg:text-base cursor-pointer'>
        <span>Built with</span> <FaReact className='text-lg lg:text-2xl' /> <RiTailwindCssFill className='text-lg lg:text-2xl' /> <span className='hidden lg:flex text-sm text-gray-600 font-extrabold'>(V 2.1.0)</span> </div>

    </div>
  );
}

export default Footer;
