import React from 'react'

const Button = ({className,text}) => {
  return (
    <button className={`py-6 px-12 bg-red rounded-sm font-poppins font-medium text-[16px] leading-4 text-white ${className}  border border-transparent hover:bg-transparent hover:border-red   hover:text-red duration-300  `} >{text}</button>
  )
}

export default Button
