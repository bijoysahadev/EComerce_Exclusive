import React from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";
import { FaArrowRight } from "react-icons/fa";
const PreviousArrow = ({onClick,style,className}) => {
  return (
<div 
      className={`${className}  !block !h-[46px] !w-[46px] !bg-white !text-black  !flex !items-center  !justify-center   !absolute  !-top-[100px] !left-[1050px]  !rounded-full !z-30`}
      style={{ ...style, }}
      onClick={onClick}
    >
   <FaArrowRight />
    </div>
  )
}

export default PreviousArrow