import React from 'react'

const ListItem = ({text,className}) => {
  return (
     <li className={`relative cursor-pointer text-base text-black font-normal font-poppins
      before:content-[''] before:absolute before:left-0 before:-bottom-2 
      before:h-[2px] before:w-0 before:bg-black 
      before:transition-all before:duration-500
      hover:before:w-full  ${className}`}>{text}</li>
  )
}

export default ListItem
