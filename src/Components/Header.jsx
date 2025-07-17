import React from 'react'
import HamburgerMenu from './HamburgerMenu'



const Header = () => {

 
  const VerifiedIcon = ({ size = 16, color = "#1DA1F2", className = "" })  => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      width={size}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path d="M23  12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z" />
    </svg>
  );

  return (
    <>
    <div className='bg-gray-300 dark:bg-[#080808] h-20 w-full flex absolute  lg:h-full lg:w-[280px] lg:ml-40  lg:dark:bg-[#22222]'>

        <div className='relative h-full w-72 flex  items-center  lg:items-center lg:h-20 lg:mt-28 lg:w-full lg:flex-col lg:gap-8'>
          <img src="sonu.jpg" alt="sonu's image" className='h-14 w-14 ml-7 rounded-full border-2 border-gray-400 dark:border-gray-600 select-none lg:w-24 lg:h-24 lg:mr-10  ' />


        <div className='h-full w-2/3 flex flex-col justify-center left-2 pt-5  relative lg:justify-center '> 
          <div className=' h-6 w-full flex items-end -mt-4 relative'>
            <p className='text-gray-800 dark:text-white text-2xl font-bold ml-1.5  select-none lg:mt-20   '>Sonu Singh</p>     
            <div className='ml-2 mb-2 relative flex select-none'> <VerifiedIcon /> </div>
          </div>

          <div className='h-6 ml-3 text-gray-600 dark:text-[#b4b6bb] font-mono  text-sm select-none'>@sonusinghh7 </div>
        </div>
          

        </div>


         <HamburgerMenu className=" right-6 top-5 absolute scale-[1.1]"/>
        

    </div>
    
    </>
  )
}

export default Header