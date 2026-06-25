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
const SignUp = () => {
  const auth = getAuth();
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let handleSendUp = () => {
    // console.log(name);
    // console.log(email);
    // console.log(password);
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
              <Heading text={`Create an account`} className={`!text-[36px]`} />
              <p className=' py-5 font-poppins !font-normal  !text-6  !eading-6' >Enter your details below</p>
              <Form>
                <input onChange={handleName} className='w-full outline-0 border-b-2 border-[rgba(0,0,0,0.10)]' type="text" placeholder='Name' />
                <input onChange={handleEmail} className='w-full outline-0 border-b-2 border-[rgba(0,0,0,0.10)] pt-16' type="text" placeholder='Email or Phone Number' />
                <input onChange={handlePassword} className='w-full outline-0 border-b-2 border-[rgba(0,0,0,0.10)] pt-16' type="text" placeholder='Password' />

              </Form>
              <div className='pt-[40px] pb-[34px]  ' onClick={handleSendUp} >
                <Button text={`Create Account`} className={`py-4 px-[122px]`} />

                <button className=' cursor-pointer px-[96px]  py-4 mt-5 flex items-center justify-around gap-x-4 border border-[rgba(0,0,0,0.40)] ' >
                  <FcGoogle />
                  <p>Sign up with Google</p>
                </button>

              </div>
              <Flex className={`items-center justify-center gap-x-4`} >
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
