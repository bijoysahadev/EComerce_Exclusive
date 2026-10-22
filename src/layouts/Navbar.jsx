import React, { useEffect, useState } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { addbreadcrumb } from '../slices/BreadCrumbSlice';
import Product1 from '../assets/product1.png'
import { DecrementaddtoCart, Deleteaddtocart, IncrementaddtoCart } from '../slices/addToCartSlice';
import { IoMdClose } from "react-icons/io";
import Button from '../Components/Button'
const Navbar = () => {



  let data = useSelector(state => (state.cartitem.cartvalue)
  )
  let allTotal = 0
  data.map(item => {
    allTotal += item.quantity * item.price

  })
  console.log(allTotal);

  let handleIncrement = (item) => {

    dispatch(IncrementaddtoCart(item))


  }
  let handleDeccrement = (item) => {

    dispatch(DecrementaddtoCart(item))

  }
  let handleDelete = (item) => {
    dispatch(Deleteaddtocart(item))
  }
  let [cartdropdown, setCartdropdown] = useState(false)

  let navigate = useNavigate()
  let [dropdown, setDropdown] = useState(false)
  let dispatch = useDispatch()
  let handleUser = () => {
    setDropdown(!dropdown)
  }
  let handleCart = () => {

    // useNavigate("/Cart")
    setCartdropdown(!cartdropdown)


  }
  let handleBreadcumb = (name) => {

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
              {/* <Link onClick={() => handleBreadcumb("Contact")} to='/Contact'><ListItem text={`Contact`} /></Link> */}
              <Link onClick={() => handleBreadcumb("Cart")} to='/Cart'>   <ListItem text={`Cart`} /></Link>
              <Link onClick={() => handleBreadcumb("SignUp")} to='/SignUp'> <ListItem text={`SignUp`} /></Link>
              <Link onClick={() => handleBreadcumb("Products")} to='/Products'> <ListItem text={`Products`} /></Link>
              <Link onClick={() => handleBreadcumb("ProductDetails")} to='/ProductDetails'> <ListItem text={`ProductDetails`} /></Link>
            </ul>
          </div>
          {/*  */}
          <div className='w-4/12  pl-10 relative'>
            <Flex className={`items-center justify-between `}>
              <div className='relative w-[243px] bg-white'>
                <input className='py-1 pl-4 pr-7 w-full placeholder:text-[12px] font-poppins  font-regular' type="text" placeholder='What are you looking for?  ' />
                <IoMdSearch className='absolute top-[9px] right-[10px]  text-base  ' />
              </div>
              <FaRegHeart className='text-lx' />
              <div className='cursor-pointer'  >
                <BsCart3 onClick={handleCart} className='text-lx' />


                {
                  cartdropdown && <div className={` absolute  overflow-y-scroll z-50 top-10 right-8 w-[500px] h-[80vh] bg-white  `} >
                    <ul className=' border-b border-black pb-5 items-center  flex justify-between my-6 mx-6  text-black text-xs font-poppins font-base  ' >
                      <li>Action  : </li>
                      <li>Image  : </li>
                      <li>ProductName  : </li>
                      <li>Quantity  : </li>
                      <li>Subtotal  : </li>
                    </ul>
                    {
                      data.map(item => (
                        <ul className=' border-b border-black pb-5  flex justify-between  items-center my-6 mx-6  text-black text-xs font-poppins font-normal  ' >
                          <li onClick={() => handleDelete(item)} className='hover:bg-red hover:text-white text-xl rounded-full ' ><IoMdClose /></li>
                          <li><  Image className={`w-[50px] h-[50px] `} src={item.image} /> </li>
                          <li> {item.title.substring(0, 12)}  : </li>
                          <li className='border border-black p-8 text-center' >
                            <button onClick={() => handleDeccrement(item)} className='mr-2' >-</button>
                            <button>{item.quantity} </button>
                            <button onClick={() => handleIncrement(item)} className='ml-2' > + </button>
                          </li>
                          <li> $ {item.price * item.quantity}  </li>
                        </ul>
                      ))

                    }
                    <h1 className='absolute bottom-5 right-5 font-poppins text-sm font-bold' >Total : $ {allTotal}</h1>
                 {
                  data.length>0?<div className='flex gap-3 justify-center items-center' >
                    <Link to={`/cart`} >  <Button  className={`!py-2 !px-2`} text={`View Cart`} /></Link>
                 <Link>   <Button className={`text-sm !py-2 !px-2`}  text={`Checkout`} /></Link>
                  </div> : <h1 className=' font-poppins text-red text-center' >Cart is empty</h1>
                 }
                  </div>
                }

              </div>
              <div onClick={handleUser} className='w-[25px] h-[25px] rounded-full flex justify-center items-center bg-red p-2 ' >
                <FaUser className='text-white ' />
              </div>
              {
                dropdown && <div className=' z-100 w-[200px] py-[20px] absolute top-full right-5 bg-red-500 ' >
                  <ul>
                    <li>Login</li>
                    <li>Regstration</li>

                  </ul>
                </div>
              }
            </Flex>
          </div>
          {/*  */}
        </Flex>
      </Container>
    </nav>
  )
}

export default Navbar
