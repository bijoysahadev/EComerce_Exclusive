import React from 'react'
import Container from './Container'
import Image from './Image'
import PromotionImage from '../assets/promotionImage.png'
import { Link } from 'react-router-dom'
const Promotion = () => {
  return (
    <section className='pb-[70px]' >
          <Container>
        <Link to={`/Login`} > <Image src={PromotionImage}/></Link>
    </Container>
    </section>
  )
}

export default Promotion