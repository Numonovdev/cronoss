import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import img from "../assets/image6.png"
import img1 from "../assets/image7.png"
import img2 from "../assets/image8.png"
import img3 from "../assets/image9.png"



function Economy() {
  return (
    <div className='px-5 md:px-0 py-7 md:py-20 flex flex-col text-white container gap-16 '>

        <div className='flex flex-col gap-16'>

            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[84px] font-bold'>
                Be Part of the Open 
                Economy of the Future.
            </h1>

            <a href="#" className='text-lg sm:text-2xl md:text-3xl lg:text-[37px] flex items-center hover:text-blueee-0 duration-300'>
            Powerful features  <FaAngleRight />
            </a>

        </div>

        <div className='flex flex-col md:flex-row gap-14'>

            <div className='px-7 py-10 bg-[#141414] rounded shadow col-span-2 md:row-span-2 flex flex-col gap-5 md:gap-10'>
                <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl text-[#A5A5A5] font-medium'>
                INTERCHAIN ACCOUNTS
                </p>

                <img src={img} alt=""  className='w-[150px] sm:w-[200px] md:w-[300px] xl:w-[466px]'/>

                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[66px] font-bold max-w-[480px] mt-5'>
                    One secure
                    account for all
                    your digital 
                    assets.
                </h1>

                <a href="#" className='duration-300 text-[16px] sm:text-lg md:text-2xl font-medium text-[#A5A5A5] hover:text-[#A5A5A5]/60'>
                COMING SOON
                </a>
            </div>

           <div className='flex flex-col gap-10 '>
            <div className='px-7 py-10 bg-[#141414] rounded shadow  flex-col md:flex-row  min-h-[550px] flex'>
                <div className='flex flex-col justify-between gap-10 h-full'>
                    
                    <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl text-[#A5A5A5] font-medium'>
                        INTERCHAIN ACCOUNTS
                    </p>

                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[66px] font-bold max-w-[350px] mt-5'>
                        Swap 
                        tokens &
                        collectibles.
                    </h1>

                    <a href="#" className='duration-300 text-[16px] sm:text-lg md:text-2xl font-medium text-[#A5A5A5] hover:text-[#A5A5A5]/60'>
                        COMING SOON
                    </a>
                </div>

                <div className='relative right-7 top-0 bg-white'>
                    {/* nima sababligin bilolmadim  */}
                    <img src={img1} alt="" className='absolute '/>
                    <img src={img2} alt="" className='absolute top-0'/>
                    <img src={img3} alt="" className='absolute top-0'/>

                </div>

            </div>

            <div className='flex flex-col md:flex-row gap-10'>
            
            <div className='px-7 py-10 bg-[#141414] col-span-1 rounded shadow flex flex-col justify-between min-h-[340px]'>
                    <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl text-[#A5A5A5] font-medium'>
                        LIQUIDITY POOL  
                    </p>

                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[66px] font-bold max-w-[290px] mt-5'>
                        Provide
                        liquidity,
                        earn
                        rewards.
                    </h1>

                    <a href="#" className='duration-300 text-[16px] sm:text-lg md:text-2xl font-medium text-[#A5A5A5] hover:text-[#A5A5A5]/60'>
                        COMING SOON
                    </a>
            </div>
            <div className='px-7 py-10 bg-[#141414] col-span-1 rounded shadow flex flex-col relative min-h-[340px]'>
                    <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl text-[#A5A5A5] font-medium'>
                        WRAPPED ETH  
                    </p>

                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[66px] font-bold max-w-[290px] mt-5'>
                        Eth 
                        Included
                    </h1>

                    <a href="#" className='absolute bottom-10 duration-300 text-[16px] sm:text-lg md:text-2xl  font-medium text-[#A5A5A5] hover:text-[#A5A5A5]/60'>
                        COMING SOON
                    </a>
            
            </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default Economy