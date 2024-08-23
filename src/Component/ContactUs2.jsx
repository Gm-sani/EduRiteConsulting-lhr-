import React, { useRef, useState } from 'react'
import contactpic from './pics/Contactpic_1bgrmv.png'
import emailjs from '@emailjs/browser'
export default function ContactUs2(props) {
    const [namm , setNamm ] = useState("")
    const [phone , setPhone ] = useState("")
    const [adrs , setAdrs ] = useState("")
    const [msg , setMsg ] = useState("")
    const submit = () =>{
        console.log(namm)
        console.log(phone)
        console.log(adrs)
        console.log(msg)
    }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_1n2p32w', 'template_if37pld', form.current, {
          publicKey: 'u-jLSXzFMB5_9c3-j',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    
  return (
    <div className='flex justify-center gap-12 py-5'>
     <div className='mt-9'>
        <img src={contactpic} alt="contactpic" className='h-[30rem] md:block hidden'/>
     </div>
     {/* --------------------------------form-------------------------------- */}
     <div>
        <p className='text-[0.85rem] text-red-600 font-semibold'>{props.namm}</p>
        <p className='text-[2.1rem] text-red-800  font-semibold'>Let Your Study Abroad Aspirations</p>
        <p className='text-[2.1rem] mt-[-0.7rem] text-red-800  font-semibold'>Guide You</p>
        {/* --------------------------form starting----------------------------------- */}
        <form ref={form} onSubmit={sendEmail}>
        <div className='p-7 mt-3 lg:mx-4 min-[315px]:mx-auto bg-white rounded-2xl shadow-md lg:w-[27rem] min-[315rem]:w-fit'>
            {/* -------------------------------------first-------------------------------------- */}
            <div className='lg:flex min-[315rem]:flex-row gap-5'>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Your Name</p>
            <input name="user_name" type='text' onChange={(e)=>{setNamm(e.target.value)}}  className='hover:shadow-md p-3 mt-2 bg-white text-sm rounded-3xl text-gray-500 ' value={namm}/>
            </div>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Your Phone</p>
            <input name="user_phone" type='text' onChange={(e)=>{setPhone(e.target.value)}}  className='hover:shadow-md p-3 mt-2 bg-white text-xs rounded-3xl text-gray-500' value={phone}/>
            </div>
            </div>
                     {/* -------------------------------------second-------------------------------------- */}
            <div className='mt-6'>
            <p  className='text-sm text-red-600 font-semibold '>Your Address</p>
            <input name="user_address" type='text' onChange={(e)=>{setAdrs(e.target.value)}} className=' hover:shadow-md lg:w-full min-[315px]:w-fit p-3 mt-2 bg-white text-sm rounded-3xl text-gray-500' value={adrs}/>
            </div>
             {/* -------------------------------------second-------------------------------------- */}
             <div className='mt-6'>
            <p className='text-sm text-red-600 font-semibold '>Message</p>
            <textarea name="user_message" onChange={(e)=>{setMsg(e.target.value)}} value={msg} id="" className='hover:shadow-md text-gray-500 lg:w-full min-[315px]:w-fit p-3 mt-2 bg-white text-xs rounded-3xl'></textarea>
            </div>
            <div className='lg:w-full min-[315px]:w-6 p-3 mt-3 bg-red-800 cursor-pointer hover:bg-red-500 text-sm text-center rounded-3xl'>
            <input value="Send" type='submit' onClick={submit} className='text-xs text-white text-center '/>
            </div>
        </div>
        </form>
     </div>
    </div>
  )
}
