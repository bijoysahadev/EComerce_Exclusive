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
import Button from '../Components/Button'
import { CiHeart } from "react-icons/ci";

const ProductDetails = () => {
  return (
    <section className='pt-20  ' >
      <Container>
        <div className='flex pb-20 items-center gap-2 justify-start' >
          <p className='font-poppins font-normal  text-black text-[14px]  leading-3' >Account</p>
          <span>/</span>
          <p className='font-poppins font-normal  text-black text-[14px]  leading-3' >Gaming</p>
          <span>/</span>
          <p className='font-poppins font-normal  text-black text-[14px]  leading-3' >Havic HV G-92 Gamepad</p>
        </div>
        <Flex>
          <div className='w-2/12 gap-4  flex flex-col items-center justify-center object-cover '>
            <div className='w-[170px] h-[138px] bg-[rgba(245,245,245,0.10)]  '  >
              <Image src={Play1} className={`w-full h-full   `} />
            </div>
            <div className='w-[122px] h-[106px] bg-[rgba(245,245,245,0.10)]  '  >
              <Image src={Play2} className={`w-full h-full`} />
            </div>
            <div className='w-[122px] h-[106px]  bg-[rgba(245,245,245,0.10)]  '  >
              <Image src={Play3} className={`w-full h-full`} />
            </div>
            <div className='w-[122px] h-[106px] bg-[rgba(245,245,245,0.10)]  '  >
              <Image src={Play4} className={`w-full h-full`} />
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

              <div className='  flex items-center gap-2 justify-center  font-poppins  font-normal text-[14px] text-[#F5F5F5]' >

                <span>(</span><p>(150 Reviews)</p><span>)</span>  <span>  /</span>

              </div>
              <div className='' >
                <p className='text-[#00FF66] font-poppins  font-normal text-[14px] ' >In Stock</p>
              </div>


            </div >

            <h2 className={`ml-5  py-[10px] font-inter font-normal leading-[24px]  text-[#000000]   text-[24px] `} >$192.00</h2>
            <div className='ml-3 w-[400px] flex items-center justify-start ' >
              <div className='border-b border-black py-[24px]  ' >
                <p className=' ml-5 font-poppins  font-normal  leading-[21px] text-[#000000] text-[14px] ' >PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
              </div>
            </div>
            <div className='flex gap-5 items-center' >
              <h4 className='ml-5 font-inter font-normal text-[20px] text-black ' >Colours:</h4>
              <div className='w-[20px] h-[20px] bg-[#A0BCE0] rounded-full ' ></div>
              <div className='w-[20px] h-[20px] bg-[#E07575] rounded-full ' ></div>
            </div>
            <div className='flex items-center justify-around ' >
              <h3 className='font-inter font-normal text-[#000000] text-[20px] ' >Seize</h3>
           
              <div className='border border-[rgba(0,0,0,0.50)] rounded-[4px]' >
                  <h5 className='hover:bg-[#DB4444] duration-300 hover:text-white hover:border-black px-2 py-2 font-poppins font-medium text-[14px] text-[#000000]' >XS</h5>
              </div>
              <div className='  border border-[rgba(0,0,0,0.50)] rounded-[4px]' >
                  <h5 className='hover:bg-[#DB4444] duration-300 hover:text-white hover:border-black  px-2 py-2 font-poppins font-medium text-[14px] text-[#000000]' >S</h5>
              </div>
              <div className='border border-[rgba(0,0,0,0.50)] rounded-[4px]' >
                  <h5 className='hover:bg-[#DB4444] duration-300 hover:text-white hover:border-black  px-2 py-2 font-poppins font-medium text-[14px] text-[#000000]' >M</h5>
              </div>
              <div className='border border-[rgba(0,0,0,0.50)] rounded-[4px]' >
                  <h5 className='hover:bg-[#DB4444] duration-300 hover:text-white hover:border-black  px-2 py-2 font-poppins font-medium text-[14px] text-[#000000]' >L</h5>
              </div>
              <div className='border border-[rgba(0,0,0,0.50)] rounded-[4px]' >
                  <h5 className='hover:bg-[#DB4444] duration-300 hover:text-white hover:border-black  px-2 py-2 font-poppins font-medium text-[14px] text-[#000000]' >XL</h5>
              </div>
            
            </div>
         <div className=' mt-3 flex items-center justify-around' >
   <div className='ml-5 flex border border-black w-[160px] ' >
              <div className='w-10 border-r border-black  flex items-center justify-center text-[#000000] ' >-</div>
              <div className='w-[80px] border-r border-black py-[10px]  px-[30px]' >2</div>
              <div className='w-[40px]' ><Button  className={`w-full h-full py-[10px] px-[10px] `} text={`+`} ></Button></div>
            </div>
  <Button className={`py-[10px] px-[50px] `} text={`Buy Now`} />
  

  <div className='rounded-[4px] border border-black ' >
<CiHeart className='text-[24px]' />
  </div>
         </div>
          </div>

        </Flex>
      </Container>
    </section>
  )
}

export default ProductDetails