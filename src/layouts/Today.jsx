import React from 'react'
import Container from '../Components/Container'
import SubHeading from '../Components/SubHeading'
import Heading from '../Components/Heading'
import Card from '../Components/Card'
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import Button from '../Components/Button'
import Image from '../Components/Image'
import Flex from '../Components/Flex'
const Today = () => {
  return (
    <section className=' py-[200px ]' >
        <Container>
          <div className='border-b border-black   pb-[60px]'   >
              <SubHeading  className2={`gap-x-4`} tittle={`Today’s`}/>
            <Heading text={`Flash Sales`} className={`pt-6 pb-8`}/>
           <Flex className={`justify-between`} >
             <Card  image={Product1}   tittle={`HAVIT HV-G92 Gamepad`}  badge={`-40%`} regularprice={`160`} saleprice={`120`} />
            <Card  image={Product2}   tittle={`AK-900 Wired Keyboard`}  badge={`-35%`} regularprice={`160`} saleprice={`960`} />
            <Card  image={Product3}   tittle={`IPS LCD Gaming Monitor`}  badge={`-30%`} regularprice={`400`} saleprice={`370`} />
            <Card  image={Product4}   tittle={`S-Series Comfort Chair `}  badge={`-25%`} regularprice={`400`} saleprice={`375`} />
           </Flex>
           <div className='text-center pt-[60px]'>
             <Button text={`View All Products`}/>
           </div>
          </div>
          
        </Container>

    </section>
  )
}

export default Today
