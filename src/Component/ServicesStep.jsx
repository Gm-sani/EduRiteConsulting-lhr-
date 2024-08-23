import React from 'react'
import form1pic from './pics/form_1.png'
import docPayment2pic from './pics/doc_payment_2.png'
import approval3pic from './pics/approval_3.png'
export default function ServicesStep() {
  return (
    <div className='pb-4'>
      <p className='text-[0.85rem] text-red-600 font-semibold text-center mt-5'>PROCESS OVERVIEW</p>
      <p className='text-[2rem] font-semibold mt-[0.1rem] tracking-wide text-center'>Unforgettable Getaways Escaping Routine</p>
    <div className='mt-10  lg:flex md:flex-row gap-12 justify-center'>
       {/* ----------------------------first------------------------------------ */}
        <div className=''>
            <div className=' border-2 cursor-pointer  border-dotted p-3 border-red-300 hover:border-red-600 rounded-full m-auto w-fit'>
            <img src={form1pic} alt="form1pic" className='h-[5rem]  bg-white p-2  rounded-full'/>
            </div>
            <p className='text-[1.2rem] font-semibold text-center mt-4'>Apply Online</p>
            <p className='text-[0.85rem] mt-2 text-slate-600 w-[17rem]  lg:mx-[0rem] mx-[4.7rem] text-center '>Submit Your Visa Application with Our Online Form</p>
        </div>
        {/* ----------------------------second------------------------------------ */}
        <div className='lg:mt-[0rem] mt-[1.7rem]'>
            <div className=' border-2 cursor-pointer  border-dotted p-3 border-red-300 hover:border-red-600 rounded-full m-auto w-fit'>
            <img src={docPayment2pic} alt="docPayment2pic" className='h-[5.2rem]  bg-white p-1  rounded-full'/>
            </div>
            <p className='text-[1.2rem] font-semibold text-center mt-4'>Submit Document</p>
            <p className='text-[0.85rem] mt-2 text-slate-600 w-[17rem] lg:mx-[0rem] mx-[4.7rem] text-center'>Submit Required Documents and Payments for Visa</p>
        </div>
             {/* ----------------------------second------------------------------------ */}
        <div className='lg:mt-[0rem] mt-[1.7rem]'>
            <div className=' border-2 cursor-pointer  border-dotted p-3 border-red-300 hover:border-red-600 rounded-full m-auto w-fit'>
            <img src={approval3pic} alt="approval3pic" className='h-[5.2rem]  bg-white p-1  rounded-full'/>
            </div>
            <p className='text-[1.2rem] font-semibold text-center mt-4'>Receive Visa</p>
            <p className='text-[0.85rem] mt-2 text-slate-600 w-[17rem] lg:mx-[0rem] mx-[4.7rem] text-center'>Receive Your Approved Visa Quickly and Easily</p>
        </div>
    </div>
    </div>
  )
}
