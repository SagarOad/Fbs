import React from 'react'
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";
import { SiSwift } from "react-icons/si";


const TechApps = () => {
  return (
    <div>
        <div className='flex flex-wrap mt-12 justify-evenly'>
        <DiAndroid className=' mx-2 text-white text-[7rem]' />
        <FaApple className=' mx-2 text-white text-[7rem]' />
        <SiReact className=' mx-2 text-white text-[7rem]' />
        <SiFlutter className=' mx-2 text-white text-[7rem]' />
        <SiSwift className=' mx-2 text-white text-[7rem]' />
        <TbBrandKotlin className=' mx-2 text-white text-[7rem]' />

        </div>
    </div>
  )
}

export default TechApps