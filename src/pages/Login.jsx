import React, { useState } from 'react'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import NewsPart from '../layouts/NewsPart'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Login1 from '../assets/login.png'
import Flex from '../Components/Flex'
import Heading from '../Components/Heading'
import { Form, useNavigate } from 'react-router-dom'
import Button from '../Components/Button'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const auth = getAuth();
  let [email,setEmail]=useState("")
  let [password,setPassword]=useState("")
  let [passworderror,setPasswordError]=useState("")
  let [eye,setEye]=useState(false)
  let navigate=useNavigate()
  let [emailerror,setEmailError]=useState("")
  let handleEmail = (e)=> {
    setEmail(e.target.value);
    setEmailError("")
    
  }
  
  let handleEye = ()=> {
    setEye(!eye)
  }
  let handlePassword = (e)=> {
    setPassword(e.target.value);
    setPasswordError("")
    
  }
  let handleLogIn = ()=> {
    // console.log("loggedin");
    if (!email) {
      setEmailError("Please Enter Your Email")
     
    }
    if (!password) {
      setPasswordError("PLease type Your Password")
     
    }
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    if (userCredential.user.emailVerified) {
       toast.success("Your are logged in ")
     setTimeout(()=> {
 navigate("/")
     },2000)
    }
    else {
      toast.error("Verify Your Email")
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
     if (errorCode.includes("auth/invalid-credential")) {
      toast.error("Enter A Valid Email Please")
    }
   
  });
   

  }
  
  return (
    <>

      <section className='py-[140px]' >
        <Container>
          <Flex className={` gap-x-[130px]   justify-evenly items-center`} >
            <div>    <Image src={Login1} /></div>
            <div>
             <div className='w-[370px] min-w-[370px]' >
                  <Heading text='Log in to Exclusive' className={`font-medium`} />
             </div>
              <p className='font-poppins text-[16px]   font-normal text-[rgb(0,0,0)] pt-5 pb-[40px]' > Enter your details below</p>
              <Form className='flex flex-col gap-y-[40px]' >
                <input  onChange={handleEmail} className='w-full outline-0 border-b-2 border-[rgba(0,0,0,0.10)]' type="text" placeholder='Email or Phone Number' />
                 {
                  emailerror &&  <p className='bg-red-500 text-white py-2 px-2 mt-2' >{emailerror}</p>
                 }
                <div className='relative w-full' >
                     <input   onChange={handlePassword} className='w-full outline-0 border-b-2 border-[rgba(0,0,0,0.10)] ' type={eye ?"password" :"text"  } placeholder='Password' />
                     {
                      passworderror &&  <p className='bg-red-500 text-white px-2 py-2 mt-2' >{passworderror}</p>
                     }
                     <div  onClick={handleEye} className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-gray-500' >
                     
                     
                        {
                          eye ?  <FaRegEyeSlash /> : <FaRegEye />
                        }
                     </div>
                </div>
              </Form>
              <Flex className={`items-center justify-around pt-[50px]`}>
                <div onClick={handleLogIn} >
                  <Button   text={`Log In`}   />
                </div>
                <p className='text-poppins text-red  text-4 font-normal' >Forget Password?</p>
              </Flex>
            </div>

          </Flex>

        </Container>
         <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick={false}
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
        
                />
      </section>

    </>
  )
}

export default Login
