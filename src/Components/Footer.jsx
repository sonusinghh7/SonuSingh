import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-gray-300 dark:bg-[#000000] text-black dark:text-white py-1 px-8 h-20 w-full flex m-0 cursor-default'>

      <p className='h-12 w-2/3 p-2 flex items-center relative mt-0 '> © made with
        <svg className='m-1 ' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg> 
        by <span className='font-custom ml-2 mt-4 text-sm rotate-[-15deg]'>Sonu</span></p>

        <div className='h-6 w-6 relative left-24 py-5 flex items-center justify-center text-md cursor-pointer'>🇮🇳</div>
        



    </div>
    </>
  )
}

export default Footer