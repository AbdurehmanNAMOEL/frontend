import React from 'react'
import InputField from '../components/InputField'
import { Link, useNavigate } from 'react-router-dom'
import FileBase64 from 'react-filebase64';
import Stone from '../images/opal.jpg'
import User from '../images/user.png'
import Camera from '../images/camera.svg'
import { useDispatch,useSelector } from 'react-redux'
import { useState } from 'react';
import { createAccount } from '../redux/features/authSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

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
    <div className='w-[90%] h-[95vh] mt-4 shadow-md rounded-md border-2 border-[#968f8f44]'>
      <div className='w-full h-full flex flex-col md:flex-row'>
      <img src={Stone} alt ='' className='h-[250px] md:w-[50%] md:h-auto bg-[#15f1a8] flex flex-col'/>
      <div className='md:w-[50%]  h-auto flex justify-center bg-[#292828]'>
       <form onSubmit={onSubmit} className='w-[400px] mt-4 h-[95%] items-center flex flex-col '>
       <div className='h-[60px] w-full flex justify-center items-center'>
       <div className='text-xl text-[#121212c9] -mt-2'>
        <div className='w-[80px] h-[80px] mt-[150px]'>
            <img src={User} alt=""  className='w-[60px] h-[60px]'/>  
        </div>
      <div className='w-[80%] h-[50px] -mt-5  opacity-80 flex flex-col  z-20  cursor-pointer mb-24'>
        <img src={Camera} alt="" className='w-[30px] h-[20px] ml-[15px] -mt-5 cursor-pointer bg-blue-200'/>
        <div className='absolute w-[30px] -mt-4 opacity-0 cursor-pointer'>
        <FileBase64
        type="file"
        multiple={false}   
        onDone={({base64})=>setProfileImage(base64)}
        />
        
        </div>
      </div>
          
       </div>
   
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
      name='confirmPassword' 
      error={' confirmPassword required is required'}
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
        <Link to={'/login'} className='text-sm text-blue-500'>
          already have an account? SignIn
        </Link>
      </span>
      <button type='submit'  className='w-[80%] h-[40px] mt-1 flex justify-center items-center bg-blue-500 text-white rounded-md hover:bg-blue-500'>Submit</button>
    </form>
   </div>
  </div>
</div>
  )
}

export default SignUp