import React from 'react'

import Container from './Container'
import Image from './Image'
const SupportComponent = ({tittle,text,image}) => {
  return (
  
  <>
       
        <div  className='w-[249px]  bg-red-500   flex flex-col items-center justify-center' >
             <Image  src={image} />
        <h3  className=' pt-6 pb-5  text-xl text-black font-poppins font-semibold'  >{tittle}</h3>
        <p  className='font-poppins font-normal  text-black  text-[14px]' >{text}</p>
        </div>
        
  </>
 
  )
}

export default SupportComponent