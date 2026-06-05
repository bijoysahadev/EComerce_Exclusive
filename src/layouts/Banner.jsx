import React from 'react'
import NewsPart from '../layouts/NewsPart'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Card from '../Components/Card'
import Container from '../Components/Container'
import Product1 from "../assets/product1.png";
import banner from "../assets/banner.jpg";
import Flex from '../Components/Flex'
import Image from '../Components/Image'
import CategoryList from '../Components/CategoryList'
const Banner = () => {
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
        <div className='w-9/12 '>
   <Image src={banner} />
        </div>
      </Flex>
     
     
   
    </Container>
  </section>
  )
}

export default Banner
