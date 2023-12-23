import React from 'react'
import { FaAngular } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";


const TechFrontend = () => {
  return (
    <div>
        <div className='flex flex-wrap mt-12 justify-evenly'>
           <FaAngular className=' mx-2 text-white text-[7rem]' />
           <SiReact className=' mx-2 text-white text-[7rem]' />
           <SiTypescript className=' mx-2 text-white text-[7rem]' />
           <RiVuejsFill className=' mx-2 text-white text-[7rem]' />
           <FaHtml5 className=' mx-2 text-white text-[7rem]' />

        </div>
    </div>
  )
}

export default TechFrontend