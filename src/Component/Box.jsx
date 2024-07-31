import React, { useState,useRef } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import PhoneIcon from '@mui/icons-material/Phone';
import SchoolIcon from '@mui/icons-material/School';
import IntroPage2 from './IntroPage2';
import emailjs from '@emailjs/browser'

export default function Box(props) {
  return (
    <div>
      <div className='flex gap-36 bg-red-100 py-8 px-8 m-auto w-fit mt-10 rounded-2xl'>
        <div>
            {/* ----------------------------1_1---------------------------- */}
        <div className='flex gap-3'>
            <div className=''>
                <PhoneIcon className='p-[0.1rem] text-red-600'/>
            </div>
            <div>
                <p className='text-sm text-slate-600'>Requesting A Call:</p>
                <p  className='text-sm text-slate-600'>{props.phone}</p>
            </div>
        </div>
        {/* ----------------------------------1_2-------------------------------- */}
        <div className='flex gap-3 mt-5'>
            <div className=''>
                <MailIcon className='p-[0.1rem] text-red-600'/>
            </div>
            <div>
                <p className='text-sm text-slate-600'>E-mail</p>
                <p  className='text-sm text-slate-600'>{props.email}</p>
            </div>
        </div>
        {/* ------------------------------1_3------------------------------- */}
        <div className='flex gap-3 mt-5'>
            <div className=''>
                <LocationOnIcon className='p-[0.1rem] text-red-600'/>
            </div>
            <div>
                <p className='text-sm text-slate-600  '>Location</p>
                <p  className='text-sm text-slate-600 w-[16rem]'>{props.location}</p>
            </div>
        </div>
        {/* ------------------------------1_4------------------------------- */}
        <div className='flex gap-3 mt-5'>
            <div className=''>
                <AccessTimeFilledIcon className='p-[0.1rem] text-red-600'/>
            </div>
            <div>
                <p className='text-sm text-slate-600'>Monday-Saturday</p>
                <p  className='text-sm text-slate-600'>9 am - 6 pm</p>
            </div>
        </div>
        </div>
        
        <div>
            <img src={props.pic} alt="" className='mt-3 h-[13rem] rounded-xl'/>
        </div>
    </div>
    </div>
  )
}



