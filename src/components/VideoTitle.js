import React, { useState } from 'react'
const VideoTitle = ({title,overview}) => {
  const first100char = overview?.substring(0,250);
  const firstfullstop = first100char?.indexOf('.');
  const updatedoverview = overview?.substring(0, firstfullstop + 1); 
  return (
    <div className='pt-[12%] sm:pt-[13%] sm:px-9 px-7 w-screen aspect-[20/9] md:pt-[7%] lg:px-16 absolute text-white bg-gradient-to-r from-black z-10'>
        <h1 className='TitleName pb-2 sm:pd-20 xl:pb-2 text-sm md:py-5 sm:text-2xl xl:text-3xl font-bold w-1/3'>{title}</h1>
        <p className='TitlePara hidden  py-2 md:pb-[2%] text-md xl:w-1/4 xl:block '>{updatedoverview.length>1 ?updatedoverview: first100char+'.'}</p>
        <div className='hidden md:block'>
            <button className='bg-white text-black text-md px-2 py-1 rounded-md md:p-4 md:px-12 md:text-xl font-bold text-opacity-80 md:rounded-lg'> Play</button>
            <button className='bg-gray-500 text-white px-2 py-1 rounded-md text-md md:p-4 md:px-12 md:text-xl bg-opacity-50 md:rounded-lg mx-2'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle