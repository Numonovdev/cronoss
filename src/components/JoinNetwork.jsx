import React from 'react'
import img from "../assets/image10.png"
import img1 from "../assets/image11.png"
import img2 from "../assets/image12.png"

function JoinNetwork() {
  return (
    <div className='container flex flex-col text-white py-20 gap-20 px-5 md:px-0'>

        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[90px] font-bold text-center mt-5'>
            Join the network.
        </h1>


        <div className='grid grid-cols-1 md::grid-cols-2 xl:grid-cols-3 gap-8 '>
            
            <div className='flex flex-col min-h-[630px] justify-between py-10 px-8 bg-[#141414]'>

              <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl text-[#A5A5A5] font-medium'>
                CONNECT  
              </p>

              <div className='flex flex-col gap-12'>

              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[45px]'>
                Connect chains
              </h1>

              <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl max-w-[376px] font-medium'>
                Grow the economy of your chain 
                by connecting to Cronos Hub 
                services using IBC protocol. 
              </p>
              </div>

              <img src={img} className='w-8' alt="" />

            </div>

            <div className='flex flex-col min-h-[630px] justify-between py-10 px-8 bg-[#141414]'>

              <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl text-[#A5A5A5] font-medium'>
              INTEGRATE 
              </p>

              <div className='flex flex-col gap-12'>

              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[45px]'>
              Provide services
              </h1>

              <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl max-w-[376px] font-medium'>
                Get support to bring users to 
                Cronos by providing services 
                such as exchanges, wallets
                and more.               
              </p>
              </div>

              <img src={img1} className='w-8' alt="" />

            </div>

            <div className='flex flex-col min-h-[630px] justify-between py-10 px-8 bg-[#141414]'>

              <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl text-[#A5A5A5] font-medium'>
              VALIDATE
              </p>

              <div className='flex flex-col gap-12'>

              <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[45px]'>
              Validator level 
              </h1>

              <p className='text-[16px] sm:text-lg md:text-xl xl:text-2xl max-w-[376px] font-medium'>
                Join the ranks of trusted 
                decentralized validator 
                operators in the network and 
                help secure the interchain.  
              </p>
              </div>

              <img src={img2} className='w-8' alt="" />

            </div>

        </div>
    </div>
  )
}

export default JoinNetwork