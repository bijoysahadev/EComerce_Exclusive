import React from 'react'
import Banner from '../layouts/Banner'
import Heading from '../Components/Heading'
import SubHeading from '../Components/SubHeading'

import Today from '../layouts/Today'
import Categeory from '../layouts/Categeory'
import BestProduct from '../Components/BestProduct'
import Promotion from '../Components/Promotion'
import ExploreProduct from '../layouts/ExploreProduct'
import NewArrival from '../layouts/NewArrival'
import Support from '../layouts/Support'




const Home = () => {
  return (

  <> 
     <Banner/>
   <Today/>
   <Categeory/>
   <BestProduct/>
    <Promotion/>
  
    <ExploreProduct/>
    <NewArrival/>
 
     <Support/>
   </>
  )
  
}

export default Home
