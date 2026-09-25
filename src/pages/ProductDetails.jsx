import React from 'react'
import Flex from '../Components/Flex'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Play1 from '../assets/play1.png'
import Play2 from '../assets/play2.png'
import Play3 from '../assets/play3.png'
import Play4 from '../assets/play4.png'
import PlayM from '../assets/playM.png'
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
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
        <div className='w-5/12 flex flex-col items-  bg-blue-700' >
        <p className=' ml-5 font-inter text-black font-semibold  text-[24px] leading-[24px] ' >Havic HV G-92 Gamepad</p>
        <div className=' ml-4  flex gap-4 w-full flex mt-4 ' >
       <div className='flex  text-yellow-500 ' >
        <FaStar />
   <FaStar />
   <FaStar />
   <FaStar />
  <div className='text-black ' >
    <CiStar />
  </div>
       </div>

<div  className=  '  flex items-center gap-2 justify-center  font-poppins  font-normal text-[14px] text-[rgba(0,0,0,0.10)] ' >

 <span>(</span><p>(150 Reviews)</p><span>)</span>  <span>  /</span>

</div>
<div className='' >
    <p className='text-[#00FF66] font-poppins  font-normal text-[14px] ' >In Stock</p>
</div>


        </div >
   
      <h2  className={`ml-5  py-[10px] font-inter font-normal leading-[24px]  text-[#000000]   text-[24px] `} >$192.00</h2>
      <div className='border-b border-black py-[24px]  ' >
          <p className=' ml-5 font-poppins  font-normal  leading-[21px] text-[#000000] text-[14px] ' >PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
      </div>
        </div>
       
      </Flex>
    </Container>
    </section>
  )
}

export default ProductDetails