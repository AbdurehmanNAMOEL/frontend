import React,{useState} from 'react'
import InputField from '../components/InputField'
import { Link } from 'react-router-dom'
import Stone from '../images/collection.png'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { googleLogIn, logIn } from '../redux/features/authSlice'
import Navbar2 from '../components/NavBar'
import { useEffect } from 'react'
import '../style/login.css'
import { auth } from '../firebase'
import GoogleButton from 'react-google-button'
const Login = () => {

   const {user} = useSelector(state=>state.auth)
   const dispatch = useDispatch()
   const [email,setEmail]= useState('')
   const [password,setPassword]= useState('')
   const navigate = useNavigate()

   const handleSubmit=()=>{
    const userData = {
      email:email,
      password:password,
    }

    dispatch(logIn({userData,toast,navigate}))
  
   }

  const googleSignUp=()=> dispatch(googleLogIn({toast,navigate}))
   
   useEffect(()=>{
   
   },[])
 
  return (
    <div className='login-container w-[100%]  h-[100vh] flex  justify-center items-center   shadow-md rounded-md bg-[#1616169d] '>  
    {/* <div className='box'/>  */}
     <div className='login w-[100%] h-[100vh] gap-[20px] md:h-[80vh] flex flex-col md:flex-row'>
          <img src={Stone} alt ='' className='login-image w-full h-[250px] md:w-[50%] md:h-full'/>
      <div className='h-[50vh] md:h-full md:w-[40%] -mt-12 md:mt-0  flex justify-center items-center  '>
       <div className='left-container w-[430px] h-[90%] justify-center items-center flex flex-col shadow-md border-2 border-[#ffffff21]'>
       <div className='h-[60px] w-full -mt-16 mb-20 md:-mt-10 md:mb-7   flex justify-center items-center'>
       <span className='text-xl text-white font-bold '>LogIn</span>
       </div>
       <div className='-mt-20 mb-4 w-[50%] md:w-[80%]  md:mb-8 md:-mt-7 h-[1px] bg-[#4b4949]'/>
      
       <InputField 
       type='email' 
       placeholder={'eg: abc12@gmail.com'} 
       title='Email'
       setValue={setEmail}
       value ={email}
       name='email'
       error={'valid email is required'}
       />
      
       <InputField 
       type='password' 
       placeholder={'Enter password'} 
       title='Password'
       setValue={setPassword}
       value ={password}
       name='password'
       error={'valid password is required'}
       />
    
  
      <span className='sign-up w-[80%] flex  justify-end'>
        <Link to={'/signup'} className='text text-sm text-white '>
          you don't have an account? <span className='text-blue-500'>SignUp</span>
        </Link>
      </span>
      <button onClick={handleSubmit} id='btn-login' className='w-[80%] mb-4 h-[40px]  mt-4 flex justify-center items-center bg-blue-400 text-white rounded-md hover:bg-blue-500'>LogIn</button>
       {/* <span className='mb-4 text-[white]'>OR</span> */}
       {/* <GoogleButton 
        label='Login'
       onClick={googleSignUp}/> */}
    </div>
        </div>
      
        </div>
    </div>
  )
}

export default Login