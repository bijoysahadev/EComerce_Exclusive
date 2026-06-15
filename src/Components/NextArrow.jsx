import React from 'react'
import { FaArrowRight } from "react-icons/fa";
const NextArrow = ({className,style,onClick}) => {
  return (
  <div
      className={`${className}  !bg-white   !h-[46px] !w-[46px] !block !text-black  !rounded-full  !absolute !-top-[100px] !right-0  !text-white  !flex !items-center !justify-center` }
      style={{ ...style,   }}
      onClick={onClick}
    ><FaArrowRight />
    </div>
  )
}

export default NextArrow