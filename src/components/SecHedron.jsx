import React from 'react'
import img from "../assets/image5.png"
import { FaAngleRight } from 'react-icons/fa'

function SecHedron() {
  return (
    <div className='container flex flex-col md:flex-row items-center gap-6 md:gap-10  px-5 md:px-1 py-6 md:py-20 text-white '>

        <img src={img} alt="" />

        <div className='flex flex-col max-w-[580px] gap-3 md:gap-6'>

            <h1 className='font-bold text-3xl md:text-5xl lg:text-7xl xl:text-[90px] text-end'>
                Secured by 
                the Hedron.
            </h1>

            <p className='text-xl sm:text-2xl md:text-3xl lg:text-[33px] text-end'>
                In return for securing the services on 
                the Cronos Hub, transaction fees 
                and staking rewards are distributed 
                to HEDRON stakers.
            </p>

            <div className='flex justify-end gap-6'>

                <a href="#">
                    <button className='text-sm md:text-lg lg:text-xl px-6 py-2 text-black bg-white/50 hover:bg-white/30 rounded duration-300 lg:px-10 lg:py-4'>
                    Start Staking 
                    </button>
                </a>

                <a href="#" className='flex items-center gap-3 text-sm sm:text-lg lg:text-xl duration-300 hover:text-blueee-0'>
                Learn more  <FaAngleRight />
                </a>

            </div>

        </div>

    </div>
  )
}

export default SecHedron