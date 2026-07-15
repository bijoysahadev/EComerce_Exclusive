import React, { useState } from 'react'
import Container from '../Components/Container'
import Image from '../Components/Image'
import CartImagge1 from '../assets/cart1.png'
import CartImagge2 from '../assets/cart2.png'
import Button from '../Components/Button'
const Cart = () => {
    let handleInput=(e)=> {
        console.log(e.target.value);
        // setQuantity(quantity+1)
        let value=parseInt(e.target.value);
        if (isNaN(value)){
            setQuantity(1)
            return;
        }
        if (value <1){
            setQuantity(1);
            
        }
        else if (value >100){
            setQuantity(100);
        }
        else {
            setQuantity(value)
        }
    }
    let handleInput2=(e)=> {
        console.log(e.target.value);
        // setQuantity(quantity+1)
        let value=parseInt(e.target.value);
        if (isNaN(value)){
            setQuantity2(1)
            return;
        }
        if (value <1){
            setQuantity2(1);
            
        }
        else if (value >100){
            setQuantity2(100);
        }
        else {
            setQuantity2(value)
        }
    }
    let [quantity,setQuantity]=useState(1)
    let [quantity2,setQuantity2]=useState(1)
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
            <div  className='flex items-center justify-around py-10' >
                <h4 className='font-poppins text-black font-normal text-4 leading-3' >Product</h4>
                <h4 className='font-poppins text-black font-normal text-4 leading-3' >Price</h4>
                <h4 className='font-poppins text-black font-normal text-4 leading-3' >Quantity</h4>
                <h4 className='font-poppins text-black font-normal text-4 leading-3' >Subtotal</h4>
               
            </div>
             <div className='flex items-center justify-around border border-[#FFFFFF] shadow-[0_1px_13px_0px_rgba(0,0,0,0.5)]   py-10 bg-[rgba(255,255,255,1)]' >
                    <div className='flex gap-x-[20px] items-center justify-center' >
                        <div> <Image  src={CartImagge1} /></div>
                        <p  >LCD Monitor</p>
                    </div>
                   
                     <p>$650</p>
                      <input  className=  'px-[12px] py-[6px]  border border-[rgba(0,0,0,0.40)] outline-[rgba(0,0,0,0.40)]' type="number" id="quantity"  onChange={handleInput} name="quantity" min="1" max='100' value={quantity} ></input>
                     <p>$650</p>
                </div>
             <div className='flex items-center justify-around border border-[#FFFFFF] shadow-[0_1px_13px_0px_rgba(0,0,0,0.5)]  mt-10  py-10 bg-[rgba(255,255,255,1)]' >
                    <div>
                        <div className='flex gap-[20px]  justify-center items-center' >
                             <Image  src={CartImagge2} />
                        <p>H1 Gamepad</p>
                        </div>
                    </div>
                   
                     <p>$550</p>
                      <input  className=  'px-[12px] py-[6px]  border border-[rgba(0,0,0,0.40)] outline-[rgba(0,0,0,0.40)]' type="number" id="quantity"  onChange={handleInput2} name="quantity2" min="1" max='100' value={quantity2} ></input>
                     <p>$1100</p>
                </div>
        </div>
        <div className='py-15' >
            <div className='flex items-center justify-between' >
                <Button text={`Return To Shop`}/>
                <Button text={`Update Cart`}/>
            </div>
        </div>
        <div className='flex gap-x-4' >
            <input type="text" placeholder='Coupon Code '  className= ' text-[16px] font-poppins text-[rgba(0,0,0,1)]  border border-b-black  outline-[rgba(0,0,0,0.40)] placeholder:font-poppins placeholder:text-[rgba(0,0,0,1)] placeholder:text-[16px] placeholder:font-normal py-4 pl-[24px] pr-[164px]   '   />
            <Button  text={`Apply Coupon`}/>
        </div>
    </Container>
   </section>
  )
}

export default Cart