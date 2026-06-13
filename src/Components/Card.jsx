import React from "react";
import Image from "./Image";
import Product1 from "../assets/product1.png";
import Flex from "./Flex";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import { IoMdStar } from "react-icons/io";
const Card = ({image,tittle,badge,saleprice,regularprice,className}) => {
  return (
    <div className={`w-[270px]  group ${className} `}>
      <Flex className="relative  overflow-hidden items-center w-[250px] w-full justify-center rounded-[4px]   bg-[#F5F5F5] ">
     <div className="flex items-center justify-center w-full h-[250px] ">
           <Image src={image} alt="prodecut1" />
        <p className="  cursor-pointer  absolute top-3 left-1 bg-[#DB4444]  py-1 px-3 rotate-[4px] font-poppins text-xs text-white font-normal ">
        {badge}
        </p>

        <li className=" absolute top-5 right-5 flex items-center justify-center list-none bg-[#FFFFFF]  text-black w-[34px] h-[34px] rounded-full text-base">
          {" "}
          <a href="#">
            {" "}
            <IoIosHeartEmpty />
          </a>{" "}
        </li>
        <li className=" absolute top-15 right-5 flex items-center justify-center list-none bg-[#ffff] text-black w-[34px] h-[34px] text-base rounded-full">
          <a href="#">
            <LuEye />
          </a>
        </li>
     </div>
     <div className="cursor-pointer bg-black w-full py-2 absolute -bottom-[40px] group-hover:bottom-0.5 left-0 text-center rounded-b  duration-300" >
        <p className="text-white text-[16px] font-poppins font-medium">Add To Cart</p>
     </div>
      </Flex>
<div>
          <h4 className="font-poppins text-base text-black font-medium pt-4 pb-2">{tittle}</h4>
      <p className="text-base text-[#DB4444] font-medium font-poppins">${saleprice}  <span className="text-[rgba(0,0,0,0.50)]" ><del className="text-[rgba(0,0,0,0.50)]" >${regularprice}</del></span></p>

</div>
  <Flex className={`items-center  gap-x-2  pt-2`}>
    <ul className="flex  items-center justify-start gap-x-1  !p-0 ">
    <li   className="list-none"  ><IoMdStar className="text-[#FFAD33]" /></li>
    <li  className="list-none"  ><IoMdStar className="text-[#FFAD33]"  className="text-[#FFAD33]"/></li>
    <li  className="list-none"  ><IoMdStar className="text-[#FFAD33]" /></li>
    <li  className="list-none"  ><IoMdStar className="text-[#FFAD33]" /></li>
    <li  className="list-none"  ><IoMdStar className="text-[#FFAD33]" /></li>

</ul>
<p className="font-poppins font-medium text-[14px] text-[rgba(0,0,0,0.50)]"  >(88)</p>
  </Flex>
    </div>
  );
};

export default Card;
