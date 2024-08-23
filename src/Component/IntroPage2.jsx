import React from 'react'
import { useNavigate } from 'react-router-dom';
import OverViewPic3 from './pics/OverViewPic3.jpg'

export default function IntroPage2(props) {
    const navigate =useNavigate();
  return (
    <div className='lg:pb-[22rem] pb-[12rem]'>
      <div className=' my-4 '>
        <img src={OverViewPic3} alt="OverViewPic" className=' lg:h-[22rem] md:h-[12rem] lg:w-[78rem] lg:mx-12 rounded-3xl absolute ' />
      </div>
      <div className='lg:ml-28 ml-10 lg:mt-16 mt-6 absolute '>
        <p className='lg:text-[4rem] text-[2.5rem] font-bold text-slate-100 tracking-wider '>{props.namm}</p>
        <div className='flex gap-2'>
        <p onClick={()=>{navigate("/")}} className='text-xl text-slate-100 hover:text-red-200 cursor-pointer'>Edurite Consulting /</p>
        <p className='text-xl text-white'>{props.namm}</p>
        </div>
        
      </div>
    </div>
  )
}
