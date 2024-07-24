import React from 'react'
import whatsapppic from './pics/whatsapp1.png'

export default function Whatsapp() {
  return (
   
    <div className="fixed bottom-1 right-1 w-fit ">
    <a
      href="https://wa.me/923002488996" // Replace with your WhatsApp number
      className="p-4 rounded-full "
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={whatsapppic}
        alt="WhatsApp"
        className="w-16 h-16"
      />
    </a>
    </div>
    
    
  )
}
