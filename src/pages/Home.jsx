import React from 'react'
import Banner from '../layouts/Banner'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'
import Container from '../Components/Container'
import Today from '../layouts/Today'
import Categeory from '../layouts/Categeory'


const Home = () => {
  return (

  <> 
   <Container>
      <Banner/>
   <Today/>
   <Categeory/>
   </Container>
    
   </>
  )
  
}

export default Home
