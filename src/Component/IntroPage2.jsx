import React from 'react'
import { useNavigate } from 'react-router-dom';
import OverViewPic3 from './pics/OverViewPic3.jpg'

export default function IntroPage2(props) {
    const navigate =useNavigate();
  return (
    <div className='lg:pb-[22rem] min-[315px]:pb-[12rem]'>
      <div className=' my-4 '>
        <img src={OverViewPic3} alt="OverViewPic" className=' lg:h-[22rem] lg:w-[78rem] lg:mx-12 rounded-3xl absolute min[310px]:h-[12rem] min[310px]:w-[10rem] ' />
      </div>
      <div className='lg:ml-28 lg:mt-16 min-[315px]:ml-10 min-[315px]:mt-6 absolute '>
        <p className='lg:text-[4rem] min-[315px]:text-[2.5rem] font-bold text-slate-100 tracking-wider '>{props.namm}</p>
        <div className='flex gap-2'>
        <p onClick={()=>{navigate("/")}} className='text-xl text-slate-100 hover:text-red-200 cursor-pointer'>Edurite Consulting /</p>
        <p className='text-xl text-white'>{props.namm}</p>
        </div>
        
      </div>
    </div>
  )
}
