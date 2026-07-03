import React, { useEffect, useState } from 'react'
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

// 
const ExploreProduct = () => {
  // 
  let [show, SetShow] = useState(4)
  let [isGridView, SetIsGridView] = useState(false)


  const handleLoadMore = () => {
    SetIsGridView(true) // Turns off the slider completely
    SetShow((prevShow) => prevShow + 4) // Increments by 4 every click
  }



  // 
  // 
  const settings = {
    dots: false,
    rows: 2,
    Arrows: true,
    infinite: false,
    slidesPerRow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />
  };
  let [Apidata, SetApidata] = useState([])

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => SetApidata(data.products)
      )
  }, [])

  // 
  return (
    <section>
      <Container>
        <SubHeading tittle={`Our Products`} className2={`gap-x-4`} />
        <Heading text={`Explore Our Products`} />
        <div className='w-full' >
          {
            !isGridView ? (<SliderComponent {...settings}>

              {
                Apidata.map(item => (
                  <div >
                    <Card image={item.thumbnail} tittle={item.title} badge={`New`} regularprice={item.price} saleprice={item.discountPercentage} />
                  </div>
                ))
              }







            </SliderComponent>) :  <Flex className={` flex-wrap gap-y-10 justify-between`} >
              
              { Apidata.slice(0,show).map(item => (
              <div >
                <Card image={item.thumbnail} tittle={item.title} badge={`New`} regularprice={item.price} saleprice={item.discountPercentage} />
              </div>
            ))}
            </Flex>
          }

          <div onClick={handleLoadMore} className='text-center pt-19' >
            <Button text={!isGridView ? `View All Products` : `Load More Products`} />
          </div>

        </div>

      </Container>
    </section>
  )
}

export default ExploreProduct