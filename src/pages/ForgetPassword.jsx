import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import { updatePassword } from '../redux/features/authSlice'
import {toast} from 'react-toastify'
const ForgetPassword = () => {
    const [email,setEmail] =useState()
    const [password,setNewPassword] =useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const editPassword=()=>{
        let userData={
            email:email,
            password:password
        }
        dispatch(updatePassword({userData,navigate,toast}))
    }
  return (
    <div className='w-full h-[100vh]  flex justify-center items-center bg-[#a19e9ec0]'>
      <div className='w-[400px] flex justify-center items-center flex-col bg-blue-400 h-[200px] shadow-md'>
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
       placeholder={'new password'} 
       title='New Password'
       setValue={setNewPassword}
       value ={password}
       name='password'
       error={'valid password is required'}
       />
       <button onClick={editPassword} className='bg-[#ff5100] border-none rounded-md w-[200px] h-[40px] flex justify-center items-center text-[white]'>Submit</button>
      </div>
    </div>
  )
}

export default ForgetPassword