import React from 'react'
import { GoArrowUpRight } from 'react-icons/go'

function MeetWorld() {
  return (
    <div className='container flex justify-between items-center text-white py-32'>

        <div className='flex flex-col gap-7 max-w-[597px]'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[90px] font-bold  mt-5'>
                Meet the 
                worldwide 
                community.
            </h1>

            <p  className='text-xl sm:text-2xl md:text-[33px]'>
                Join a fast-growing community of 
                developers and innovators connected 
                all over the world, building the new 
                era of the internet.
            </p>

            <a href='#' className='flex items-center hover:text-blueee-0 max-w-[270px] duration-300 text-2xl sm:text-3xl md:text-4xl lg:text-[45px] mt-10'>
               Community <GoArrowUpRight />
            </a>
        </div>

        <div className='flex flex-col justify-between min-h-[1248px]'>

            <div className='flex flex-col gap-5'>
                <a href='#' className='flex items-center text-2xl sm:text-3xl md:text-4xl xl:text-[45px] font-bold '>
                Community Chat <GoArrowUpRight />
                </a>
                <p className='text-lg sm:text-xl md:text-2xl max-w-[516px]'>
                    Ask general questions and chat with the 
                    worldwide community on Telegram.
                </p>
            </div>

            <div className='flex flex-col gap-5'>
                <a href='#' className='flex items-center text-2xl sm:text-3xl md:text-4xl xl:text-[45px] font-bold '>
                Twitter <GoArrowUpRight />
                </a>
                <p className='text-lg sm:text-xl md:text-2xl max-w-[516px]'>
                    Follow @cronos to get the latest news 
                    and updates from across the ecosystem.
                </p>
            </div>

            <div className='flex flex-col gap-5'>
                <a href='#' className='flex items-center text-2xl sm:text-3xl md:text-4xl xl:text-[45px] font-bold '>
                Developer Chat<GoArrowUpRight />
                </a>
                <p className='text-lg sm:text-xl md:text-2xl max-w-[516px]'>
                    Have technical questions about Cronos 
                    tools? Ask a developer on the Discord.
                </p>
            </div>

            <div className='flex flex-col gap-5'>
                <a href='#' className='flex items-center text-2xl sm:text-3xl md:text-4xl xl:text-[45px] font-bold '>
                Cronos Forum<GoArrowUpRight />
                </a>
                <p className='text-lg sm:text-xl md:text-2xl max-w-[516px]'>
                Thinking about becoming a validator or interested in network matters? 
                </p>
            </div>

        </div>


    </div>
  )
}

export default MeetWorld