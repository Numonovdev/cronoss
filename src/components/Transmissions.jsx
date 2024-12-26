import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function Transmissions() {
  return (
    <div className='px-5 md:px-0 gap-7 flex flex-col justify-evenly items-center text-white container py-7 md:py-24 md:flex-row md:gap-10 '>

        <div className='flex flex-col gap-7'>
            <h1 className='text-4xl md:text-5xl font-bold'>
                Receive transmissions
            </h1>
            <a href="" className='hover:text-blueee-0 duration-300 flex items-center text-xl sm:text-2xl md:text-[30px]'>
            Unsubscribe at any time. Privacy policy <GoArrowUpRight />
            </a>
        </div>

        <input type="email" placeholder='Your Email' className='outline-none rounded py-5 px-6 md:px-10 text-xl md:text-[27px] bg-white/10'/>

    </div>
  )
}

export default Transmissions