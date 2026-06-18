import React from 'react'
import Container from '../Components/Container'
import SubHeading from '../Components/SubHeading'
import Heading from '../Components/Heading'
import Image from '../Components/Image'
import NewArrival1 from '../assets/newarrival1.png'
import NewArrival2 from '../assets/newarrival2.png'
import NewArrival3 from '../assets/newarrival3.png'
import NewArrival4 from '../assets/newarrival4.png'
import { Link } from 'react-router-dom'
const NewArrival = () => {
  return (
    <section className='py-[140px]' >
        <Container>
            <SubHeading tittle={`Featured`}   className2={`gap-x-4`} /> 
            <Heading  text={`New Arrival`} className={`pt-10 `} />
             
             <div  className='one   pt-14 '  >
                 <div className='two' >
                 <Link to='/Login'>
                   <Image src={NewArrival1}/>
                 </Link>
                 </div>
                 <div className='two' >
                 <Link to='/Login' >
                  <Image src={NewArrival2}/>
                  </Link>
                 </div>
                 <div className='two' >
                 <Link to='./Login' > 
                     <Image src={NewArrival3}/>
                 </Link>
                 </div>
                 <div className='two' >
                   <Link to='/Login' >
                   <Image src={NewArrival4}/>
                   </Link>
                 </div>
             </div>
        </Container>
    </section>
  )
}

export default NewArrival