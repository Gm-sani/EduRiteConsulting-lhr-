import React from 'react'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import quote from './pics/quote.png'
import reviewpic1 from './pics/Babu1Review.jpeg'
import reviewpic2 from './pics/Lemon2Review.jpg'
import reviewpic3 from './pics/Akash3Review.jpg'
import reviewpic4 from './pics/Mustafa4reviewpic.jpg'
import reviewpic5 from './pics/mustiFriend1.jpg'
import reviewpic6 from './pics/mustiFriend2.jpg'
import reviewpic7 from './pics/mustiFriend3.jpg'
import StarRateIcon from '@mui/icons-material/StarRate';
import pak from './pics/pak.png'
import Marquee from "react-fast-marquee";
import Uae from './pics/Uae.png'
import Canada from './pics/Canada.png'
import Saudia from './pics/saudia.jpeg'
import china from './pics/chiina.png'
import italy from './pics/Italy.jpeg'
import france from './pics/france.png'
import sweden from './pics/sweden.png'

export default function Reviews() {
  return (
    <div className='pt-2 h-fit pb-6  mt-3'>
      <p className='text-[0.85rem] text-red-600 font-semibold text-center mt-4'>TESTIMONIAL</p>
      <p className='text-[2rem] font-semibold mt-[0.1rem] text-center tracking-wide'>Customer Feedback</p>
      <Marquee pauseOnHover gradient >
      <div className='flex gap-12 justify-center'>
        {/* ---------------------------------box 1-------------------------- */}
        <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={quote} alt="" className='h-[3rem] m-auto' />
            <p className='text-sm text-center pt-3 w-[15rem]'>Exceptional service! EduRite Consulting guided me through the entire process, making it seamless and stress-free. Highly recommend for study visas!</p>
            <img src={reviewpic1} alt="" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <div className='flex mt-3 justify-center'>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
            </div>
            <p className='text-sm mt-1'>Syed Mustaneer</p>
            <div className='flex gap-2 justify-center mt-1'>
                <img src={Uae} alt="" className='h-[1.7rem] w-[1.7rem] rounded-full '/>
                <p className='text-[0.8rem] mt-[0.2rem]'>UAE</p>
            </div>
        </div>
         {/* ---------------------------------box 2-------------------------- */}
         <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={quote} alt="" className='h-[3rem] m-auto' />
            <p className='text-sm text-center pt-3 w-[15rem]'>Outstanding support! EduRite Consulting made my study visa process effortless with their expertise and professionalism. Highly recommend their services!</p>
            <img src={reviewpic2} alt="" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <div className='flex mt-3 justify-center'>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
            </div>
            <p className='text-sm mt-1'>Syed Muhammad</p>
            <div className='flex gap-2 justify-center mt-1'>
                <img src={china} alt="" className='h-[1.7rem] w-[1.7rem] rounded-full '/>
                <p className='text-[0.8rem] mt-[0.2rem]'>China</p>
            </div>
        </div>
         {/* ---------------------------------box 3-------------------------- */}
         <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={quote} alt="" className='h-[3rem] m-auto' />
            <p className='text-sm text-center pt-3 w-[15rem]'>Excellent service! EduRite Consulting simplified my study visa application, providing expert guidance and support. Highly recommend their consultancy!.</p>
            <img src={reviewpic3} alt="" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <div className='flex mt-3 justify-center'>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
            </div>
            <p className='text-sm mt-1'>Akasha Hameed</p>
            <div className='flex gap-2 justify-center mt-1'>
                <img src={Saudia} alt="" className='h-[1.7rem] w-[1.7rem] rounded-full '/>
                <p className='text-[0.8rem] mt-[0.2rem]'>Saudia</p>
            </div>
        </div>
        {/* ---------------------------------box 4-------------------------- */}
        <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={quote} alt="" className='h-[3rem] m-auto' />
            <p className='text-sm text-center pt-3 w-[15rem]'>Superb service! EduRite Consulting provided clear guidance and support throughout my study visa application. Highly recommend their expertise and professionalism.</p>
            <img src={reviewpic4} alt="" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <div className='flex mt-3 justify-center'>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
            </div>
            <p className='text-sm mt-1'>Mustafa</p>
            <div className='flex gap-2 justify-center mt-1'>
                <img src={Canada} alt="" className='h-[1.7rem] w-[1.7rem] rounded-full '/>
                <p className='text-[0.8rem] mt-[0.2rem]'>Canada</p>
            </div>
        </div>
        {/* ---------------------------------box 5-------------------------- */}
        <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={quote} alt="" className='h-[3rem] m-auto' />
            <p className='text-sm text-center pt-3 w-[15rem]'>EduRite offers exceptional guidance and support, making educational dreams a reality with their expertise and personalized approach. Highly recommended!</p>
            <img src={reviewpic5} alt="" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <div className='flex mt-3 justify-center'>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
            </div>
            <p className='text-sm mt-1'>Arshad</p>
            <div className='flex gap-2 justify-center mt-1'>
                <img src={italy} alt="" className='h-[1.7rem] w-[1.7rem] rounded-full '/>
                <p className='text-[0.8rem] mt-[0.2rem]'>Italy</p>
            </div>
        </div>
        {/* ---------------------------------box 6-------------------------- */}
        <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500'>
            <img src={quote} alt="" className='h-[3rem] m-auto' />
            <p className='text-sm text-center pt-3 w-[15rem]'>EduRite transforms educational aspirations into reality with expert guidance and tailored support, making every student's journey exceptional. Truly outstanding!</p>
            <img src={reviewpic6} alt="" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <div className='flex mt-3 justify-center'>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
            </div>
            <p className='text-sm mt-1'>Abdullah shah</p>
            <div className='flex gap-2 justify-center mt-1'>
                <img src={france} alt="" className='h-[1.7rem] w-[1.7rem] rounded-full '/>
                <p className='text-[0.8rem] mt-[0.2rem]'>France</p>
            </div>
        </div>
        {/* ---------------------------------box 7-------------------------- */}
        <div className='p-6 mt-8 bg-white text-center shadow-xl hover:border-b-2 hover:border-b-red-500 mr-10'>
            <img src={quote} alt="" className='h-[3rem] m-auto' />
            <p className='text-sm text-center pt-3 w-[15rem]'>EduRite excels in offering thoughtful, personalized guidance for students, ensuring a smooth and successful path to academic achievement.</p>
            <img src={reviewpic7} alt="" className='h-[4.5rem] rounded-full mt-6 m-auto'/>
            <div className='flex mt-3 justify-center'>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
                <StarRateIcon className='p-1 text-orange-400'/>
            </div>
            <p className='text-sm mt-1'>Muneeb</p>
            <div className='flex gap-2 justify-center mt-1'>
                <img src={sweden} alt="" className='h-[1.7rem] w-[1.7rem] rounded-full '/>
                <p className='text-[0.8rem] mt-[0.2rem]'>Sweden</p>
            </div>
        </div>
        
      </div>
      </Marquee>
    </div>
  )
}
