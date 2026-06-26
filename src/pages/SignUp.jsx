import React, { useState } from 'react'
import Container from '../Components/Container'
import Image from '../Components/Image'
import Login2 from '../assets/login.png'
import Heading from '../Components/Heading'
import Flex from '../Components/Flex'
import Button from '../Components/Button'
import { Form } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
const SignUp = () => {
  const auth = getAuth();
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let [nameerror,setNameError]=useState("")
  let [emailerror,setEmailError]=useState("")
  let [passworderror,setPasswordError]=useState()
  let [eye,setEye]=useState(false)
  let handleSendUp = () => {
    // console.log(name);
    // console.log(email);
    // console.log(password);
   

       if (!name ) {
        setNameError("Enter Your Name Please");
        
       }
   

  }
  let  handleEye= ()=> {
    setEye(!eye)
   }
  let handleName = (e) => {
    setName(e.target.value);

  }
  let handleEmail = (e) => {
    setEmail(e.target.value);

  }
  let handlePassword = (e) => {
    setPassword(e.target.value);

  }
  return (




    <div>
      <section className='py-[140px]' >
        <Container>
          <Flex className={`gap-x-[130px] items-center justify-around `} >
            <div>
              <Image src={Login2} />
            </div>
            <div>
             <div className='w-[370px] min-w-[370px]' >
               <Heading text={`Create an account`} className={`!text-[36px] `} />
             </div>
              <p className=' py-5 font-poppins !font-normal  !text-6  !eading-6' >Enter your details below</p>
              <Form className='flex flex-col gap-y-[40px]' >
                <input onChange={handleName} className='w-full outline-0 border-b-2 border-[rgba(0,0,0,0.10)]' type="text" placeholder='Name' />
                {
                  nameerror &&  <p className= ' mt-2 px-2 bg-red-500 text-white py-2  rounded-md ' >{nameerror}</p>
                }
               
                <input onChange={handleEmail} className='w-full outline-0 border-b-2 border-[rgba(0,0,0,0.10)] ' type="text" placeholder='Email or Phone Number' />
               
               
                  <div className='relative w-full' >
                      <input onChange={handlePassword} className='w-full outline-0 border-b-2 border-[rgba(0,0,0,0.10)] ' type={eye? "password" : "text"} placeholder='Password' />
                      <div  onClick={handleEye} className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer text-gray-500' >
                        {
                          eye   ?  <FaRegEyeSlash />   : <FaRegEye />
                        }
                        

                          
                      </div>
                  </div>
                
             
                    {/* <div>
                       createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Regestation done!! ");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
         if (errorCode.includes("auth/email-already-in-use")) 
        {
      toast.error("Email already In Use")
     }
     if (errorCode.includes("auth/weak-password "))
     {
      toast.error("Enter a Strong Password")
     }
        // ..
        console.log(errorCode);
        console.log(errorMessage);
    
      });


                    </div> */}
             
             

              </Form>
              <div className='mt-10 flex flex-col gap-y-4 ' onClick={handleSendUp} >
                <Button text={`Create Account`} className={`w-full py-4 text-center`} />

                <button className='w-full cursor-pointer py-4 flex items-center justify-center gap-x-4 border border-[rgba(0,0,0,0.40)] rounded-md transition hover:bg-gray-50'  >
                  <FcGoogle />
                  <p className='text-4 font-poppins font-normal leading-6' >Sign up with Google</p>
                </button>

              </div>
              <Flex className={`items-center justify-center gap-x-2 mt-8`} >
                <p className='text-poppins font-normal  text-[rgba(0,0,0,1)] text-4 ' >Already have account?</p>
                 <Link to='/Login' >
                 <a href="" className='text-poppins font-medium  text-4  text-black underline' >Log in</a>
                 </Link>
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
    </div>
  )
}

export default SignUp
