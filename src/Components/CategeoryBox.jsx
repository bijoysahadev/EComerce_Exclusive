import React from 'react'
const CategeoryBox = ({text,className,icon}) => {
  return (
    <div    className= '   group  cursor-pointer hover:bg-[#DB4444] hover:border-transparent  duration-300 w-[170px] h-[145px]  flex items-center justify-center  flex-col rounded-sm border border-[rgba(0,0,0,0.30)]' >
      <div className='text-4xl text-black group-hover:text-white transition-colors' > {icon}</div>
      <p  className=' group-hover:text-white text-base tex-black font-poppins font-normal pt-4'  >{text}</p>
    </div>
    
  )
}

export default CategeoryBox