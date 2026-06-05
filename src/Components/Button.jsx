import React from 'react'

const Button = ({className,text}) => {
  return (
    <button className={`py-6 px-12 bg-red rounded-sm font-poppins font-medium text-[16px] leading-4 text-white ${className}`} >{text}</button>
  )
}

export default Button
