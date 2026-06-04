import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
const CategoryList = ({type,text,className,classNameForIcons}) => {
    console.log({type,});
    
  return (
    
         <li className={`list-none font-poppins  text-black font-normal  cursor-pointer ${className} `} >  {text} {type== "true" && <IoIosArrowForward className={`inline-block ml-13  ${classNameForIcons} `} /> } </li>
    
  )
}

export default CategoryList
