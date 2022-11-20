import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import {toast} from 'react-toastify'
import { updatePassword } from '../redux/features/authSlice'
const SentToEmail = () => {

    const [email,setEmail] =useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const editPassword=()=>{
        let userData={
            email:email
        }
        dispatch(updatePassword({userData,navigate,toast}))
    }
  return (
        <div className='w-full h-[100vh]  flex justify-center items-center bg-[#a19e9ec0]'>
      <div className='w-[300px] md:w-[400px] flex justify-center items-center flex-col bg-blue-400 h-[200px] shadow-md'>
       <InputField 
       type='email' 
       placeholder={'eg: abc12@gmail.com'} 
       title='Email'
       setValue={setEmail}
       value ={email}
       name='email'
       error={'valid email is required'}
       />
       <button onClick={editPassword} className='bg-[#ff5100] mt-2 border-none rounded-md w-[200px] h-[40px] flex justify-center items-center text-[white]'>RestPassword</button>
      </div>
    </div>
  )
}

export default SentToEmail