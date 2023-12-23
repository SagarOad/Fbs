import React from 'react'
import { SiAdobeillustrator } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeaftereffects } from "react-icons/si";


const TechDesign = () => {
  return (
    <div>
        <div className="flex flex-wrap mt-12 justify-evenly">
        <SiAdobeillustrator className=" mx-2 text-white text-[7rem]" />
        <CgFigma className=" mx-2 text-white text-[7rem]" />
        <SiAdobeaftereffects className=" mx-2 text-white text-[7rem]" />
        <SiAdobephotoshop className=" mx-2 text-white text-[7rem]" />
      </div>
    </div>
  )
}

export default TechDesign