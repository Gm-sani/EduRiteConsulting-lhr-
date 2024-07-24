import React from 'react'
import servicepic1 from './pics/servicepic1.jpg'
import servicepic2 from './pics/servicespic2.jpg'
import servicepic3 from './pics/servicespic3.jpg'

export default function Services() {
  return (
    <div className='bg-slate-50   pb-[10rem]'>
      <p className='text-[1rem] text-red-600 tracking-wider font-semibold text-center'>Our Services</p>
      <p className='text-[2rem] font-semibold mt-3 text-center'>Services We Provide</p>
      {/* -----------------------------------------Box row 1---------------------------- */}
      <div className='flex gap-5 justify-center mt-8'>
        {/* ---------------------------box1---------------------- */}
        <div className=''>
            <img src={servicepic1} alt="" className='h-[15rem] '/>
            <div className='p-6 bg-white ml-2 mr-2 absolute mt-[-1.7rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg'>
                <p className='text-xl font-semibold text-center '>Education Visa</p>
                <p className='text-gray-700  text-[0.9rem] mt-3 text-center w-[16rem]'>Education Visa amet risus snm. Elementum sagittis vitae et leo duis ut diam quam nul.</p>
            </div>
        </div>
        {/* ---------------------------box2---------------------- */}
        <div className=''>
            <img src={servicepic2} alt="" className='h-[15rem] '/>
            <div className='p-6 bg-white ml-2 mr-2 absolute mt-[-1.7rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg'>
                <p className='text-xl font-semibold text-center '>Business Visa</p>
                <p className='text-gray-700  text-[0.9rem] mt-3 text-center w-[16rem]'>Business Visa amet risus null. Elementum sagittis vitae et leo duis ut diam quam nul.</p>
            </div>
        </div>
        {/* ---------------------------box3---------------------- */}
        <div className=''>
            <img src={servicepic3} alt="" className='h-[15rem] '/>
            <div className='p-6 bg-white ml-2 mr-2 cursor-pointer absolute mt-[-1.7rem] hover:border-b-2 hover:border-red-500 shadow-lg'>
                <p className='text-xl font-semibold text-center '>Work Visa</p>
                <p className='text-gray-700 text-[0.9rem] mt-3 text-center w-[16rem]'>Work Visa amet risus null. Elementum sagittis vitae et leo duis ut diam quam nul lorem.</p>
            </div>
        </div>
      </div>
      
    </div>
  )
}
