import React from 'react'
import { useNavigate } from 'react-router-dom';
import footer from "./pics/footer_4.jpg"
import logo from "./pics/logo_3_rb.png"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    const navigate =useNavigate();
  return (
    <div className='md:block hidden'>
    {/* -----------------------------------backpic----------------------------- */}
    <div className='absolute'>
        <img src={footer} alt="" className='h-[80vh] w-[100vw] opacity-90'/>
        </div>
{/* ---------------------------------Front pic-------------------------------------- */}
    <div className=' absolute'>
     <div className='flex  gap-6 pt-12 justify-between'>
        {/* ----------------------------------Intro------------------------------------------- */}
     <div className='ml-9'> 
            <img src={logo} alt="" onClick={()=>{navigate("/")}} className='h-[6rem] cursor-pointer'/>
            {/* <p className='text-[1.1rem] text-white font-semibold tracking-tighter mt-5 w-44'>
            Is working since 2009 and serve the nation with many services. We are putting our best with our dedication and sincerity.
            </p> */}
            {/* -----------------------------------Links------------------------------------- */}
            <div className='flex gap-2 px-1 mt-5'>
            <div className=' p-1 px-3 rounded-full border-2 text-white border-red-900 hover:bg-white hover:text-red-800 cursor-pointer'>
            <a href="https://web.facebook.com/profile.php?id=61562605449423">
            <p className='text-xl font-bold  '>f</p>
            </a>
            </div>
            
            <div  className=' rounded-full border-2 text-white border-red-900 hover:bg-white  hover:text-red-800 cursor-pointer'>
            <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A102531504&keywords=edurite%20consulting&origin=RICH_QUERY_SUGGESTION&position=3&searchId=3e27da5f-2406-4aac-9503-a07b27c5d8b8&sid=k%3Bs&spellCorrectionEnabled=false">
            <p className='p-[0.15rem]  font-semibold text-[1rem] px-[0.75rem] mt-[0.3rem]  rounded-full'>in</p>
            </a>
            </div>
            
            <div  className=' p-1 rounded-full border-2 text-white border-red-900 hover:bg-white hover:text-red-800 cursor-pointer'>
            <a href="https://www.instagram.com/edurite_consulting/">
            <InstagramIcon className='text-xl font-bold '/>
            </a>
           
            </div>
            </div>
        </div>
        {/* ---------------------------------1st box ------------------------------ */}
        <div className=''>
            <p className='text-[2rem] pl-12 text-red-600 font-semibold '>Services</p> 
            <ul className="list-disc text-[1rem] text-white mt-5 pl-16 ">
                <li className='hover:text-red-500 cursor-pointer'>Study Abroad Consulting</li>
                <li className='hover:text-red-500 cursor-pointer'>University & Scholarship Guidance</li>
                <li className='hover:text-red-500 cursor-pointer'>Student Visa Facillitaion</li>
                <li className='hover:text-red-500 cursor-pointer'>Personal Statment Assistance</li>
                <li className='hover:text-red-500 cursor-pointer'>Personal Training</li>
                <li className='hover:text-red-500 cursor-pointer'>Pre & Post Departure Guide</li>
            </ul>
        </div>
        {/* ----------------------------------2nd list ----------------------------- */}
        <div className=''>
            <p className='text-[2rem] text-red-600 font-semibold pl-12'>Explore Link</p> 
            <ul className="list-disc text-[1rem] text-white mt-5 pl-16">
                <li onClick={()=>{navigate("overview")}} className='hover:text-red-500 cursor-pointer'>Comapny Overview</li>
                <li onClick={()=>{navigate("program")}} className='hover:text-red-500 cursor-pointer'>Program</li>
                {/* <li onClick={()=>{navigate("destination")}} className='hover:text-red-500 cursor-pointer'>Contact Details</li> */}
                <li onClick={()=>{navigate("event")}} className='hover:text-red-500 cursor-pointer'>Event & Media</li>
                {/* <li onClick={()=>{navigate("contact")}} className='hover:text-red-500 cursor-pointer'>Contact us</li> */}
                <li onClick={()=>{navigate("apply")}} className='hover:text-red-500 cursor-pointer'>Appointment</li>
            </ul>
        </div>
        {/* ----------------------------------3rd list ----------------------------- */}
        <div className=''>
            <p className='text-[2rem] text-red-600 font-semibold pl-12'>Countries</p> 
            <ul className="list-disc text-[1rem] text-white mt-5 pl-16">
                <li className='hover:text-red-500 cursor-pointer'>ITALY</li>
                <li className='hover:text-red-500 cursor-pointer'>FINLAND</li>
                <li className='hover:text-red-500 cursor-pointer'>SWEDEN</li>
                <li className='hover:text-red-500 cursor-pointer'>CHIINA</li>
                <li className='hover:text-red-500 cursor-pointer'>AUSTRALIA</li>
                <li className='hover:text-red-500 cursor-pointer'>UK</li>
                <li className='hover:text-red-500 cursor-pointer'>USA</li>
            </ul>
        </div>
        {/* ----------------------------------------4th list---------------------------------- */}
        <div className=''>
            <p className='text-[2rem] text-red-600 font-semibold pl-12'>Our Branch</p> 
            <ul className="list-disc text-[1rem] text-white mt-5 pl-16">
                <li className='hover:text-red-500 cursor-pointer'>Head Office: 23, 1st Floor, Gull plaza,</li>
                <p className='hover:text-red-500 cursor-pointer'> Barkat market, Lahore</p>
                <li className='hover:text-red-500 cursor-pointer'>Office : 4 1st Floor Fortune Arcade,</li>
                <p className='hover:text-red-500 cursor-pointer'>  G13 Markaz , Islamabad</p>
                <li className='hover:text-red-500 cursor-pointer'>eduriteconsulting@gmail.com</li>
                <li className='hover:text-red-500 cursor-pointer'>92-300-2488996</li>
                <li className='hover:text-red-500 cursor-pointer'>92-300-1488995</li>
                <li className='hover:text-red-500 cursor-pointer'>92-309-2480468</li>
            
            </ul>
        </div>
        
     </div>
     {/* ------------------------------------list end------------------------------ */}
     <p className='text-[1.5rem] ml-9 mt-24  text-gray-200 font-semibold '>Do you have questions or want more</p>
     <p className='text-[1.5rem] ml-9  text-gray-200 font-semibold border-b border-white '>information? Contact us now</p>
     <div className='flex justify-between'>
        <div>
        <p className='text-[0.9rem] text-gray-200 ml-9 pt-2 pb-2 cursor-pointer'>Copyright © 2024 eduriteconsulting All rights reserved.</p>
        </div>
        <div className=''>
            <a href="https://gmsportfolio.netlify.app/">
            <p  className='text-[0.9rem] text-white mx-5 pt-2 pb-2 cursor-pointer hover:text-slate-400'>Developed by Gms</p>
            </a> 
        </div>
     </div>
    
    </div>
    </div>
  )
}
