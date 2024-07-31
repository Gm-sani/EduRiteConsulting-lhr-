import React from 'react'
import since from './pics/Since.png'
import hndshk from './pics/handShake.png'
import intropic from './pics/intropic_1.jpg'
export default function Intro() {
  return (
    <div className=''>
<div className=' m-12  '>
        <div className='flex gap-24 justify-center'>
        <div>
        <p className='text-[1rem] text-red-600 tracking-wider font-semibold'>INTRODUCTION</p>
            <p className='text-[2rem] font-semibold mt-4'>EDURITE CONSULTING</p>
            <p className='w-[25rem] text-gray-800 tracking-wider mt-4 text-[1rem]'>Explore global opportunities with our top-notch study abroad consultancy. We provide personalized guidance and support, ensuring a seamless journey from application to arrival at your dream destination. </p>
        <div className='flex gap-5 mt-12'>
        <img src={hndshk} alt="" className='h-[2.5rem]' />
            <div>
                <p className='text-xl font-semibold mt-[-0.7rem]'>Our Mission</p>
                <p className='w-[21rem] text-gray-800 tracking-tight mt-2 text-[0.92rem]'>Our mission is to empower students to achieve their educational dreams abroad through expert guidance and personalized support</p>
            </div>
        </div>
        <div className='flex gap-3 mt-12'>
        <img src={since} alt="" className='h-[2.7rem]' />
            <div>
                <p className='text-xl font-semibold mt-[-0.7rem]'>Established </p>
                <p className='w-[21rem] text-gray-800 tracking-tight mt-2 text-[0.92rem]'>Guiding students to their dream destinations since 2012 with expert advice and personalized support</p>
            </div>
        </div>
        </div>
{/* -------------------------------------Right img---------------------------------- */}
        <div>
            <img src={intropic} alt="" className='h-[35rem]' />
        </div>
        </div>
      
    </div>
    </div>
    
  )
}
