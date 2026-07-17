import React from 'react'
import Flex from '../Components/Flex'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Play1 from '../assets/play1.png'
import Play2 from '../assets/play2.png'
import Play3 from '../assets/play3.png'
import Play4 from '../assets/play4.png'
import PlayM from '../assets/playM.png'
const ProductDetails = () => {
  return (
    <section className='pt-20' >
    <Container>
      <div className='flex pb-20 items-center gap-2 justify-start' >
        <p className='font-poppins font-normal  text-black text-[14px]  leading-3' >Account</p> 
        <span>/</span>
        <p  className='font-poppins font-normal  text-black text-[14px]  leading-3' >Gaming</p>
        <span>/</span>
        <p  className='font-poppins font-normal  text-black text-[14px]  leading-3' >Havic HV G-92 Gamepad</p>
      </div>
        <Flex>
        <div className='w-2/12 gap-4  flex flex-col items-center justify-center '>
          <div className='w-[170] h-[138] bg-[rgba(245,245,245,0.10)]  '  >
            <Image  src={Play1}  className={`w-full h-full   `}  />
          </div>
          <div className='w-[122] h-[106] bg-[rgba(245,245,245,0.10)]  '  >
            <Image  src={Play2}  className={`w-full h-full`} />
          </div>
          <div className='w-[122] h-[106]  bg-[rgba(245,245,245,0.10)]  '  >
            <Image  src={Play3}  className={`w-full h-full`} />
          </div>
          <div className='w-[122] h-[106] bg-[rgba(245,245,245,0.10)]  '  >
            <Image  src={Play4} className={`w-full h-full`} />
          </div>
       
        
        </div>
        <div className='w-5/12  bg-amber-700' >
        <Image src={PlayM} />
        </div>
        <div className='w-5/12 flex flex-col items-center  bg-blue-700' >
        <p>Havic HV G-92 Gamepad</p></div>
       
      </Flex>
    </Container>
    </section>
  )
}

export default ProductDetails