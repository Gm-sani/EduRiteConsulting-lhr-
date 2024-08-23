import React from 'react'
import Mbbspic from './pics/Mbbspic1.jpg'
import Phdpic from './pics/Phdpic2.jpg'
import Mspic from './pics/Mspic.jpeg'
import Bspic from './pics/Bspic.jpg'
import servicepic2 from './pics/servicespic2.jpg'
import servicepic3 from './pics/servicespic3.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import IntroPage2 from './IntroPage2'
import { useNavigate } from 'react-router-dom';


export default function Program(props) {
    const navigate =useNavigate();
    
   
  return (
    <>
    <IntroPage2 namm="Programs"/>
    <div className='bg-slate-50 pb-[10.5rem]'>
      <p className='text-[0.85rem] text-red-600 font-semibold text-center mt-5'>COURSES WE OFFER</p>
      <p className='text-[2rem] font-semibold mt-[0.1rem] text-center'>Get the Best Courses You Deserve</p>
      {/* -----------------------------------------Box row 1---------------------------- */}
      <div className='lg:flex flex-row lg:mx-0 mx-12 gap-5 justify-center mt-[1rem]'>
        {/* ---------------------------Bs---------------------- */}
        <div className=''>
            <img src={Bspic} alt="Bspic" className='h-[13rem] w-[19.5rem]'/>
            <div className='p-6  bg-white ml-2 mr-2 absolute mt-[-1.7rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg'>
            <p className='text-xl font-semibold text-center '>BS</p>
            <p className='text-gray-700  text-[0.9rem] mt-3 text-center  w-[15.5rem]'>Bachelor degrees from Australia, Italy, and Georgia are considered best countries.  <ArrowCircleRightIcon onClick={()=>{navigate("/bs")}} className='hover:text-red-600'/> </p>
            </div>
        </div>
        {/* ---------------------------Ms---------------------- */}
        <div className='lg:mt-[0rem] mt-[10rem]'>
            <img src={Mspic} alt="Mspic" className='h-[13rem] '/>
            <div className='p-6  bg-white ml-2 mr-2 absolute mt-[-1.7rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg'>
            <p className='text-xl font-semibold text-center '>MS</p>
            <p className='text-gray-700  text-[0.9rem] mt-3 text-center  w-[15.5rem]'>Master's and MPhil degrees from USA, China, Uzbekistan and UK are best countries.   <ArrowCircleRightIcon onClick={()=>{navigate("/ms")}} className='hover:text-red-600'/> </p>
            </div>
        </div>
        {/* ---------------------------Mbbs---------------------- */}
        <div className='lg:mt-[0rem] mt-[10rem]'>
            <img src={Mbbspic} alt="Mbbspic" className='h-[13rem] '/>
            <div className='p-6  bg-white ml-2 mr-2 absolute mt-[-1.7rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg'>
            <p className='text-xl font-semibold text-center '>MBBS</p>
            <p className='text-gray-700  text-[0.9rem] mt-3 text-center  w-[15.5rem]'>Medical degrees from China, Kyrgystan Georgia,
                 Russia and the UK are best countries   <ArrowCircleRightIcon onClick={()=>{navigate("/mbbs")}}  className='hover:text-red-600'/></p>
            </div>
        </div>
        {/* ---------------------------Phd---------------------- */}
        <div className='lg:mt-[0rem] mt-[10rem]'>
            <img src={Phdpic} alt="Phdpic" className='h-[13rem] '/>
            <div className='p-6  bg-white ml-2 mr-2 absolute mt-[-1.7rem] hover:border-b-2 cursor-pointer hover:border-red-500 shadow-lg' >
            <p className='text-xl font-semibold text-center '>PHD</p>
            <p className='text-gray-700  text-[0.9rem] mt-3 text-center  w-[15.5rem] '>PHD degrees from USA, China, Germany and the UK are  best countries   <ArrowCircleRightIcon onClick={()=>{navigate("/phd")}} className='hover:text-red-600'/> </p>
            </div>
        </div>
      </div>
      
    </div>
    </>
    

  )
}
