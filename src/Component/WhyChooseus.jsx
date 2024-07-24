import React from 'react'
import hndshk from './pics/handShake.png'
import growingGraph from './pics/growingGraph.png'
import chat from './pics/chat.png'
import plane from './pics/plane.png'
import choosepic from './pics/choosepic.jpg'
export default function WhyChooseus() {
  return (
    <div className='bg-slate-50 h-[100vh] pt-7'>
        <div className='flex justify-center '>
        <div className='mt-[4.3rem]'>
        <img src={choosepic} alt="" className='h-[30rem]'/>
      </div>
      <div className='bg-white p-5 hover:border-b-4 hover:border-b-red-600 shadow-xl'>
      <p className='text-[0.85rem] text-red-600 tracking-wider font-semibold  mt-3'>Why Choose Us</p>
      <p className='text-[1.4rem] font-semibold mt-2  w-[23rem]'>We Provide Experts To Create Great Value For Your Visa</p>
      {/* ----------------------------1------------------------------- */}
      <div className='flex gap-3 mt-2 border-b border-red-300 py-5'>
        <img src={growingGraph} alt="" className='h-[3.3rem]' />
            <div>
                <p className='text-[1.05rem] font-semibold mt-[-0.7rem]'>Real Time Status</p>
                <p className='w-[21rem] text-gray-800 tracking-tight mt-1 text-[0.87rem]'>By dealing with data, select tools that help you automate time-consuming processes.</p>
            </div>
        </div>
        {/* ----------------------------2------------------------------- */}
      <div className='flex gap-5 mt-2 border-b border-red-300 py-5 pl-3'>
        <img src={hndshk} alt="" className='h-[2rem]' />
            <div>
                <p className='text-[1.05rem] font-semibold mt-[-0.7rem]'>Experience Expert Team</p>
                <p className='w-[21rem] text-gray-800 tracking-tight mt-1 text-[0.87rem]'>By dealing with data, select tools that help you automate time-consuming processes.</p>
            </div>
        </div>
        {/* ----------------------------3------------------------------- */}
      <div className='flex gap-1 mt-2 border-b border-red-300 py-5'>
        <img src={chat} alt="" className='h-[2rem]' />
            <div>
                <p className='text-[1.05rem] font-semibold mt-[-0.7rem]'>Live Chat With Our Team</p>
                <p className='w-[21rem] text-gray-800 tracking-tight mt-1 text-[0.87rem]'>By dealing with data, select tools that help you automate time-consuming processes.</p>
            </div>
        </div>
        {/* ----------------------------4------------------------------- */}
      <div className='flex gap-3 mt-2 py-5'>
        <img src={plane} alt="" className='h-[3.3rem]' />
            <div>
                <p className='text-[1.05rem] font-semibold mt-[-0.7rem]'>
                Fast Processing Guaranty</p>
                <p className='w-[21rem] text-gray-800 tracking-tight mt-1 text-[0.87rem]'>By dealing with data, select tools that help you automate time-consuming processes.</p>
            </div>
        </div>
      </div>
        </div>
      
    </div>
  )
}