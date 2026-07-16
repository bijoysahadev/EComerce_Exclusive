import React, { useState } from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import Logo from '../assets/logo.png';
import ListItem from '../Components/ListItem';
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addbreadcrumb } from '../slices/BreadCrumbSlice';
const Navbar = () => {
  let navigate = useNavigate()
  let [dropdown, setDropdown] = useState(false)
  let dispatch = useDispatch()
  let handleUser = () => {
    setDropdown(!dropdown)
  }
  let handleCart = () => {
    console.log("clicked");
    // useNavigate("/Cart")
    navigate("/Cart")

  }
  let handleBreadcumb = (name) => {
    // console.log(name);
    dispatch(addbreadcrumb(name))

  }
  return (
    <nav className='pt-10 pb-4 border-[rgba(0,0,0,0.10)] border'>
      <Container>
        <Flex >
          <div className='w-3/12 ' >
            <Image src={Logo} />
          </div>
          <div className='w-5/12 '>
            <ul className='flex gap-x-12 cursor-pointer before relative '>
              <Link onClick={() => handleBreadcumb("Home")} to='/'><ListItem text={`Home`} /></Link>
              <Link onClick={() => handleBreadcumb("Contact")} to='/Contact'><ListItem text={`Contact`} /></Link>
              <Link onClick={() => handleBreadcumb("Cart")} to='/Cart'>   <ListItem text={`Cart`} /></Link>
              <Link onClick={() => handleBreadcumb("SignUp")} to='/SignUp'> <ListItem text={`SignUp`} /></Link>
              <Link onClick={() => handleBreadcumb("Products")} to='/Products'> <ListItem text={`Products`} /></Link>
            </ul>
          </div>
          <div className='w-4/12  pl-10 relative'>
            <Flex className={`items-center justify-between `}>
              <div className='relative w-[243px] bg-white'>
                <input className='py-1 pl-4 pr-7 w-full placeholder:text-[12px] font-poppins  font-regular' type="text" placeholder='What are you looking for?  ' />
                <IoMdSearch className='absolute top-[9px] right-[10px]  text-base  ' />
              </div>
              <FaRegHeart className='text-lx' />
              <div className='cursor-pointer' onClick={handleCart} >
                <BsCart3 className='text-lx' />
              </div>
              <div onClick={handleUser} className='w-[25px] h-[25px] rounded-full flex justify-center items-center bg-red p-2 ' >
                <FaUser className='text-white ' />
              </div>
              {
                dropdown && <div className=' z-100 w-[200px] py-[20px] absolute top-full right-5 bg-red-500 ' >
                  <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                  </ul>
                </div>
              }
            </Flex>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
