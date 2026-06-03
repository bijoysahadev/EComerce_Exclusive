import React from 'react'

const FooterStrong = ({text,className}) => {
  return (
    <strong className={`font-poppins text-white text-xl font-medium inline-block mb-6 ${className} `}>{text}</strong>
  )
}

export default FooterStrong
