import React from 'react'
import Marquee from "react-fast-marquee";
import achievements1 from './pics/Achievements1_1.png'
import achievements2 from './pics/Achievements1_2.png'
import achievements3 from './pics/Achievements3.png'
import achievements4 from './pics/Achievements4.png'
export default function Achievements() {
  return (
    <div >
      {/* <Marquee pauseOnHover gradient>
      <div className='mx-10'>
      Hello i m Achievements
     </div>
     <div className='mx-10'>
      Hello i m Achievements
     </div>
     <div className='mx-10'>
      Hello i m Achievements
     </div>
      </Marquee> */}
      <Marquee pauseOnHover >
        <div className='flex gap-16 bg-red-700 py-12'>
          {/* -----------------------------1st---------------------------------- */}
          <div className='flex gap-5 ml-8 px-6 py-4  border border-red-300 border-l text-slate-300 cursor-pointer hover:text-white hover:bg-red-600 border-l-red-700 border-opacity-40 hover:border-opacity-95 hover:shadow-lg hover:shadow-red-800'>
            <div className='mt-1'>
              <img src={achievements1} alt="" className='h-[5.5rem] border-r border-r-slate-100 border-opacity-40'/>
            </div>
            <div className=''>
              <p className='text-[2.7rem] font-bold '>3+</p>
              <p className='text-xl '>Visa Categories</p>
            </div>
          </div>
          {/* ------------------------------2nd--------------------------------- */}
          <div className='flex gap-5 ml-2  px-6 py-4  border border-red-300 border-l text-slate-300 cursor-pointer hover:text-white hover:bg-red-600 border-l-red-700 border-opacity-40 hover:border-opacity-95 hover:shadow-lg hover:shadow-red-800'>
            <div className='mt-1'>
              <img src={achievements2} alt="" className='h-[5rem] border-r border-r-slate-100 border-opacity-40'/>
            </div>
            <div className=''>
              <p className='text-[2.7rem] font-bold '>68K</p>
              <p className='text-xl '>Visa Process</p>
            </div>
          </div>
          {/* ------------------------------3rd--------------------------------- */}
          <div className='flex gap-5  px-6 py-4  border border-red-300 border-l text-slate-300 cursor-pointer hover:text-white hover:bg-red-600 border-l-red-700 border-opacity-40 hover:border-opacity-95 hover:shadow-lg hover:shadow-red-800'>
            <div className='mt-1'>
              <img src={achievements3} alt="" className='h-[5.2rem] border-r border-r-slate-100 border-opacity-40'/>
            </div>
            <div className=''>
              <p className='text-[2.7rem] font-bold '>99+</p>
              <p className='text-xl '>Success Rate</p>
            </div>
          </div>
          {/* ------------------------------4th--------------------------------- */}
          <div className='flex gap-5 mr-8  px-6 py-4  border border-red-300 border-l text-slate-300 cursor-pointer hover:text-white hover:bg-red-600 border-l-red-700 border-opacity-40 hover:border-opacity-95 hover:shadow-lg hover:shadow-red-800'>
            <div className='mt-1'>
              <img src={achievements4} alt="" className='h-[5.3rem] border-r border-r-slate-100 border-opacity-40'/>
            </div>
            <div className=''>
              <p className='text-[2.7rem] font-bold '>23+</p>
              <p className='text-xl '>Pro Consultants</p>
            </div>
          </div>
        </div>
        </Marquee>
     
    </div>
  )
}
