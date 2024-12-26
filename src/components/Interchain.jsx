import React from 'react'
import img from "../assets/image3.png"
import InterchainBox from './InterchainBox'
import { FaAngleRight } from 'react-icons/fa'
function Interchain() {
  return (
    <div className='container flex flex-col text-white  lg:mt-40'>

        <div className='relative'>
          <div className='relative flex flex-col items-center gap-10 z-10'>


            <p className='text-center text-lg md:text-xl lg:text-2xl font-medium max-w-[330px] leading-5 md:leading-6 lg:leading-7'>ENTER THE CRONOS HUB</p>

            <h1 className='max-w-[739px] text-center font-bold text-4xl sm:text-[45px] md:text-[60px] lg:text-[80px] xl:text-[90px] leading-[40px] sm:leading-[54px] md:leading-[70px] lg:leading-[95px] xl:leading-[115px]'>
                The Heart of the
                Interchain.
            </h1>

            <p className='text-xl md:text-2xl lg:text-[33px] text-center max-w-[700px] leading-6 md:leading-7 lg:leading-10'>
                Serving as the economic center of Cronos, 
                the Cronos Hub is a blockchain that provides 
                vital services to the Interchain
            </p>
          </div>
            <img src={img} className='absolute top-0 right-1/2 sm:w-[350px] sm:-top-7 sm:right-1/3 lg:w-[600px] lg:right-1/4 lg:-top-28 xl:-top-52 xl:left-0 xl:translate-x-80 w-[250px] xl:w-[840px]' alt="" />
        </div>

        <div className='relative grid grid-cols-1 lg:grid-cols-2 justify-center items-center place-items-center '>

          <InterchainBox/>
          <InterchainBox/>
          <InterchainBox/>
          <InterchainBox/>
          <InterchainBox/>
          <InterchainBox/>
                
        </div>
        
        <div className='mt-5 md:mt-10 flex justify-center lg:justify-start lg:px-12  xl:px-28 2xl:px-44'>
          <a href="#">
            <button className='text-black font-medium hover:bg-white/30 rounded duration-300 py-2 md:py-4 px-5 md:px-10 bg-white/50 flex gap-3 items-center text-sm md:text-lg xl::text-xl'>Cosmos Hub  <FaAngleRight /></button>
          </a>
        </div>

    </div>
  )
}

export default Interchain