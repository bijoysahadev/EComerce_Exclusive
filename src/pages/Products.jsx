import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import Language from '../Components/Language'
import NewsPart from '../layouts/NewsPart'
import { Link, Outlet } from 'react-router-dom'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import { useSelector } from 'react-redux'
import CategoryList from '../Components/CategoryList'
import Card from '../Components/Card'
import Product1 from "../assets/product1.png";
import  Pagination  from '../Components/Pagination'


const Products = () => {
  let [show,setShow]=useState(6)
 
  
  let handleSelect=(e)=> {
    setShow(e.target.value);
    
  }
    let data1=useSelector((state)=>state.breadcrumb.prevoiusvalue
     )
     let data2=useSelector((state)=>state.breadcrumb.currentvalue
     )

  return (
<section className='pt-20  pb-[120px]' >
  <Container>
     <div className='flex items-center justify-start pb-13 ' >
                   <p   className='font-poppins font-normal  text-black text-[14px]  leading-3' >
                       <Link to={data1=="Home" ? "/" : `/${data1}`} >{data1}</Link>
                   </p>
                   <span>/</span>
                   <p  className='font-poppins font-normal  text-black text-[14px]  leading-3'  >{data2}</p>
               </div>
    <Flex>
       <div className='w-3/12 ' >
       <h3 className='text-xl text-[#262626] font-bold font-poppins' >Shop by Category</h3>
             <ul className='flex flex-col gap-y-4 pt-4  '>
         <CategoryList   text={`Woman’s Fashion`} />
       <CategoryList   text={`Men’s Fashion`} />
       <CategoryList  text={`Electronics`} />
       <CategoryList  text={`Home & Lifestyle`} />
       <CategoryList  text={`Medicine`} />
       <CategoryList  text={`Sports & Outdoor`} />
       <CategoryList  text={`Baby’s & Toys`} />
       <CategoryList  text={`Groceries & Pets`} />
       <CategoryList  text={`Health & Beauty`}/>
      
       </ul>
              <h3 className='text-xl text-[#262626] font-bold font-poppins pt-10 ' >Shop by Color</h3>
             <ul className='flex flex-col gap-y-4 pt-4  '>
         {/* <CategoryList   text={`Color 1`} />
       <CategoryList   text={`Color 2`} />
       <CategoryList  text={`Electronics`} />
       <CategoryList  text={`Color 3`} /> */}
     <Flex className={`items-center gap-x-2.5`} >
            <div className='w-[12px] h-[12px] bg-red-500 rounded-full ' ></div>
        <li>Color 1</li>
     </Flex>
     <Flex className={`items-center gap-x-2.5`} >
            <div className='w-[12px] h-[12px] bg-red-500 rounded-full ' ></div>
        <li>Color 2</li>
     </Flex>
     <Flex className={`items-center gap-x-2.5`} >
            <div className='w-[12px] h-[12px] bg-red-500 rounded-full ' ></div>
        <li>Color 3</li>
     </Flex>
       </ul>
       </div>
    <div className='w-9/12   '> 
   
      <div className='flex   justify-end items-center pb-6  ' >
        <label htmlFor="">Show :</label>
        <select  onChange={handleSelect} className='ml-4 py-2 px-3 border border-black rounded-md' >
          <option value="6">6</option>
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="15">15</option>
         
        </select>
        
      </div>
        {/* <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
     <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
     <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
     <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
     <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
     <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
     <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
     <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
     <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
     <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
     <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
     <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
     <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} /> */}
  
   <Flex className={`gap-6 flex-wrap`} >
    <Pagination itemsPerPage={show} />
   </Flex>
  
  
    </div>
    </Flex>
    
  </Container>
</section>
  )
}

export default Products
