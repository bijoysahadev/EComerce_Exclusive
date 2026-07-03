import React from 'react'

import Container from '../Components/Container'
import Product1 from "../assets/product1.png";
import banner from "../assets/banner.jpg";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";
import banner5 from "../assets/banner5.png";
import banner6 from "../assets/banner6.png";
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import CategoryList from '../Components/CategoryList';
// image

import Car1 from '../assets/car1.jpg'
import Logo from '../assets/logo.png';
// image
// 
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// 

// 
const SliderComponent = Slider.default || Slider;
// 
const Banner = () => {
const settings = { dots: true, infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows :false ,
    
 };
  return (
     <section  className='pt-10  pb-[140px]' >
    <Container>
      <Flex>
        <div className='w-3/12   relative  after:w-[1px] after:h-[380px]  after:absolute after:-top-[12%] after:right-[50px] after:bg-[rgb(0,0,0,0.30)] after:content-[" "]  '> 
       
       
       <ul className='flex flex-col gap-y-4   '>
         <CategoryList   text={`Woman’s Fashion`} type={`true`}/>
       <CategoryList classNameForIcons={`ml-20`}   text={`Men’s Fashion`} type={`true`}/>
       <CategoryList  text={`Electronics`} type={`false`}/>
       <CategoryList  text={`Home & Lifestyle`} type={`false`}/>
       <CategoryList  text={`Medicine`} type={`false`}/>
       <CategoryList  text={`Sports & Outdoor`} type={`false`}/>
       <CategoryList  text={`Baby’s & Toys`} type={`false`}/>
       <CategoryList  text={`Groceries & Pets`} type={`false`}/>
       <CategoryList  text={`Health & Beauty`} type={`false`}/>
      
       </ul>
        
        </div>
 <div className='w-9/12'>
    
    <SliderComponent {...settings}>
 <div>
    <img src={banner} alt="iPhone Banner" className="w-full h-[344px]   " />
  </div>
  <div>
    <img src={banner2} alt=" Banner" className="w-full h-[344px] " />
  </div>
  <div>
    <img src={banner3} alt=" Banner" className="w-full h-[344px] " />
  </div>
  <div>
    <img src={banner4} alt=" Banner" className="w-full h-[344px] " />
  </div>
  <div>
    <img src={banner5} alt=" Banner" className="w-full h-[344px] " />
  </div>
  <div>
    <img src={banner6} alt=" Banner" className="w-full h-[344px] " />
  </div>

    </SliderComponent>

   
</div>
      </Flex>
      
   
    </Container>
  </section>
  )
}

export default Banner
