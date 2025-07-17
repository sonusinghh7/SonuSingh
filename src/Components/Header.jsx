import React, { useEffect, useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const VerifiedIcon = ({ size = 16, color = "#1DA1F2", className = "" }) => (
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
      <div className='bg-gray-300 dark:bg-[#080808] lg:dark:bg-transparent lg:bg-transparent h-20 w-full flex absolute lg:h-80 lg:w-[280px] lg:ml-40'>
        <div className='relative h-full w-72 flex items-center lg:items-center lg:h-40 lg:mt-28 lg:w-full lg:flex-col lg:justify-center'>
          <img src="sonu.jpg" alt="sonu's image" className='h-14 w-14 ml-7 rounded-full border-2 border-gray-400 dark:border-gray-600 select-none lg:w-36 lg:h-36' />

          <div className='h-full w-3/4 flex flex-col justify-center left-2 pt-5 relative lg:justify-center lg:ml-10 lg:mt-4'>
            <div className='h-6 w-full flex items-end -mt-4 relative'>
              <p className='text-gray-800 dark:text-white text-2xl lg:text-3xl font-bold ml-1.5 select-none lg:mt-20'>Sonu Singh</p>
              <div className='ml-2 mb-2 relative flex select-none lg:scale-125'><VerifiedIcon /></div>
            </div>

            <div className='h-6 ml-3 lg:ml-2 lg:mt-4 lg:w-24 text-gray-600 dark:text-[#b4b6bb] font-mono text-sm select-none flex'>@sonusinghh7</div>

            {/* DROPDOWN TO TOGGLE DARK/LIGHT THEME */}
            <select
              value={theme === 'dark' ? 'DarkMode' : 'LightMode'}
              onChange={(e) => setTheme(e.target.value === 'DarkMode' ? 'dark' : 'light')}
              className='hidden lg:flex text-gray-600 dark:text-[#b4b6bb] bg-transparent text-[14px] ml-28 -mt-6 lg:px-2 lg:h-6 lg:w-[75px] rounded border-2 items-center border-gray-800 dark:border-[#b4b6bb]'
            >
              <option className="bg-white dark:bg-[#080808] text-black dark:text-white" value="DarkMode">
                Dark
              </option>
              <option className="bg-white dark:bg-[#080808] text-black dark:text-white" value="LightMode">
                Light
              </option>
            </select>
          </div>
        </div>

        <HamburgerMenu className="right-6 top-5 absolute scale-[1.1]" />
      </div>
    </>
  );
};

export default Header;
