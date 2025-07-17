

import React, { useState } from "react";

const Intro = () => {
  return (
    <>
      <div className="h-60 w-full mt-24 p-2 cursor-default  lg:w-[50%] lg:ml-[500px]  ">

            <h2 className="text-2xl dark:text-white text-gray-800 font-bold ml-5 h-10 w-auto lg:ml-[10px] lg:text-4xl cursor-pointer"> Hi, i'm Sonu Singh</h2>
            <p className="dark:text-white text-gray-700  h-50 w-82  px-5 ml-2.5 lg:mt-4 lg:text-xl lg:w-[600px] ">
                Bringing ideas to life in the digital world — I'm a curious web
                developer exploring modern tools and technologies. With a love for
                clean, efficient code and a passion for crafting fast, engaging web
                experiences, I turn concepts into responsive, high-performance
                websites that leave a lasting impact.
            </p>
      </div>
    </>
  );
};
export default Intro;
