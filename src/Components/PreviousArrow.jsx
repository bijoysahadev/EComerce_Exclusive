import React from 'react'
import { HiArrowSmallRight } from "react-icons/hi2";
const PreviousArrow = ({onClick,style,className}) => {
  return (
<div 
      className={`${className} `}
      style={{ ...style, display: "block", background: "green",  }}
      onClick={onClick}
    >
      <HiArrowSmallRight />
    </div>
  )
}

export default PreviousArrow