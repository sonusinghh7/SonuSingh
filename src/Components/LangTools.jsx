import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io5";
import { FaReact } from "react-icons/fa";

import { FaNodeJs } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import { SiAdobephotoshop } from "react-icons/si";
import { FaFigma } from "react-icons/fa";

const LangTools = () => {
  return (
    <>
    <div className=' text-gray-700  dark:text-white  h-28 w-full mt-4 flex flex-col  ' >

        <div className=' h-1/2 w-full flex relative text-4xl items-center justify-around'> 
            <FaHtml5 className="text-[#E44D26]  dark:text-white "  />
            <IoLogoCss3 className="text-[#264de4] dark:text-white " />
            <FaJsSquare className="text-[#F0DB4F] dark:text-white " />
            <SiAdobephotoshop className="text-[#31A8FF] dark:text-white " />
            <IoLogoPython  className="text-[#3776AB] dark:text-white "/>
        </div>


        <div className='h-1/2 w-full px-10 flex relative text-4xl items-center dark:text-gray-100  justify-between'> 
          <FaNodeJs className="text-[#68A063] dark:text-white " />
          <RiTailwindCssFill className="text-[#38BDF8] dark:text-white " />
          <VscVscode className="text-[#007ACC] dark:text-white " />
          <FaReact className="text-[#61DBFB] dark:text-white "  />
          <FaFigma className="text-[#F24E1E] dark:text-white " />
        </div>
    </div>
    
    </>
  )
}

export default LangTools