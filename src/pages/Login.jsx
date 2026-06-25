import React from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import NewsPart from '../layouts/NewsPart'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Login1 from '../assets/login.png'
import Flex from '../Components/Flex'
import Heading from '../Components/Heading'
import { Form } from 'react-router-dom'
import Button from '../Components/Button'
const Login = () => {
  return (
    <>

      <section className='py-[140px]' >
         <Container>
       <Flex className={` gap-x-[130px] justify-evenly items-center`} >
       <div>    <Image src={Login1} /></div>
       <div>
         <Heading text='Log in to Exclusive' className={`font-medium`} />
          <p  className='font-poppins text-[16px]   font-normal text-[rgb(0,0,0)] pt-5 pb-[40px]' > Enter your details below</p>
          <Form>
            <input  className='w-full outline-0 border-b-2 border-[rgba(0,0,0,0.10)]' type="text" placeholder='Email or Phone Number' />
            <input  className='w-full outline-0 border-b-2 border-[rgba(0,0,0,0.10)] pt-16' type="text" placeholder='Password'   />
          </Form>
         <Flex className={`items-center justify-around pt-[50px]`}>
                <Button text={`Log In`}/>
                <p className='text-poppins text-red  text-4 font-normal' >Forget Password?</p>
         </Flex>
       </div>
      
       </Flex>
     
    </Container>
      </section>
   
    </>
  )
}

export default Login
