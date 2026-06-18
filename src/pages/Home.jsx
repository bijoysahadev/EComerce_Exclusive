import React from 'react'
import Banner from '../layouts/Banner'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import Container from '../Components/Container'
import Today from '../layouts/Today'
import Categeory from '../layouts/Categeory'
import BestProduct from '../Components/BestProduct'
import Promotion from '../Components/Promotion'
import ExploreProduct from '../layouts/ExploreProduct'
import NewArrival from '../layouts/NewArrival'
import Support from '../Components/SupportComponent'



const Home = () => {
  return (

  <> 
   <Container>
      <Banner/>
   <Today/>
   <Categeory/>
   <BestProduct/>
    <Promotion/>
   </Container>
    <ExploreProduct/>
    <NewArrival/>
     <Support/>
   </>
  )
  
}

export default Home