export function Box1(props) {
    return (
      <div>
        <div className='flex gap-36 bg-red-100 py-8 px-8 m-auto w-fit mt-10 rounded-2xl'>
          <div>
              {/* ----------------------------1_1---------------------------- */}
          <div className='flex gap-3'>
              <div className=''>
                  <SchoolIcon className='mt-[0.5rem] text-red-600'/>
              </div>
              <div>
                  <p className='text-[1.3rem] pt-[0.15rem] tracking-wide text-slate-800 font-semibold'>List Of Universities</p>    
              </div>
          </div>
          {/* ----------------------------List of universitiies---------------------------- */}
          <div>
            <ul className='list-disc pt-2 pl-7  text-slate-600'>
                <li className='text-[0.95rem] pt-1 cursor-pointer hover:text-black'>{props.uni1}</li>
                <li className='text-[0.95rem] pt-1 cursor-pointer hover:text-black'>{props.uni2}</li>
                <li className='text-[0.95rem] pt-1 cursor-pointer hover:text-black'>{props.uni3}</li>
                <li className='text-[0.95rem] pt-1 cursor-pointer hover:text-black'>{props.uni4}</li>
                <li className='text-[0.95rem] pt-1 cursor-pointer hover:text-black'>{props.uni5}</li>
                <li className='text-[0.95rem] pt-1 cursor-pointer hover:text-black'>{props.uni6}</li>
                <li className='text-[0.95rem] pt-1 cursor-pointer hover:text-black'>{props.uni7}</li>
            </ul>
          </div>
          </div>
          
          <div>
              <img src={props.unipic8} alt="" className='mt-3 h-[13rem] rounded-xl'/>
          </div>
      </div>
      </div>
    )
  }



  export function Box2(props) {
    const [namm , setNamm ] = useState("")
    const [email , setEmail ] = useState("")
    const [dob , setDob ] = useState("")
    const [phone , setPhone ] = useState("")
    const [country , setCountry ] = useState("")
    const [degree , setDegree ] = useState("")
    const [nameuni , setNameuni ] = useState(" ")
    const [grade , setGrade ] = useState("")
    const [year , setYear ] = useState("")
    const [address , setAddress ] = useState("")

    const submit = () =>{
        console.log(namm)
        console.log(dob)
        console.log(email)
        console.log(phone)
        console.log(country)
        console.log(degree)
        console.log(nameuni)
        console.log(grade)
        console.log(year)
        console.log(address)
    }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_1n2p32w', 'template_mjnd5wo', form.current, {
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
      <div>
        <IntroPage2 namm={props.title}/>   
        <div className='flex justify-between'>
            <div className='flex-[0.7]  bg-white shadow-black shadow-2xl p-24'>
                <p className='text-[2.1rem] font-semibold '>EDURITE Consulting is your gateway to a successful career if you study {props.title} abroad.</p>
                <p className='text-[1.6rem] font-semibold mt-[4rem] '>Why Do You Wish to Study {props.title} Abroad?</p>
                <p className='text-[1rem] mt-[4rem] text-slate-600'>Many aspiring students have a dream to get their {props.title} degree overseas. Each year, thousands of students choose to study degrees that are recognised around the world, advanced training, and exposure to other countries. EDURITE Consulting is here to help you along the way and make sure you receive the most education possible.</p>
                <p className='text-[1.6rem] font-semibold mt-[4rem] '>Advantages of Studying {props.title} Abroad </p>              
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>World-Class Education:</b>{props.title} degrees are available in several countries and are popular around the world. Georgian, Russian, Kazakhstan and Chinese educational institutions are known for their modern teaching strategies and challenging courses.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>Normally cost tuition:</b>Getting an {props.title} abroad may prove to be more economical as compared to attending private medical schools in Pakistan and other nations. Many universities give high-quality education at much lower prices.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>No Entrance Exam: </b>To enroll in MBBS programmes, students in a number of countries are not required to pass entrance tests such as NEET, which improves and increases accessibility of the admissions process.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>International Exposure:</b>Studying abroad gives students the chance to interact with classmates from all beginnings and cultures, expanding their view on the world and improving their communication abilities.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>Advanced Infrastructure:</b> Modern laboratories and state-of-the-art facilities are features of many international medical universities, giving students the opportunity to interact with the newest developments in medicine.</p> 
                    <p className='text-[1.6rem] font-semibold mt-[4rem] '>Best Places to Study {props.title} Abroad </p>
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>{props.ctr1}:</b> {props.ctr1} is a popular place for {props.title} candidates due to its inexpensive living costs and high-quality education system. English-language programmes are available at universities such as the Columbia University and Washigton State University, that have been recognised by major international medical organisations.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>{props.ctr2}:</b> {props.ctr2} universities like University of London and Brimingham University attract students from all over the world because they place a high value on research and clinical practice.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>{props.ctr3}:</b>  The MBBS programmes in {props.ctr3} provide a unique combination of modern and traditional medicine. Renowned universities for {props.title} education.</p> 
                    <p className='text-[1.6rem] font-semibold mt-[4rem] '>What EDURITE Consulting Can Do to Help </p>
                    <p className='text-[1.02rem] mt-5  text-slate-900'>We at EDURITE Consulting are aware of the difficulties associated with studying abroad. Comprehensive support services are provided by our dedicated staff of professionals to ensure an easy transition and a successful academic career.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>Personalised Counselling :</b> Based on your academic profile, financial situation, and personal preferences, our knowledgeable advisers help you in selecting the ideal nation and university</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>Admission Assistance:</b>  To ensure a hassle-free admissions procedure, we help you with every step of the application process, from filling out forms to collecting needed documents.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>Visa Processing:</b>  It can be difficult to understand the requirements for a visa. Our staff helps you with the visa application procedure and makes sure all paperwork is timely and in order.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>Financial Guidance:</b> To help you in successfully managing your funds during your study period of time, we provide support on budgeting, educational institutions loans, and scholarships.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>Pre-Departure Orientation:</b> We hold pre-departure seminars that cover important subjects such as culture, transportation, accommodation, and safety to help you get ready for life in another country.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>Post-Arrival Support:</b>After you arrive at your destination, we continue to be of help. We help with accommodation reservations, airport transfers, and adjusting to your new surroundings.</p> 
                    <p className='text-[1.6rem] font-semibold mt-[4rem] '>Why Choose EDURITE Consulting? </p>
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>Experience and Expertise:</b>With years of experience in the education consultancy field, we have successfully placed hundreds of students in top universities worldwide.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>Trusted Partnerships</b> We have established strong relationships with reputed medical universities, ensuring you receive quality education and recognition.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>Student-Centric Approach:</b>Your success is our priority. We offer personalized services tailored to meet the unique needs of each student.</p> 
                    <p className='text-[1.02rem] mt-5  text-slate-900'><b>Transparent Processes:</b>At EDURITE Consulting, we believe in transparency. We keep you informed at every step, ensuring there are no hidden costs or surprises.</p> 
                    <p className='text-[1.6rem] font-semibold mt-[4rem] '>Start Your {props.title} Journey with EDURITE Consulting</p>
                    <p className='text-[1.02rem] mt-5  text-slate-900'>Starting an {props.title} programme abroad is a big decision. You may feel secure understanding that you have chosen the best choice for your future when EDURITE Consulting is on your side. To find out more about our services and how we can support you in realising your goals for a {props.title} profession, get in touch with us right now.</p> 
                
            </div>
            {/* ----------------------------Eligibility form----------------------------------------- */}
            <div className='flex-[0.3]'>
            <div>
        <p className='text-[0.85rem] text-red-600 text-center font-semibold mt-[5.5rem]'>Eligibility form</p>
        <p className='text-[2.1rem] text-red-800 tracking-wide font-semibold text-center'>Check your Eligibility </p>
        

        
        <div className='p-7 mt-5  rounded-2xl '>
            {/* -------------------------------------first-------------------------------------- */}
            {/* --------------------------form starting----------------------------------- */}
            <form ref={form} onSubmit={sendEmail}>
           
            <div className='flex gap-5'>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Your Name</p>
            <input name="user_name"  onChange={(e)=>{setNamm(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-transparent  text-sm rounded-3xl text-gray-500 ' value={namm}/>
            </div>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Your Date of Birth</p>
            <input name="user_dob" onChange={(e)=>{setDob(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-transparent text-xs rounded-3xl text-gray-500' value={dob}/>
            </div>
            </div>
             {/* -------------------------------------second-------------------------------------- */}
            <div className=' mt-5 flex gap-5'>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Your Email</p>
            <input name="user_email"  onChange={(e)=>{setEmail(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-transparent text-sm rounded-3xl text-gray-500 ' value={email}/>
            </div>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Your Phone</p>
            <input name="user_phone" onChange={(e)=>{setPhone(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-transparent text-xs rounded-3xl text-gray-500' value={phone}/>
            </div>
            </div>
             {/* -------------------------------------third-------------------------------------- */}
            <div className=' mt-5 flex gap-5'>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Desire Country</p>
            <input  name="user_country" onChange={(e)=>{setCountry(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-transparent text-sm rounded-3xl text-gray-500 ' value={country}/>
            </div>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Your Degree</p>
            <input name="user_degree" onChange={(e)=>{setDegree(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-transparent text-xs rounded-3xl text-gray-500' value={degree}/>
            </div>
            </div>
            {/* -------------------------------------forth-------------------------------------- */}
            <div className='mt-5 flex gap-5'>
            {/* <div>
            <p className='text-sm text-red-600 font-semibold '> Name of Institiue</p>
            <input  onChange={(e)=>{setNameuni(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-white text-sm rounded-3xl text-gray-500 ' value={nameuni}/>
            </div> */}
            <div>
            <p className='text-sm text-red-600 font-semibold '> Year</p>
            <input name="user_year" onChange={(e)=>{setYear(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-transparent text-sm rounded-3xl text-gray-500 ' value={year}/>
            </div>
            <div>
            <p className='text-sm text-red-600 font-semibold '>Grade/marks</p>
            <input name="user_grade" onChange={(e)=>{setGrade(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-transparent text-xs rounded-3xl text-gray-500' value={grade}/>
            </div>
            
            </div>
            {/* -------------------------------------forth-------------------------------------- */}
            {/* <div className='mt-5 flex gap-5'>
            
            <div>
            <p className='text-sm text-red-600 font-semibold '>Your Address</p>
            <input onChange={(e)=>{setAddress(e.target.value)}} type='text' className='hover:shadow-md p-3 mt-2 bg-white text-xs rounded-3xl text-gray-500' value={address}/>
            </div>
            </div> */}
            {/* --------------------------submit------------------------- */}
            <div className='w-full p-3 mt-5 bg-red-800 cursor-pointer hover:bg-red-500 text-sm rounded-3xl text-center'>
            <input value="Send" type='submit' onClick={submit} className='text-xs text-white  '/>
            </div>
            </form>
        </div>
       
     </div>
            </div>
        </div>
      </div>
    )
  }
