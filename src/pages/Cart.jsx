import React from 'react'
import Container from '../Components/Container'
import Image from '../Components/Image'
import CartImagge1 from '../assets/cart1.png'
const Cart = () => {
  return (
   <section>
    <Container>
        <div className='py-[100px]' >
            <div className='flex items-center justify-start' >
                <p className='font-poppins font-normal  text-black text-[14px]  leading-3' >Home</p>
                <span>/</span>
                <p  className='font-poppins font-normal  text-black text-[14px]  leading-3'  >Cart</p>
            </div>
        </div>
        <div>
            <div  className='flex items-center justify-between py-10' >
                <h4 className='font-poppins text-black font-normal text-4 leading-3' >Product</h4>
                <h4 className='font-poppins text-black font-normal text-4 leading-3' >Price</h4>
                <h4 className='font-poppins text-black font-normal text-4 leading-3' >Quantity</h4>
                <h4 className='font-poppins text-black font-normal text-4 leading-3' >Subtotal</h4>
               
            </div>
             <div className='flex items-center justify-around border border-[#FFFFFF] shadow-[0_1px_13px_0px_rgba(0,0,0,0.5)]' >
                    <div>
                        <Image  src={CartImagge1} />
                    </div>
                     <p>$650</p>
                     <p>$650</p>
                </div>
        </div>
    </Container>
   </section>
  )
}

export default Cart