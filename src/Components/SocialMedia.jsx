import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { VscFilePdf } from "react-icons/vsc";

const SocialMedia = () => {
  return (
    <>
      <div className="w-16 hidden lg:flex flex-col absolute mt-24 ml-[1250px] text-3xl justify-around dark:text-[#454545]  ">
        <div className="group relative w-fit">
          <a
            href="https://github.com/sonusinghh7"
            target="_blank"
            className="flex gap-2 border-gray-00 border-2 rounded-md p-2 w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:dark:text-white text-gray-400 dark:text-gray-600 hover:text-black hover:dark:white border-gray-800 dark:border-gray-100 transition-all duration-200 ease-in-out"
          >
            <FaGithub />
            <p className="text-[20px] md:hidden">GitHub</p>
          </a>
          <span className="absolute md:block hidden left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
            GitHub
          </span>
        </div>
        <div className="group relative w-fit">
          <a
            href="https://www.linkedin.com/in/sonusinghh7"
            target="_blank"
            className="flex gap-2 border-gray-00 border-2 rounded-md p-2 w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:dark:text-white text-gray-400 hover:text-black dark:text-gray-600 hover:border-black hover:dark:white border-gray-800 dark:border-gray-100 transition-all duration-200 ease-in-out"
          >
            <FaLinkedin />
            <p className="text-[20px] md:hidden">LinkedIn</p>
          </a>
          <span className="absolute md:block hidden left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
            LinkedIn
          </span>
        </div>
        {/* Instagram */}{" "}
        <div className="group relative w-fit">
          <a
            href="https://www.instagram.com/sonu.singhh7"
            target="_blank"
            className="flex gap-2 border-gray-00 border-2 rounded-md p-2 w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:dark:text-white text-gray-400 hover:text-black dark:text-gray-600 hover:border-black hover:dark:white border-gray-800 dark:border-gray-100 transition-all duration-200 ease-in-out"
          >
            <FaInstagram />
            <p className="text-[20px] md:hidden">Instagram</p>
          </a>
          <span className="absolute md:block hidden left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
            Instagram
          </span>
        </div>
        <div className="group relative w-fit">
          <a
            href="https://www.facebook.com/SONNNUSINGH"
            target="_blank"
            className="flex gap-2 border-gray-00 border-2 rounded-md p-2 w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:dark:text-white text-gray-400 hover:text-black dark:text-gray-600 hover:border-black hover:dark:white border-gray-800 dark:border-gray-100 transition-all duration-200 ease-in-out"
          >
            <FaFacebookSquare />
            <p className="text-[20px] md:hidden">Facebook</p>
          </a>
          <span className="absolute md:block hidden left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
            Facebook
          </span>
        </div>
        <div className="group relative w-fit">
          <a
            href="https://x.com/DoubleAce_7"
            target="_blank"
            className="flex gap-2 border-gray-00 border-2 rounded-md p-2 w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:dark:text-white text-gray-400 hover:text-black hover:border-black dark:text-gray-600 hover:dark:white border-gray-800 dark:border-gray-100 transition-all duration-200 ease-in-out"
          >
            <FaXTwitter />
            <p className="text-[20px] md:hidden">X</p>
          </a>
          <span className="absolute md:block hidden left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
            Twitter (X)
          </span>
        </div>
        <div className="group relative w-fit">
          <a
            href="mailto:info7sonu@gmail.com"
            target="_blank"
            className="flex gap-2 border-gray-00 border-2 rounded-md p-2 w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:dark:text-white text-gray-400 hover:text-black hover:border-black dark:text-gray-600 hover:dark:white border-gray-800 transition-all duration-200 ease-in-out dark:border-white hover:dark:border-white"
          >
            <IoIosMail />
            <p className="text-[20px] md:hidden">Send a mail</p>
          </a>
          <span className="absolute md:block hidden left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
            Send me a mail
          </span>
        </div>
        <div className="group relative w-fit">
          <a
            href="/SonuResume.pdf"
            target="_blank"
            className="flex gap-2 border-gray-00 border-2 rounded-md p-2 w-70 h-12 items-center md:border-none md:h-10 md:items-center md:justify-center md:w-10 hover:border-black text-gray-400 hover:text-black hover:dark:text-white border-gray-800 dark:text-gray-600 transition-all duration-200 ease-in-out dark:border-white hover:dark:border-white"
          >
            <VscFilePdf />
            <p className="text-[20px] md:hidden">Download Resume</p>
          </a>
          <span className="absolute md:block hidden left-full ml-2 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
            Download my resume
          </span>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;
