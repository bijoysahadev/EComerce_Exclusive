import React from 'react'

import Image from '../Components/Image'


const SupportCard = ({title,text,image}) => {
  return (
    <div className='  flex flex-col  items-center justify-center' >
           <Image src={image} />
      <h2  className=  'pt-6 pb-4 text-black text-xl font-poppins font-semibold' >{title}</h2>
      <p  className='font-poppins text-sm text-black font-normal' >{text}</p>
    </div>
  )
}

export default SupportCard