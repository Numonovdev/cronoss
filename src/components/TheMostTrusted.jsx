import React from 'react'

function TheMostTrusted() {
  return (
    <div className='flex flex-col container py-32 text-white items-center gap-20'>

        <div className='flex flex-col md:flex-row items-center'>

            <div className='flex flex-col max-[777px] gap-20'>

                <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl text-[#A5A5A5] font-medium'>
                    TECHNOLOGY  
                </p>

                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[90px] font-bold max-w-[777px] mt-5'>
                    The most trusted
                    way to build <br />
                    value.
                </h1>

                <p className='max-w-[624px] text-lg sm:text-xl md:text-2xl xl:text-[33px] text-[#A5A5A5] font-medium'>
                    Cronos is a state-of-the-art blockchain 
                    framework that powers the Cronos Hub 
                    and its rapidly expanding orbit of 
                    sovereign chains.
        <br /><br />
                    Developers can use the SDK to build 
                    innovative applications that create 
                    value through exchange with the 
                    Cronos Hub.  
                </p>

            </div> 

            <div className='flex flex-col'>

                <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl text-[#A5A5A5] font-medium'>
                    PROOF OF STAKE  
                </p>

                <h1 className='text-4xl sm:text-6xl md:text-7xl xl:text-[160px] font-extrabold'>
                    99%
                </h1>                

                <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl text-[#A5A5A5] font-medium'>
                    Lower carbon footprint  
                </p>

            </div>

        </div>

        <div className='w-full flex justify-evenly items-center '>

            <div className='flex flex-col gap-10'>
    
            <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl text-[#A5A5A5] font-medium'>
                LOW FEES  
            </p>

            <h1 className='text-4xl sm:text-6xl md:text-7xl xl:text-[160px] font-extrabold'>
                $0.01
            </h1>

            <p className='text-lg sm:text-xl md:text-2xl xl:text-[30px] font-medium'>
                Enjoy the lowest fees - almost zero
            </p>

            </div>

            <div className='flex flex-col gap-10'>
    
            <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl text-[#A5A5A5] font-medium'>
                FAST TRANSACTIONS  
            </p>

            <h1 className='text-4xl sm:text-6xl md:text-7xl xl:text-[160px] font-extrabold'>
                5 sec
            </h1>

            <p className='text-lg sm:text-xl md:text-2xl xl:text-[30px] font-medium'>
                Transactions confirmed in seconds.
            </p>

        </div>

        </div>

    </div>
)
}

export default TheMostTrusted