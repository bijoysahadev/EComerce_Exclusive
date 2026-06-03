import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import Flex from './Flex';
const Language = () => {
  return (
   <>
   <Flex className={`gap-x-1`} >
    <button className='text-sm text-primary font-normal font-poppins '> English </button>
    <MdKeyboardArrowDown className='text-primary' />
   </Flex>
   </>
 
  )
}

export default Language
