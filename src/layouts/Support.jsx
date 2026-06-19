import React from 'react'
import Container from '../Components/Container'
import SupportCard from '../Components/SupportCard'
import SupportImage1 from '../assets/support1.png'
import SupportImage2 from '../assets/support2.png'
import SupportImage3 from '../assets/support3.png'
import Flex from '../Components/Flex'
const Support = () => {
  return (
   <section className='py-35' >
    <Container>
   <Flex  className={`items-center justify-around`} >
         <SupportCard image={SupportImage1} title={`FREE AND FAST DELIVERY`} text={`Free delivery for all orders over $140`} /> 
     <SupportCard image={SupportImage2} title={`24/7 CUSTOMER SERVICE`} text={`Friendly 24/7 customer support`} /> 
     <SupportCard image={SupportImage3} title={`MONEY BACK GUARANTEE`} text={`We reurn money within 30 days`} /> 
   </Flex>
    </Container>
   </section>
  )
}

export default Support