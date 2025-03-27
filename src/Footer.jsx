import React from 'react'
import logo from './assets/teamcoreblack1 - text.png';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaSquareInstagram } from 'react-icons/fa6';
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="w-full h-auto bg-white flex flex-col justify-between gap-20 px-7 md:px-16 lg:px-32 py-10 md:py-32">
      <div className='flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-start'>
        <div className='flex flex-col gap-2'>
          <h3 className='text-xl lg:text-2xl font-semibold w-72'>Take your designs to new dimensions</h3>
          <p className='text-sm lg:text-md font-light w-72 md:w-96'>
            Let us unleash our creativity and
            expertise to create designs that deliver
            extraordinary results.
          </p>
        </div>
        <div>
          <button className="flex px-6 py-3 bg-[#FF6600] font-semibold text-sm text-white rounded-lg">
            Send Us A Message
          </button>
        </div>
      </div>

      <div className='w-full bg-[#f6f6f6] py-8 px-10 flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-start md:items-center'>
        <div className='text-[#FF6600] flex gap-4'>
          <FaFacebook size={24}/>
          <AiFillTwitterCircle size={24}/>
          <FaSquareInstagram size={24}/>
          <FaLinkedin size={24}/>
        </div>
        <div className='text-sm mt-3 md:mt-0'>
          © 2025 TeamCore. All rights reserved.
        </div>
        <div>
          <img src={logo} alt="Teamcore Logo" className="w-36 h-14" />
        </div>
      </div>
    </div>
  )
}

export default Footer

