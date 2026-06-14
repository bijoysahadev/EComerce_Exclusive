import React from 'react'
import Today from './Today'
import Banner from './Banner'
import Container from '../Components/Container'
import SubHeading from '../Components/SubHeading'
import Heading from '../Components/Heading'
import CategeoryBox from '../Components/CategeoryBox'
import Flex from '../Components/Flex'
import { FaMobileScreenButton } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { RiGamepadLine } from "react-icons/ri";
const Categeory = () => {
  return (
   <section  className='py-20 '  >
    <Container>
      <SubHeading tittle={`Categories`} className2={`gap-x-4`}  />
      <Heading text={`Browse By Category`} className={`pt-7 pb-13`} />
     <Flex className={`justify-around   `}  >
       <CategeoryBox text={`Phones`} icon={<FaMobileScreenButton  />}  />
       <CategeoryBox text={`Computers`} icon={<RiComputerLine />}  />
       <CategeoryBox text={`SmartWatch`} icon={<BsSmartwatch />}  />
       <CategeoryBox text={`Camera`} icon={<CiCamera />}  />
       <CategeoryBox text={`HeadPhones`} icon={<CiHeadphones />}  />
       <CategeoryBox text={`Gaming`} icon={<RiGamepadLine />}  />
     </Flex>
     <hr className='mb-5 pb-5 inline-block'  />
    </Container>
   </section>
    
   
  )
}

export default Categeory