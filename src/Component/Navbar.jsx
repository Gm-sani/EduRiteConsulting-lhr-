import React, { useEffect } from 'react'
import { IconButton } from '@mui/material';
import DialpadIcon from '@mui/icons-material/Dialpad';
import TimerIcon from '@mui/icons-material/Timer';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import logo from "./pics/logo_rb.png"
import TimerTwoToneIcon from '@mui/icons-material/TimerTwoTone';
import { useNavigate } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import gsap from 'gsap';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


export default function Navbar() {
  const navigate =useNavigate();

  useEffect(()=>{
    const tl =gsap.timeline();

    tl.to("#lownav",{
        x:-20,
        opacity:1,
        duration:1,
    })
    tl.to("#logo",{
      
      opacity:1,
      duration:1,
  })

    

},[])

  return (
<div className=''>
    <div className='flex justify-between px-7 bg-black text-white p-2 '>
      <div className='flex gap-2 '>
        <div> 
            <DialpadIcon className="p-[0.15rem] text-red-500"/>
        </div>
        <div className='py-[0.15rem] text-[0.93rem] font-mono'>HELP DESK :</div>
        <div className='py-[0.15rem] text-[0.93rem] font-semibold tracking-tighter'>+92-300-1488995 : +92-300-2488996 </div>
      </div>

      <div className='flex'>
      <TimerTwoToneIcon className="p-[0.15rem] text-red-500 "/>
      <div className='py-[0.15rem] text-[0.90rem] font-semibold tracking-tighter'>Monday - Friday 09:00 am - 06:00 Pm</div>
      </div>

      <div className='flex '>
      <FmdGoodIcon className="p-[0.15rem] text-red-500"/>
      <div className='py-[0.15rem] text-[0.90rem] font-semibold tracking-tighter'>29 Civic Center, Second floor, Barkat market, Lahore</div>
      </div>
      <div>
        <div className='flex gap-2 px-2 '>
          <p className='text-[0.93rem] mt-[0.2rem] font-serif'>Follow us:</p>
          <div>
            <a href="https://web.facebook.com/profile.php?id=61562605449423">
            <FacebookOutlinedIcon className='p-[0.15rem] text-white '/>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A102531504&keywords=edurite%20consulting&origin=RICH_QUERY_SUGGESTION&position=3&searchId=3e27da5f-2406-4aac-9503-a07b27c5d8b8&sid=k%3Bs&spellCorrectionEnabled=false">
            <p className='p-[0.15rem] text-black font-semibold text-xs px-[0.25rem] mt-[0.3rem] bg-white rounded-full'>in</p>
            {/* <XIcon className=''/> */}
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/edurite_consulting/">
            <InstagramIcon className='p-[0.15rem] text-white '/>
            </a>
          </div>
        </div>
      </div>
    </div>
{/* ----------------------------------low navbar------------------------------------------------- */}
<div className='px-12 flex gap-[12.3rem]'>
    <div  >
        <img onClick={()=>{navigate("/")}} src={logo} alt="" id='logo' className='p-1 cursor-pointer opacity-5 h-[5rem] '/>
    </div>
    <div id='lownav' className='flex gap-9 text-[1.15rem] pt-8 font-light opacity-0'>
        <div onClick={()=>{navigate("overview")}}  className='cursor-pointer h-1  '>Comapny Overview </div>
        <div onClick={()=>{navigate("program")}} className='cursor-pointer h-1'>Program</div>
        {/* <div onClick={()=>{navigate("student")}} className='cursor-pointer h-1'>Student</div> */}
        <div onClick={()=>{navigate("destination")}} className='cursor-pointer h-1'>Contact Details</div>
        <div onClick={()=>{navigate("event")}} className='cursor-pointer h-1'>Event & Media</div>
        {/* <div onClick={()=>{navigate("contact")}} className='cursor-pointer h-1 '>Contact us</div> */}
    </div>
    <div className=''>
    <div id='lownav' className='flex gap-2 text-[1.15rem] mt-[1.65rem] p-2  font-light opacity-0 hover:gap-3 hover:bg-red-200 shadow-md shadow-red-400 bg-red-600 hover:shadow-lg hover:shadow-red-300 cursor-pointer hover:text-black text-white rounded-full '>
        <div onClick={()=>{navigate("apply")}} className='cursor-pointer h-1 tracking-tight '>Appointment</div>
        <div><ArrowRightAltIcon className=''/></div>
    </div>
    </div>
    
</div>

</div>
    
  )
}

