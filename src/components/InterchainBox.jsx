import React from 'react'
import img from "../assets/image4.png"
function InterchainBox() {

  return (
    <div className='mt-5 md:mt-32 max-w-[442px] flex flex-col items-center px-4 md:items-start gap-2 md:gap-10'>
        <img src={img} alt="" className='w-[100px] md:w-[150px] xl:w-[243px]' />
        <h1 className='text-xl sm:text-4xl md:text-5xl font-bold'>Marketplace</h1>
        <p className='text-sm sm:text-lg md:text-xl lg:text-2xl mx:text-[27px] '>
            Set to operate a next-gen 
            decentralized exchange, swapping 
            digital assets from across the 
            Interchain, with very low fees and 
            instant transaction confirmation.
        </p>
    </div>
  )
}

export default InterchainBox