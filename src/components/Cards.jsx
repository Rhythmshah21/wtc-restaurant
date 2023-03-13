import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid  sm:grid-cols-3 gap-6'>
        {/* cards */}
        <div className='relative rounded-xl'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Fusion Pasta </p>
                <p className='px-2'> WTC's Malad</p>
                <button className='border-white bg-white text-black mx-2 px-2 absolute bottom-4  rounded-full'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
        </div>
            {/* cards */}
            <div className='relative rounded-xl'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Magical Pasta </p>
                <p className='px-2'> WTC's Goregaon</p>
                <button className='border-white bg-white text-black mx-2 px-2 rounded-full absolute bottom-4 '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
        </div>
            {/* cards */}
            <div className='relative rounded-xl'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4 '>Spaghetti Pasta </p>
                <p className='px-2'> WTC's kandivali</p>
                <button className='border-white bg-white text-black  mx-2 px-2 absolute bottom-4 rounded-full '>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600' alt='/'/>
        </div>
    </div>
  )
}

export default Cards