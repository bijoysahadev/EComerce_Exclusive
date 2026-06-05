import React from 'react'

const Heading = ({text,className}) => {
  return (
   <h1 className={` text-4xl text-black font-semibold font-inter     ${className}`}>{text}</h1>
  )
}

export default Heading
