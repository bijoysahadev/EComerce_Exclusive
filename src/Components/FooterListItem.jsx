import React from 'react'
import ListItem from './ListItem'

const FooterListItem = ({text,className,}) => {
  return (
    <div>
        
      
         <li className={ `cursor-pointer text-primary font-poppins text-[16px] font-normal leading-[24px] ${className}`} >{text}</li>
    </div>
  )
}

export default FooterListItem
