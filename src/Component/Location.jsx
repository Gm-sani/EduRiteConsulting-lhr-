import React from 'react'
import office1 from './pics/destinationoffice1.png'
import office2 from './pics/destinationoffice2.png'
import office3 from './pics/destinationoffice3.png'
import office4 from './pics/destinationoffice4.png'
import { useNavigate } from 'react-router-dom';
import {
    Routes,
    Route
  } from "react-router-dom";

import Box from './Box';
export default function Destination2() {
    const navigate =useNavigate();
  return (
    <div className=''>
    <div className='text-center '>
        <p className='text-[2.1rem] text-red-800 tracking-wide font-semibold '>Step into Our Premier Office </p>
    </div>
    {/* ---------------------------------Button------------------------------------ */}
    <div className='flex gap-8 justify-center mt-5'>
    <div onClick={()=>{navigate("ofc1")}} className='px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>Head Office, Lahore</p>
    </div>
    <div onClick={()=>{navigate("ofc2")}} className='px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>Gulberg Office,Lahore</p>
    </div>
    <div onClick={()=>{navigate("ofc3")}} className='px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>Islamabad Office</p>
    </div>
    <div onClick={()=>{navigate("ofc4")}} className='px-7 py-2 border border-red-600 rounded-2xl hover:bg-red-400 cursor-pointer'>
        <p className='text-[1rem] font-semibold'>Wahdat Road Office</p>
    </div>
    </div>
    {/* ------------------------------------BOX-------------------------------------- */}
    <div>
    <Routes>
        <Route path='ofc1' element={<Box phone="92 300 2488996" email="eduriteconsulting@gmail.com" location="Office No 23 , First floor, Gul Plaza , Barkat Market Lahore, Pakistan." pic={office1}/>}/>
        <Route path='ofc2' element={<Box phone="92 300 4699719" email="eduriteconsulting@gmail.com" location="F-1, 2nd Floor Khan Arcade Firdous Market,Gulberg III, Lahore" pic={office2}/>}/>
        <Route path='ofc3' element={<Box phone="92 329 0166667" email="eduriteconsulting@gmail.com" location="Office No 4 First Floor Friends Arcade Street No 87 Near Bank Alflah G-13/1 Islamabad" pic={office3}/>}/>
        <Route path='ofc4' element={<Box phone="92 305 3330008" email="eduriteconsulting@gmail.com" location=" Office # 10, 2nd Floor, Gohar Centre, Wahdat Road, Lahore" pic={office4}/>}/>
    </Routes>
    
    </div>
    
    </div>
  )
}
