import React, { useEffect, useState } from 'react'
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
import NextArrow from '../Components/NextArrow'
import PreviousArrow from '../Components/PreviousArrow'
import "/src/App.css";
import Slider from "react-slick";
// import Apidata from '../data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// 
const SliderComponent = Slider.default || Slider;

// 

const Today = () => {

  let [alldata, SetAlldata] = useState([])
  // 
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => SetAlldata(data.products)
      )
  }, [])
  let [show, setShow] = useState(4)
  let [slideshow, setSlideshow] = useState(false)
  const settings = {
    dots: false,
    Arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />
  };

  // 
  return (
    <section className=' py-[200px ]' >
      <Container>
        <div className='border-b border-black   pb-[60px]'   >
          <SubHeading className2={`gap-x-4`} tittle={`Today’s`} />
          <Heading text={`Flash Sales`} className={`pt-6 pb-8`} />



          <SliderComponent {...settings}>

            <div  >
              <Card image={Product1} tittle={`HAVIT HV-G92 Gamepad`} badge={`-40%`} regularprice={`160`} saleprice={`120`} />
            </div>
            <div  >
              <Card image={Product2} tittle={`AK-900 Wired Keyboard`} badge={`-35%`} regularprice={`160`} saleprice={`960`} />
            </div>
            <div  >
              <Card image={Product3} tittle={`IPS LCD Gaming Monitor`} badge={`-30%`} regularprice={`400`} saleprice={`370`} />
            </div>
            <div  >
              <Card image={Product4} tittle={`S-Series Comfort Chair `} badge={`-25%`} regularprice={`400`} saleprice={`375`} />
            </div>
            <div  >
              <Card image={Product4} tittle={`S-Series Comfort Chair `} badge={`-25%`} regularprice={`400`} saleprice={`375`} />
            </div>
            <div  >
              <Card image={Product4} tittle={`S-Series Comfort Chair `} badge={`-25%`} regularprice={`400`} saleprice={`375`} />
            </div>
            <div  >
              <Card image={Product4} tittle={`S-Series Comfort Chair `} badge={`-25%`} regularprice={`400`} saleprice={`375`} />
            </div>
            <div  >
              <Card image={Product4} tittle={`S-Series Comfort Chair `} badge={`-25%`} regularprice={`400`} saleprice={`375`} />
            </div>

          </SliderComponent>
          <div className='flex flex-wrap  gap-5' >
            {
              alldata.slice(0, show).map(item => (
                <div >
                  <Card image={item.thumbnail} tittle={item.tittle} badge={item.badge} regularprice={item.regularprice} saleprice={item.sellprice} />
                </div>
              ))
            }

          </div>

          {
            show < alldata.length ? <div onClick={() => setShow(show + 4)} className='text-center pt-[60px]'>
              <Button text={`View All Products`} />
            </div> : <p className='text-center text-red text-4xl font-poppins' >NO Data</p>
          }

        </div>

      </Container>



      {/*            
      <SliderComponent {...settings}>
        <div className='px-4' > 
        <Card  image={Product1}    tittle={`HAVIT HV-G92 Gamepad`}  badge={`-40%`} regularprice={`160`} saleprice={`120`} />
        </div>
        <div className='px-4' >
         <Card  image={Product2}   tittle={`AK-900 Wired Keyboard`}  badge={`-35%`} regularprice={`160`} saleprice={`960`} />
        </div>
        <div className='px-4' >
        <Card  image={Product3}   tittle={`IPS LCD Gaming Monitor`}  badge={`-30%`} regularprice={`400`} saleprice={`370`} />
        </div>
        <div  className='px-4' >
       <Card  image={Product4}   tittle={`S-Series Comfort Chair `}  badge={`-25%`} regularprice={`400`} saleprice={`375`} />
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </SliderComponent>      */}




    </section>



  )
}

export default Today
