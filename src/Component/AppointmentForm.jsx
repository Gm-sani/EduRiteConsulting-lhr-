import React, { useEffect, useState , useRef } from 'react'
import contactpic from './pics/Contactpic_1bgrmv.png'
import appointPic from './pics/AppointPic.png'
import gsap from 'gsap';
import emailjs from '@emailjs/browser'

export default function AppontmentForm(props) {
    const [namm , setNamm ] = useState("")
    const [dob , setDob ] = useState("")
    const [email , setEmail ] = useState("")
    const [phone , setPhone ] = useState("")
    const [lvledu , setLvledu ] = useState("")
    const [fldStd , setFldStd ] = useState("")
    const [destination , setDestinaion ] = useState("")
    const [date , setDate ] = useState(" ")
    const [time , setTime ] = useState("")
    const [mode , setMode ] = useState("")
    const [question , setQuestion ] = useState("Any Question")
    const submit = () =>{
        console.log(namm)
        console.log(dob)
        console.log(email)
        console.log(phone)
        console.log(lvledu)
        console.log(fldStd)
        console.log(destination)
        console.log(date)
        console.log(time)
        console.log(mode)
        console.log(question)
    }

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_1n2p32w', 'template_t8dc5ql', form.current, {
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

    useEffect(()=>{
      const tl =gsap.timeline();
  
      tl.to("#bag",{
          x:-220,
          opacity:1,
          duration:3,
          yoyo:true,
          repeat:-1,
      })
     
  
  },[])
    
  return (
    <div className='flex justify-center gap-8 py-5'>
     <div id='bag' className='mt-20'>
        <img src={appointPic} alt="appointPic" className='hidden md:block'/>
     </div>
     {/* --------------------------------form-------------------------------- */}
     <div>
        <p className='text-[0.85rem] text-red-600 font-semibold'>{props.namm}</p>
        <p className='text-[2.1rem] text-red-800  font-semibold'>Let Your Study Abroad Aspirations</p>
        <p className='text-[2.1rem] mt-[-0.7rem] text-red-800  font-semibold'>Guide You</p>

        <form ref={form} onSubmit={sendEmail}>

        <div className='p-7 mt-3 bg-white rounded-2xl shadow-md w-[27rem]'>
            {/* -------------------------------------first-------------------------------------- */}
            <div className='flex gap-16 mt-2'>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Your Name</p>
            <input name="user_name"  onChange={(e)=>{setNamm(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-white text-xs rounded-3xl text-gray-500 ' value={namm}/>
            </div>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Date of Birth</p>
            <input name="user_dob" onChange={(e)=>{setDob(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-white text-xs rounded-3xl text-gray-500' value={dob}/>
            </div>
            </div>
            {/* -------------------------------------second-------------------------------------- */}
            <div className='flex gap-16 mt-3'>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Your Email</p>
            <input name="user_email" onChange={(e)=>{setEmail(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-white text-xs rounded-3xl text-gray-500 ' value={email}/>
            </div>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Your Phone</p>
            <input name="user_phone" onChange={(e)=>{setPhone(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-white text-xs rounded-3xl text-gray-500' value={phone}/>
            </div>
            </div>
            {/* -------------------------------------third-------------------------------------- */}
            <div className='flex gap-16 mt-3'>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Current Level of Education</p>
            <input name="user_lvledu" onChange={(e)=>{setLvledu(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-white text-xs rounded-3xl text-gray-500 ' value={lvledu}/>
            </div>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Intended Field</p>
            <input name="user_field" onChange={(e)=>{setFldStd(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-white text-xs rounded-3xl text-gray-500' value={fldStd}/>
            </div>
            </div>
            {/* -------------------------------------fourth-------------------------------------- */}
            <div className='flex gap-16 mt-3'>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Preferred Destination:</p>
            <input name="user_dest" onChange={(e)=>{setDestinaion(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-white text-xs rounded-3xl text-gray-500 ' value={destination}/>
            </div>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Preferred Date:</p>
            <input name="user_date" onChange={(e)=>{setDate(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-white text-xs rounded-3xl text-gray-500' value={date}/>
            </div>
            </div>
            {/* -------------------------------------fivth-------------------------------------- */}
            <div className='flex gap-16 mt-3'>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Preferred Time</p>
            <input name="user_time" onChange={(e)=>{setTime(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-white text-xs rounded-3xl text-gray-500 ' value={time}/>
            </div>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Mode of Consultation (In-person/Online)</p>
            <input name="user_mode" onChange={(e)=>{setMode(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-white text-xs rounded-3xl text-gray-500' value={mode}/>
            </div>
            </div>
            
             {/* -------------------------------------sixth-------------------------------------- */}
             <div className='mt-6'>
            <p className='text-sm text-red-600 font-semibold '>Questions or Concerns:</p>
            <textarea name="user_quest" onChange={(e)=>{setQuestion(e.target.value)}} value={question} id="" className='hover:shadow-md text-gray-500 w-full p-3 mt-2 bg-white text-xs rounded-3xl'></textarea>
            </div>
            <div className='w-full p-3 mt-3 bg-red-800 cursor-pointer hover:bg-red-500 text-sm rounded-3xl text-center'>
            <input value="Send" type='submit' onClick={submit} className='text-xs text-white  '/>
            </div>
        </div>
        </form>
     </div>
    </div>
  )
}
