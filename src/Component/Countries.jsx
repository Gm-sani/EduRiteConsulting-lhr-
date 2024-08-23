import React from 'react'
import italy1 from './pics/Italy1.png'
import china2 from './pics/China2.png'
import australia3 from './pics/Australia3.png'
import finland4 from './pics/Finland4.png'
import sweden5 from './pics/Sweden5.png'
import uk6 from './pics/Uk6.jpeg'
import usa7 from './pics/Usa7.jpeg'
import { useNavigate } from 'react-router-dom';
import {
    Routes,
    Route
  } from "react-router-dom";
  

import { Box1 } from './Box';
export default function Countries() {
    const navigate =useNavigate();
  return (
    <div className='pb-8'>
    <div className='text-center mt-[1rem]'>
    {/* <p className='text-[0.75rem] text-red-600 font-semibold'>CONTACT INFORMATION</p> */}
        <p className='text-[2.1rem] text-red-800 tracking-wide font-semibold'>Explore Boundless Academic Horizons Globally</p>
        {/* <p className='text-[2.1rem] mt-[-0.7rem] text-red-800 tracking-tight font-semibold'>Guide You</p> */}
    </div>
    {/* ---------------------------------Button------------------------------------ */}
    <div className='lg:flex min-[315px]:flex-row  gap-8 justify-center mt-5'>
    <div onClick={()=>{navigate("italy")}} className='text-center px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>ITALY</p>
    </div>
    <div onClick={()=>{navigate("finland")}} className=' text-center px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>FINLAND</p>
    </div>
    <div onClick={()=>{navigate("sweden")}} className=' text-center px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>SWEDEN</p>
    </div>
    <div onClick={()=>{navigate("china")}} className=' text-center px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>CHINA</p>
    </div>
    <div onClick={()=>{navigate("australia")}} className=' text-center px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>AUSTRALIA</p>
    </div>
    <div onClick={()=>{navigate("uk")}} className=' text-center px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>UK</p>
    </div>
    <div onClick={()=>{navigate("usa")}} className=' text-center px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>USA</p>
    </div>
    </div>
    {/* ------------------------------------BOX-------------------------------------- */}
    <div>
    <Routes>
        <Route path='italy' element={<Box1 uni1="Polytechnic institute of Milan" uni2="Polytechnic institute of Turin" uni3="Polytechnic institute of Gregoriana" uni4="University of Bologna" uni5="University of Padua" uni6="University of Perugia" uni7="Many More..." unipic8={italy1}/>}/>
        <Route path='finland' element={<Box1 uni1="University in Lappeenranta" uni2="University of Helsinki" uni3="University of Turku" uni4="LUT University" uni5="Tallinn University of Technology" uni6="Tampere University" uni7="Many More..." unipic8={finland4}/>}/>
        <Route path='sweden' element={<Box1 uni1="Stockholm University " uni2="LUND University" uni3="Malardalen University" uni4="Jonkoping University" uni5="InnoEnergy MasterPLus" uni6="EIT Digital " uni7="Many More..." unipic8={sweden5}/>}/>

        <Route path='australia' element={<Box1 uni1="Kings Owns Institute " uni2="Northwest College " uni3="Milcom institute " uni4="Reach Community College" uni5="Salford College" uni6="AIBT" uni7="Many More..." unipic8={australia3}/>}/>
        <Route path='china' element={<Box1 uni1="China Pharamaceutical University" uni2="North China Electric Power University institute of Turin" uni3="Northwestren Polytechnic University" uni4="Donghua University" uni5="University of South China" uni6="Jiangsu University " uni7="Many More... " unipic8={china2}/>}/>
       
        <Route path='uk' element={<Box1 uni1="Abertay University" uni2="University of Bedfordshire" uni3="University of Bolton" uni4="University of Stirling" uni5="University of West Scotland" uni6="Durham University" uni7="Many More..." unipic8={uk6}/>}/>
        <Route path='usa' element={<Box1 uni1="University of North Texas" uni2="King Education" uni3="University of Kanas" uni4="KAPLAN" uni5="Pace University " uni6="Simmons University" uni7="Many More..." unipic8={usa7}/>}/>
    </Routes>
    
    </div>
    
    </div>
  )
}
