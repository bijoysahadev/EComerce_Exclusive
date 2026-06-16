import React from 'react'
import Banner from '../layouts/Banner'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import Container from '../Components/Container'
import Today from '../layouts/Today'
import Categeory from '../layouts/Categeory'
import BestProduct from '../Components/BestProduct'
import PromotionPart from './PromotionPart'


const Home = () => {
  return (

  <> 
   <Container>
      <Banner/>
   <Today/>
   <Categeory/>
   <BestProduct/>
   <PromotionPart/>
   </Container>
    
   </>
  )
  
}

export default Home
