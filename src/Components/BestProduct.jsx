import React from 'react'
import SubHeading from './SubHeading'
import Heading from './Heading'
import Container from './Container'
import Button from './Button'
import Flex from './Flex'
import Card from './Card'
import Product5 from "../assets/product5.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import Product6 from "../assets/product6.png";
import Product7 from "../assets/product7.png";
import Product8 from "../assets/product8.png";
// 

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// 
const SliderComponent = Slider.default || Slider;
import NextArrow from '../Components/NextArrow'
import PreviousArrow from '../Components/PreviousArrow'
// 


// 
const BestProduct = () => {
    // 
const settings = {
    dots: false,
    Arrows: true ,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow/>
  };




    // 
  return (
   <section  className='pt-17 pb-[140px]'  >
    <Container>
        <Flex className={`items-end justify-between`} >
            <div>
                   <SubHeading tittle={`This Month`}  className2={` gap-x-4`}/>
       <Heading text={`Best Selling Products`}/>
            </div>
          <div className='text-end' >
            <Button  text={`View All`}  className={` py-[16px]  px-[48px] `} />
          </div>
        </Flex >
{/*  */}




   <div className='pt-20 mt-30' >
     <SliderComponent {...settings}>
      <div >
        <Card  image={Product5}    tittle={`HAVIT HV-G92 Gamepad`}  badge={`-40%`} regularprice={`160`} saleprice={`120`} />
      </div>
      <div>
        <Card  image={Product2}   tittle={`AK-900 Wired Keyboard`}  badge={`-35%`} regularprice={`160`} saleprice={`960`} />
      </div>
      <div>
        <Card  image={Product6}   tittle={`IPS LCD Gaming Monitor`}  badge={`-30%`} regularprice={`400`} saleprice={`370`} />
      </div>
      <div>
        <Card  image={Product3}   tittle={`IPS LCD Gaming Monitor`}  badge={`-30%`} regularprice={`400`} saleprice={`370`} />
      </div>
      <div>
        <Card  image={Product7}   tittle={`IPS LCD Gaming Monitor`}  badge={`-30%`} regularprice={`400`} saleprice={`370`} />
      </div>
      <div>
        <Card  image={Product4}   tittle={`S-Series Comfort Chair `}  badge={`-25%`} regularprice={`400`} saleprice={`375`} />
      </div>
      <div>
        <Card  image={Product8}   tittle={`S-Series Comfort Chair `}  badge={`-25%`} regularprice={`400`} saleprice={`375`} />
      </div>
 
     
    </SliderComponent>

   </div>

{/*  */}
    </Container>
   </section>
  )
}

export default BestProduct