import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

function Header() {
  return (
    <div className='text-white container flex flex-col py-5 font-medium'>
        
        <div className='flex items-center justify-between sm:px-0 px-5'>
            
            <h1 className='text-lg sm:text-2xl leading-7 md:text-[26px] md:leading-8'><a href="#">CRONOS</a></h1>
            
            <ul className='md:flex gap-7 items-center hidden'>

                <li><a className='px-2 text-lg md:text-xl leading-6 hover:text-[#435DE2] duration-300' href="#learn">Learn</a></li>
                <li><a className='px-2 text-lg md:text-xl leading-6 hover:text-[#435DE2] duration-300' href="#build">Build</a></li>
                <li><a className='px-2 text-lg md:text-xl leading-6 hover:text-[#435DE2] duration-300' href="#explore">Explore</a></li>
                
            </ul>

            <a href="" >
                <button className='flex items-center text-sm sm:text-lg md:text-[26px] hover:text-[#435DE2] duration-300 gap-3'>Get CRONOS <FaAngleRight /></button>
            </a>
            
        </div>

        <div className='flex md:hidden mt-5 w-full'>
            
            <ul className='flex justify-center gap-7 sm:gap-10 w-full'>
                
                <li><a className='px-2 text-lg md:text-xl leading-6 hover:text-[#435DE2] duration-300' href="#learn">Learn</a></li>
                <li><a className='px-2 text-lg md:text-xl leading-6 hover:text-[#435DE2] duration-300' href="#build">Build</a></li>
                <li><a className='px-2 text-lg md:text-xl leading-6 hover:text-[#435DE2] duration-300' href="#explore">Explore</a></li>
                
            </ul>

        </div>

    </div>
  )
}

export default Header