import React from 'react'
import img from "../assets/image.png"
import img1 from "../assets/image1.png"
function Main() {
  return (
    <div className='relative w-full'>
    <div className='py-0 md:py-16 container flex flex-col items-center gap-2 md:gap-8 relative text-white'>
        
        <img src={img} className='absolute top-[90px] left-1/2 -translate-x-40 sm:left-0 sm:w-[100px]  sm:translate-x-14 sm:-translate-y-20 md:w-[200px] md:top-[150px] md:translate-x-0 lg:w-[336px]  lg:-translate-x-[30px] lg:-translate-y-[150px] 2xl:translate-x-[155px] -translate-y-[50px]' alt="" />

        <p className='space-x-3 text-lg max-w-[304px] md:text-2xl font-medium text-center'>WELCOME TO CRONOS</p>
        
        <h1 className='max-w-[1100px] font-bold text-[35px] sm:text-[70px] md:text-[100px] text-center lg:text-[130px] xl:text-[153px] '>The Internet of Blockchains.</h1>

        <p className='text-center text-xl sm:text-3xl md:text-[33px] max-w-[1080px]'>Cronos is an ever expanding ecosystem of connected apps and services, built for a decentralized future.</p>

    </div>
        <img src={img1} className='hidden sm:block absolute right-0 bottom-0 sm:w-[100px] md:w-[150px] lg:w-[200px] xl:w-[300px] ' alt="" />
        </div>
  )
}

export default Main