import React, { useEffect, useState } from 'react'
import slider1 from "./pics/Slider_1.jpg"
import slider2 from "./pics/slider_3.jpg"
import slider3 from "./pics/Slider_5.jpg"

export default function Slider() {

    const [selected , Setselected ] = useState(0)
    const [images , Setimages] =useState([slider1,slider2,slider3])


   //  -------------------------------------- img slider-----------------------------
    useEffect(()=>{
     
        setInterval(() => {
            Setselected(selected => selected < 2 ? selected + 1 : 0 )
            console.log(selected)
        }, 5000);
      },[])
    //   ----------------------------------------------------------------------------------


  return (
    <div className='mt-4'>
        <div>
        <img src={images[selected]} alt="Slider images" className='h-[90vh] w-[95vw] m-auto object-cover'/>
        </div>
      
    </div>
  )
}
