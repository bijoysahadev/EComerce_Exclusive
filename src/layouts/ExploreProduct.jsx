import React from 'react'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import Container from '../Components/Container'
import Card from '../Components/Card'
import Product1 from "../assets/product1.png";
import Product2 from "../assets/product2.png";
import Product3 from "../assets/product3.png";
import Product4 from "../assets/product4.png";
import ExploreProduct1 from "../assets/exploreproduct2.png";
import ExploreProduct2 from "../assets/exploreproduct1.png";
import ExploreProduct3 from "../assets/exploreproduct3.png";
import ExploreProduct4 from "../assets/exploreproduct4.png";
import ExploreProduct5 from "../assets/exploreproduct5.png";
import ExploreProduct6 from "../assets/exploreproduct6.png";
import ExploreProduct7 from "../assets/exploreproduct7.png";
import Image from '../Components/Image'
// 

import NextArrow from '../Components/NextArrow'
import PreviousArrow from '../Components/PreviousArrow'

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Flex from '../Components/Flex'
import Button from '../Components/Button'
// 
const SliderComponent = Slider.default || Slider;


// 
const ExploreProduct = () => {
    // 
const settings = {
    dots: false,
    rows: 2,
    Arrows: true ,
    infinite: false,
   slidesPerRow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow/>
  };



    // 
  return (
   <section>
   <Container>
      <SubHeading tittle={`Our Products`} className2={`gap-x-4`} />
    <Heading  text={`Explore Our Products`}  />
   <div className='w-full' >
     <SliderComponent {...settings}>
   
        <div >
        <Card  image={ExploreProduct1}    tittle={`HAVIT HV-G92 Gamepad`}  badge={`-40%`} regularprice={`160`} saleprice={`120`} />
      </div>
      <div>
        <Card  image={ExploreProduct2}   tittle={`AK-900 Wired Keyboard`}  badge={`-35%`} regularprice={`160`} saleprice={`960`} />
      </div>
      <div>
        <Card  image={ExploreProduct3}   tittle={`AK-900 Wired Keyboard`}  badge={`-35%`} regularprice={`160`} saleprice={`960`} />
      </div>
      <div>
        <Card  image={ExploreProduct4}   tittle={`AK-900 Wired Keyboard`}  badge={`-35%`} regularprice={`160`} saleprice={`960`} />
      </div>
      <div>
        <Card  image={ExploreProduct5}   tittle={`AK-900 Wired Keyboard`}  badge={`-35%`} regularprice={`160`} saleprice={`960`} />
      </div>
      <div>
        <Card  image={ExploreProduct6}   tittle={`AK-900 Wired Keyboard`}  badge={`-35%`} regularprice={`160`} saleprice={`960`} />
      </div>
      <div>
        <Card  image={ExploreProduct7}   tittle={`AK-900 Wired Keyboard`}  badge={`-35%`} regularprice={`160`} saleprice={`960`} />
      </div>
      <div>
        <Card  image={Product3}   tittle={`IPS LCD Gaming Monitor`}  badge={`-30%`} regularprice={`400`} saleprice={`370`} />
      </div>
      <div>
        <Card  image={Product3}   tittle={`IPS LCD Gaming Monitor`}  badge={`-30%`} regularprice={`400`} saleprice={`370`} />
      </div>
      <div>
        <Card  image={ExploreProduct4}   tittle={`AK-900 Wired Keyboard`}  badge={`-35%`} regularprice={`160`} saleprice={`960`} />
      </div>
      
     
      <div>
        <Card  image={Product4}   tittle={`S-Series Comfort Chair `}  badge={`-25%`} regularprice={`400`} saleprice={`375`} />
      </div>
      <div>
        <Card  image={Product4}   tittle={`S-Series Comfort Chair `}  badge={`-25%`} regularprice={`400`} saleprice={`375`} />
      </div>
      <div>
        <Card  image={Product4}   tittle={`S-Series Comfort Chair `}  badge={`-25%`} regularprice={`400`} saleprice={`375`} />
      </div>
      <div>
        <Card  image={Product4}   tittle={`S-Series Comfort Chair `}  badge={`-25%`} regularprice={`400`} saleprice={`375`} />
      </div>
   
     
 
     
    </SliderComponent>

  <div  className='text-center pt-19' >
    <Button  text={`View All Products`} />
  </div>

   </div>
    
   </Container>
   </section>
  )
}

export default ExploreProduct