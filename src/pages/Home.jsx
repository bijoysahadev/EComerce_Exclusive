import React from 'react'
import NewsPart from '../layouts/NewsPart'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'


const Home = () => {
  return (
    <div>
    <NewsPart/>
    <Navbar/>
    <h1 className='text-5xl' >HomePage</h1>
    <Footer/>
    </div>
  )
}

export default Home
