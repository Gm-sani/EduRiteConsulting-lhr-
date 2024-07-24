import React from 'react'
import gallery1 from './pics/gallery1.png'
import gallery2 from './pics/gallery2.png'
import gallery3 from './pics/gallery3.png'
import gallery4 from './pics/gallery4.png'
import gallery5 from './pics/gallery5.png'
import gallery6 from './pics/gallery6.png'
export default function Gallery() {
  return (
    <div>
        <p className='text-[0.85rem] text-red-600 font-semibold text-center mt-5'>Explore Our Journey</p>
      <p className='text-[2.1rem] text-red-800 tracking-wide font-semibold text-center '> View the Study Abroad Seminar Gallery </p>
    <div className='flex justify-center gap-10 mt-6'>
        <div>
            <img src={gallery1} alt="" className='rounded-2xl h-[23rem]'/>
        </div>
        <div>
            <img src={gallery2} alt="" className='rounded-2xl h-[23rem]'/>
        </div>
        <div>
            <img src={gallery3} alt="" className='rounded-2xl h-[23rem]'/>
        </div>
    </div>
    <div className='flex justify-center gap-10 mt-8'>
        <div>
            <img src={gallery4} alt="" className='rounded-2xl h-[23rem]'/>
        </div>
        <div>
            <img src={gallery5} alt="" className='rounded-2xl h-[23rem]'/>
        </div>
        <div>
            <img src={gallery6} alt="" className='rounded-2xl h-[23rem]'/>
        </div>
    </div>
    </div>
  )
}