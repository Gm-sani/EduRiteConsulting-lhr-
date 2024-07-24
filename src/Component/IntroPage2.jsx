import React from 'react'
import { useNavigate } from 'react-router-dom';
import OverViewPic3 from './pics/OverViewPic3.jpg'

export default function IntroPage2(props) {
    const navigate =useNavigate();
  return (
    <div className='pb-[22rem]'>
      <div className=' my-4 '>
        <img src={OverViewPic3} alt="" className=' h-[22rem] mx-12 w-[78rem] m-auto rounded-3xl absolute  ' />
      </div>
      <div className='ml-28 mt-16 absolute '>
        <p className='text-[4rem] font-bold text-slate-100 tracking-wider '>{props.namm}</p>
        <div className='flex gap-2'>
        <p onClick={()=>{navigate("/")}} className='text-xl text-slate-100 hover:text-red-200 cursor-pointer'>Edurite Consulting /</p>
        <p className='text-xl text-white'>{props.namm}</p>
        </div>
        
      </div>
    </div>
  )
}
