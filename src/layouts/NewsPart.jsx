import React from 'react'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import { Link } from 'react-router-dom'
import Language from '../Components/Language'

const NewsPart = () => {
  return (
  <section className='bg-[#000000] py-3'>
     <Container>
    <Flex className={` items-center justify-between  `}>
      <div>
        <Flex className={`pl-[300px]`}>
              <p className='text-sm text-primary font-normal font-poppins'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  
            <Link to="janinah"><span className=' ml-2 font-semibold '></span><u>ShopNow</u></Link>  </p>
        
        </Flex>
      </div>
       <Language/>
    </Flex>
     </Container>
  </section>
  )
}

export default NewsPart
