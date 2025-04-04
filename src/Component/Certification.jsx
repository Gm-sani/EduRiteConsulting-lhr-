import React from 'react'
import certificate1 from './pics/certificate1.jpg'
import certificate2 from './pics/certificate2.jpg'
import certificate3 from './pics/certificate3.jpg'
import certificate4 from './pics/certificate4.jpg'
import certificate5 from './pics/certificate5.jpg'
import certificate6 from './pics/certificate6.jpg'

export default function Certification() {
  return (
    <div>
      <p className='text-[2.1rem] text-red-800 tracking-wide text-center mt-2 font-semibold '>Certificate of Achievement Award</p>
    <div className='lg:flex min-[315px]:flex-row gap-12 justify-center my-4 min-[315px]:mx-12'>
        <div>
            <img src={certificate1} alt="certificate1" className='h-[17rem] ' />
        </div>
        <div>
            <img src={certificate2} alt="certificate2" className='h-[17rem] lg:my-0 min-[315px]:my-12' />
        </div>
        <div>
            <img src={certificate3} alt="certificate3" className='h-[17rem] ' />
        </div>
    </div>
    <div className='lg:flex min-[315px]:flex-row justify-between px-[4rem] my-12 min-[315px]:mx-12 '>
        <div>
            <img src={certificate4} alt="certificate4" className='h-[17rem] ' />
        </div>
        <div>
            <img src={certificate5} alt="certificate5" className='h-[17rem] w-[20rem] lg:my-0 min-[315px]:my-12 ' />
        </div>
        <div>
            <img src={certificate6} alt="certificate6" className='h-[17rem] w-[20rem]' />
        </div>
    </div>
    </div>
  )
}
