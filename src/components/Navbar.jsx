import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch,AiOutlineShoppingCart} from 'react-icons/ai'
import {BsFillCartFill, BsFillSaveFill, BsTruck} from 'react-icons/bs'
import {MdFavorite, MdHelp} from 'react-icons/md'
import {FaUserFriends, FaWallet} from 'react-icons/fa'

const Navbar = () => {
    const [nav,setNav]= useState(false) 
    return (

    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div  onCLick={()=>setNav(!nav)} className='cursor-pointer'>
            <AiOutlineMenu size={20}/>
            </div> 
            <p className='text-2xl sm:text-3xl lg:text-4xl font-serif px-2'>WTC</p>
            <div className=' hidden sm:flex items-center bg-slate-200 rounded-full p-1 text-[12px]'>
                <p className='bg-black text-white rounded-full p-2'>Delivery</p>
                <p className='p-2'>Pickup</p>
            </div>
        </div>
        <div className='flex items-center bg-slate-200 rounded-full px-2 w-[300px] md:w-[400] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
            <input className='bg-transparent focus:outline-none p-2 w-full' type='text' placeholder='Search Food'/>
        </div>

        <div className=''>
            <button className=' bg-black text-white 
             p-2 rounded-full px-3 hidden md:flex '>
                <BsFillCartFill size={20} className='mr-2' />Cart
            </button>
        </div>
        {/* for overlaying */}
        {nav ?  <div className='bg-black/80 fixed top-0 left-0 w-full h-screen z-10 '></div>   :''}
      

        
        <div className={nav ? 'fixed top-0 left-0 bg-white w-[300px] h-screen z-10 duration-300':'fixed top-0 left-[-100%] bg-white w-[300px] h-screen z-10 duration-300'}>
            <AiOutlineClose onClick={()=>setNav(!nav)} className='absolute right-4 top-4 cursor-pointer' size={25}/>
            <h1 className='text-3xl font-serif p-4'>WTC</h1>



            <nav>
                <ul className='flex flex-col p-4 text-slate-600'>
                    <li className='flex items-center text-xl p-4 '>
                        <BsTruck className='mr-4'/>
                        Orders
                    </li>
                    <li className='flex items-center text-xl p-4 '>
                        <MdFavorite className='mr-4'/>
                        Favorites
                    </li>
                    <li className='flex items-center text-xl p-4 '>
                        <FaWallet className='mr-4'/>
                        Wallet
                    </li>
                    <li className='flex items-center text-xl p-4 '>
                        <MdHelp className='mr-4'/>
                        Help
                    </li>
                    <li className='flex items-center text-xl p-4 '>
                        <AiFillTag className='mr-4'/>
                        Promotions
                    </li>
                    <li className='flex items-center text-xl p-4 '>
                        <BsFillSaveFill className='mr-4'/>
                        Best Ones
                    </li>
                    <li className='flex items-center text-xl p-4 '>
                        <FaUserFriends className='mr-4'/>
                        Invite Friends
                    </li>
                </ul>
            </nav>

        </div>
    </div>
  )
}

export default Navbar