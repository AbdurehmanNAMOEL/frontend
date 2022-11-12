import React from 'react'
import InputField from '../components/InputField'
import { Link, useNavigate } from 'react-router-dom'
import FileBase64 from 'react-filebase64';
import Stone from '../images/collection.png'
import User from '../images/user.png'
import '../style/signup.css'
import Camera from '../images/camera.svg'
import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react';
import { createAccount } from '../redux/features/authSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import GoogleButton from 'react-google-button';

const SignUp = () => {
  
   const dispatch = useDispatch()
   const [name,setName]= useState('')
   const [email,setEmail]= useState('')
   const [password,setPassword]= useState('')
   const [confirmPassword,setConfirmPassword]= useState('')
   const [phoneNumber,setPhoneNumber]= useState('')
   const [profileImage,setProfileImage] = useState('')
   const navigate = useNavigate()
 
   const onSubmit=(e)=>{

    e.preventDefault()
  
    const userData = { 
      name:name,
      email:email,
      password:password,
      confirmPassword:confirmPassword,
      phoneNumber:phoneNumber,
      profileImage:profileImage
    }
    dispatch(createAccount({userData,toast,navigate}))

   }

  return (
    <div className='w-full h-[auto] md:h-[100vh] flex flex-col md:flex-row bg-[#1616169d] shadow-md rounded-md '>
      <div className='signup-image w-[50%] h-full flex justify-center items-center'>
      <img src={Stone} alt ='' className='h-[90%] w-[80%]  flex flex-col'/>
      </div>
      <div className='md:w-[50%]  h-full flex flex-col items-center justify-center '>
        <div className='sign-form w-[80%] h-[90%] flex justify-center items-center flex-col border-2 border-[#ffffff25]'>
       <div className='text-xl md:-mt-[100px] text-[#121212c9] -mt-[150px] h-[80px]'>
        <div className='w-[80px] h-[80px] mt-[150px]'>
            <img src={User} alt=""  className='w-[50px] h-[50px]'/>  
        </div>
      <div className='w-[80%] -mt-10 -ml-[4px] opacity-80 flex flex-col  z-20  cursor-pointer '>
        <img src={Camera} alt="" className='w-[30px] h-[20px] ml-[15px]  cursor-pointer bg-blue-200'/>
        <div className='w-[30px] h-[20px] -mt-5  opacity-0 cursor-pointer'>
        <FileBase64
        type="file"
        multiple={false}   
        onDone={({base64})=>setProfileImage(base64)}
        />
        </div>
      </div>    
       </div>
      
       <form onSubmit={onSubmit} className='w-[350px] md:w-[400px] mt-16 md:mt-16 h-[95%] items-center flex flex-col '>
       <div className='h-[60px] w-full flex justify-center items-center'>
       </div>
       
      
       <InputField 
       type='text' 
       id={'1'}
       placeholder={'Enter fullName'} 
       title='Name'
       setValue={setName}
       value ={name}
       name='userName'
       error={'valid userName is required'}
       />
      
       <InputField 
       type='email'
       id={'2'}
       placeholder={'Enter Email'} 
       title='Email'
       setValue={setEmail}
       value ={email}
       name='email'
       error={'valid email is required'}
       />
      
       <InputField 
       type='password'
       id={'3'} 
       placeholder={'Enter password'} 
       title='Password'
       setValue={setPassword}
       value ={password}
       name='password'
       error={'valid password is required'}
       />
      
      <InputField 
      type='password'
      placeholder={'confirmPassword'} 
      title='ConfirmPassword'
      setValue={setConfirmPassword}
      value ={confirmPassword}
      name='password' 
      error={' confirmPassword is required'}
      />
      
      <InputField 
      type='tel'
      id={'4'}
      placeholder={'Enter PhoneNumber'} 
      title='PhoneNumber' 
      setValue={setPhoneNumber}
      value ={phoneNumber}
      name='phoneNumber'
      error={' valid phoneNumber is required'}
      />
    
      <span className='w-full flex ml-[220px] md:ml-[320px] mb-2'>
        <Link to={'/login'} className='text-sm text-white'>
          already have an account? <span className='text-blue-500'>SignIn</span> 
        </Link>
      </span>
      <button type='submit'  className='w-[80%] h-[40px] mt-1 flex justify-center items-center bg-blue-500 text-white rounded-md hover:bg-blue-500'>Submit</button>
    {/* <div>
      <GoogleButton
        label='Google'
       onClick={''}/>
    </div> */}
    </form>
     
   </div>
  </div>
</div>
  )
}

export default SignUp