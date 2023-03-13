import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-white bg-black/40 flex flex-col justify-center'>
                <h1  className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-txl font-bold'>Eat <span className='text-orange-500'>OneTime</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-txl font-bold '><span className='text-orange-500'>Remember </span>Lifetime</h1>               
            </div>
            <img className='w-full max-h-[500px] object-cover' src='https://images.pexels.com/photos/262961/pexels-photo-262961.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
        </div>
    </div>
  )
}

export default Hero