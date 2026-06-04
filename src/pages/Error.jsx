import React from 'react'
import Container from '../Components/Container'
import Button from '../Components/Button'
const Error = () => {
  return (
    <section className='py-[270px]'>
        <Container>
            <h2></h2>
         <h1 className='  pb-10 text-center font-medium text-[110px] font-inter leading-[115px]'> 404 Not Found</h1>
         <p className='text-center  pt-10 font-poppins text-[16px] leading-6 text-black font-normal' >Your visited page not found. You may go home page.</p>
         <div className='text-center pt-20'> 
              <Button text={`Back to home page`}/>
         </div>
        </Container>
    </section>
  )
}

export default Error
