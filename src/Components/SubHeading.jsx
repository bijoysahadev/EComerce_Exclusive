import React from 'react'

const SubHeading = ({tittle,className1,className2}) => {
  return (
    <div className={`flex items-center   ${className2} ` }>
       <div className='w-[20px] h-[40px] bg-red rounded-sm'></div>
       <p className={`text-base text-red font-semibold font-poppins ${className1} `} >{tittle}</p>
    </div>
  )
}

export default SubHeading
