import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import Logo from '../assets/logo.png';
import ListItem from '../Components/ListItem';
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className='pt-10 pb-4'>
        <Container>
           <Flex >
             <div className='w-3/12 ' >
            <Image src={Logo}/>
             </div>
            <div className='w-5/12 '> 
            <ul className='flex gap-x-12 cursor-pointer before relative '>
            <ListItem text={`Home`}  />
            <ListItem text={`Contact`}  />
            <ListItem text={`About`}  />
            <ListItem text={`Sign Up`} />
            </ul>
                </div>
            <div  className='w-4/12  pl-10'> 
            <Flex className={`items-center justify-between `}>
                 <div className='relative w-[243px] bg-white'>
             <input className='py-1 pl-4 pr-7 w-full placeholder:text-[12px] font-poppins  font-regular' type="text" placeholder='What are you looking for?  ' />
             <IoMdSearch className='absolute top-[9px] right-[10px]  text-base  ' />
           </div>
           <FaRegHeart className='text-lx'/>
           <BsCart3  className='text-lx' />
            </Flex>
            </div>
           </Flex>
            </Container>    
    </nav>
  )
}

export default Navbar
