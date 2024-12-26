import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import img from "../assets/Helix.png"
function Servise() {
  return (
    <div className='w-full relative px-5 sm:px-0 text-white'>


        <div className='container flex items-center justify-between relative z-50 py-12 sm:py-20'>

            <div className=' flex flex-col gap-5 md:gap-14'>

                <p className='text-sm font-medium md:text-2xl max-w-[494px]'>COMMUNITY-OWNED AND OPERATED</p>

                <h1 className='text-[35px] sm:text-[45px] md:text-[55px] lg:text-[65px] xl:text-[90px] max-w-[750px] font-extrabold'>Enter a Universe of Connected Services.</h1>

                <h1 className='relative md:hidden font-extrabold text-[35px] sm:text-[60px]  text-center'>265+ <span className='absolute left-1/2 -bottom-1 font-normal text-[10px] sm:text-xl md:text-2xl xl:text-[30px]'>Apps & services</span></h1>
                 

                <p className=' max-w-[732px] lg:leading-[42px] text-[12px] sm:text-2xl lg:text-[33px]'>Cronos apps and services connect using IBC, 
                    the Inter-Blockchain Communication protocol. 
                    This innovation enables you to freely exchange assets and data across sovereign. 
                </p>

                <h1 className='relative md:hidden font-extrabold text-[35px] sm:text-[60px]  text-center'>$63B+ <span className='absolute left-1/2 -bottom-1 font-normal text-[10px] sm:text-xl md:text-2xl xl:text-[30px]'>Digital assets </span></h1>
                
                <div className='flex items-center gap-8'>

                    <button className='px-14 py-3 bg-white/50 text-[16px] font-bold text-black md:text-xl hover:bg-blueee-0 duration-300 rounded'>Learn</button>

                    <a href='#' className='flex gap-3 items-center text-[16px] sm:text-xl font-bold hover:text-blueee-0 cursor-pointer duration-300'>Explore Tokens <FaAngleRight /></a>

                </div>
            </div>

            <div className='hidden md:flex flex-col items-end justify-evenly min-h-[467px] md:min-h-[767px]'>

                <h1 className='relative font-extrabold text-[45px] sm:text-[60px] md:text-[70px] lg:text-[90px] xl:text-[117px]'>265+ <span className='absolute right-0 -bottom-1 font-normal text-lg sm:text-xl md:text-2xl xl:text-[30px]'>Apps & services</span></h1>

                <h1 className='relative font-extrabold text-[45px] sm:text-[60px] md:text-[70px] lg:text-[90px] xl:text-[117px]'>$63B+ <span className='absolute right-0 -bottom-1 font-normal text-lg sm:text-xl md:text-2xl xl:text-[30px]'>Digital assets </span></h1>

            </div>


        </div>
        <img src={img} className='absolute left-0 top-36 h-[150px] md:h-[767px] ' alt="" />

    </div>
  )
}

export default Servise