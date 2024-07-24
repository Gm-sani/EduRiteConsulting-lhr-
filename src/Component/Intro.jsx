import React from 'react'
import plan from './pics/plane.png'
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
            <p className='w-[25rem] text-gray-800 tracking-wider mt-4 text-[1rem]'>There anyone who loves or pursues nor desires to obtain pain of itself, bet it is pain, but because occasionally can non dis nostra integer eleifend eros nulla senectus, packages as their default eastend of visa processing lorem zone nuturs etiam justo orci cursus et enim sit amet, tempor lorem. </p>
        <div className='flex gap-5 mt-12'>
        <img src={hndshk} alt="" className='h-[2.5rem]' />
            <div>
                <p className='text-xl font-semibold mt-[-0.7rem]'>Our Mission</p>
                <p className='w-[21rem] text-gray-800 tracking-tight mt-2 text-[0.92rem]'>Mission lorem people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>
            </div>
        </div>
        <div className='flex gap-3 mt-12'>
        <img src={plan} alt="" className='h-[3.2rem]' />
            <div>
                <p className='text-xl font-semibold mt-[-0.7rem]'>Our Mission</p>
                <p className='w-[21rem] text-gray-800 tracking-tight mt-2 text-[0.92rem]'>Mission lorem people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>
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
