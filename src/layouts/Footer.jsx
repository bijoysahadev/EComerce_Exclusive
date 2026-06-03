import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import Logo2 from '../assets/logo2.png';
import { LuSendHorizontal } from "react-icons/lu";
import FooterListItem from '../Components/FooterListItem';
import FooterStrong from '../Components/FooterStrong';
import { FaFacebookF } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import apple from '../assets/appStore.png'
import qr from '../assets/qrcode.png'
import google from '../assets/googlePlay.png'
import { FaCopyright } from "react-icons/fa";
const Footer = () => {
  return (
   <footer className='bg-black  pt-20  pb-6'>
    <Container>
      <Flex className={`pb-[60px]`} >
    <div className='w-3/12 '>
   <Image src={Logo2} />
   <h4 className='text-xl text-primary font-medium font-poppins py-6'>Subscribe</h4>
   <p className='text-xl text-primary font-base font-poppins'>Get 10% off your first order</p>
   <div className='relative w-[217px] border border-white rounded-[4px]  mt-4'>
               <input className='py-3 pl-4 pr-7 w-full text-white placeholder:text-[12px] font-poppins  font-regular text-white' type="text" placeholder='Enter your email  ' />
           <LuSendHorizontal className='text-white absolute top-1/2 -translate-y-1/2 right-[5px] '  />
             </div>
    </div>
    <div className='w-3/12 '>
    <FooterStrong text={`Support`}/>
  
     <ul className='flex flex-col gap-y-4'>
         <FooterListItem text={`111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.`}/>
         <FooterListItem text={`exclusive@gmail.com`}/>
         <FooterListItem text={`+88015-88888-9999`}/>
       
       
      
       </ul>
   
   
    </div>
    <div className='w-2/12 '>
     <FooterStrong text={`Account`}/>
      <ul className='flex flex-col gap-y-4'>
         <FooterListItem text={`My Account`}/>
         <FooterListItem text={`Login / Register`}/>
         <FooterListItem text={`Cart`}/>
         <FooterListItem text={`Wishlist`}/>
         <FooterListItem text={`Shop`}/>
       
       
      
       </ul>
    </div>
    <div className='w-2/12 '>
    <FooterStrong text={`Quick Link`}/>
       <ul className='flex flex-col gap-y-4'>
         <FooterListItem text={`Privacy Policy`}/>
         <FooterListItem text={`Terms Of Use`}/>
         <FooterListItem text={`FAQ`}/>
         <FooterListItem text={`Contact`}/>
       
       
       
      
       </ul>

    </div>
    <div className='w-2/12 '>
    <FooterStrong text={`Download App`}/>
      <p className='font-poppins font-medium text-[12px] text-primary leading-[18px]'>Save $3 with App New User Only</p>
      <Flex  className={`justify-between pt-2`}>
          <Image  src={qr}/>
       <div>
          <Image  src={google}/>
      <Image  src={apple}/>
       </div>
      </Flex>
      <Flex className={`gap-x-[24px] pt-6 items-center`}>
        <FaFacebookF  className='text-white text-2xl'/>
      <CiTwitter className='text-white text-2xl' />
       <FaInstagram  className='text-white text-2xl'/>
       <FaLinkedinIn  className='text-white text-2xl' />
      </Flex>
    </div>
      </Flex>
    </Container>
    <div className='flex items-end justify-center gap-x-1 border-t border-[rgba(255,255,255,0.10)] pt-4'>
         <FaCopyright  className='text-[rgba(255,255,255,0.40)] text-xl'/>
      <p className='text-[rgba(255,255,255,0.40)] text-xl' > Copyright Rimel 2022. All right reserved</p>
   
    </div>
   </footer>
  )
}

export default Footer

