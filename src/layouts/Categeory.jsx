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
// 
import Slider from "react-slick";
import NextArrow from '../Components/NextArrow'
import PreviousArrow from '../Components/PreviousArrow'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderComponent = Slider.default || Slider;

// 
const Categeory = () => {


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
   <section  className='py-20 '  >
    <Container>
      <SubHeading tittle={`Categories`} className2={`gap-x-4`}  />
      <Heading text={`Browse By Category`} className={`pt-7 pb-13`} />
 <SliderComponent {...settings}>
   <div>
      <CategeoryBox text={`Phones`} icon={<FaMobileScreenButton  />}  />
   </div>
   <div>
     <CategeoryBox text={`Computers`} icon={<RiComputerLine />}  />
   </div>
   <div>
     <CategeoryBox text={`SmartWatch`} icon={<BsSmartwatch />}  />
   </div>
   <div>
       <CategeoryBox text={`Camera`} icon={<CiCamera />}  />
   </div>
   <div>
      <CategeoryBox text={`HeadPhones`} icon={<CiHeadphones />}  />
   </div>
   <div>
    <CategeoryBox text={`Gaming`} icon={<RiGamepadLine />}  />
   </div>
     
    </SliderComponent>


   



       {/* <CategeoryBox text={`Phones`} icon={<FaMobileScreenButton  />}  />
       <CategeoryBox text={`Computers`} icon={<RiComputerLine />}  />
       <CategeoryBox text={`SmartWatch`} icon={<BsSmartwatch />}  />
       <CategeoryBox text={`Camera`} icon={<CiCamera />}  />
       <CategeoryBox text={`HeadPhones`} icon={<CiHeadphones />}  />
       <CategeoryBox text={`Gaming`} icon={<RiGamepadLine />}  /> */}
    
     <hr className='mb-5 pb-5 inline-block'  />
    </Container>
   </section>
    // 
    

    // 
   





  )
}

export default Categeory