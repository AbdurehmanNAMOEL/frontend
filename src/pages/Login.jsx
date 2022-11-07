import React,{useState} from 'react'
import InputField from '../components/InputField'
import { Link } from 'react-router-dom'
import Stone from '../images/opal.jpg'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { logIn } from '../redux/features/authSlice'
const Login = () => {

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

  return (
    <div className='w-[90%]  h-[100vh] md:h-[90vh] mt-5 shadow-md rounded-md border-2 bg-[#292828d8] border-[#12121244]'>
      <div className='w-full  md:h-full flex flex-col md:flex-row '>
          <img src={Stone} alt ='' className='w-full h-[250px] md:w-[50%] md:h-full bg-[#15f1a8] flex flex-col'/>
      <div className='md:w-[50%] -mt-10 md:mt-0 h-full flex justify-center '>
       <div className='w-[400px] mt-[100px] h-[60%] items-center flex flex-col'>
       <div className='h-[60px] w-full -mt-4 flex justify-center items-center'>
       <span className='text-xl text-white font-bold -mt-14'>LogIn</span>
       </div>
       <div className=' w-[50%] md:w-[80%] -mt-8 mb-8 md:mb-12 h-[1px] bg-[#4b4949]'/>
      
       <InputField 
       type='email' 
       placeholder={'Enter Email'} 
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

      <span className='w-full flex ml-[290px]'>
        <Link to={'/signup'} className='text-sm text-blue-500 -ml-16 md:ml-0'>
          you don't have an account? SignUp
        </Link>
      </span>
      <button onClick={handleSubmit} className='w-[80%] h-[40px] mt-4 flex justify-center items-center bg-blue-400 text-white rounded-md hover:bg-blue-500'>Login</button>
    </div>
        </div>
      
        </div>
    </div>
  )
}

export default Login