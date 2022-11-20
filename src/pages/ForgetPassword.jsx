import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import InputField from '../components/InputField'
import { restPassword} from '../redux/features/authSlice'
import {toast} from 'react-toastify'
const ForgetPassword = () => {
    const [newPassword,setNewPassword] =useState('')
    const [confirmPassword,setConfirmPassword] =useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
     const {id} = useParams()
    console.log(id);
    const editPassword=()=>{
        let userData={
            password:newPassword,
            confirmPassword:confirmPassword
        }
        dispatch(restPassword({id,userData,navigate,toast}))
    }
  return (
    <div className='w-full h-[100vh]  flex justify-center items-center bg-[#a19e9ec0]'>
      <div className='w-[300px] md:w-[400px] flex justify-center items-center flex-col bg-blue-400 h-[200px] shadow-md'>
       <InputField 
       type='password' 
       placeholder={'New password'} 
       title='New Password'
       setValue={setNewPassword}
       value ={newPassword}
       name='password'
       error={'valid password is required'}
       />
      <InputField 
       type='password' 
       placeholder={'confirm new password'} 
       title='ConfirmNewPassword'
       setValue={setConfirmPassword}
       value ={confirmPassword}
       name='password'
       error={'valid password is required'}
       />
       <button onClick={editPassword} className='bg-red-500  mt-2 text-[white] rounded-md w-[200px] h-[40px] flex justify-center items-center'>RestPassword</button>
      </div>
    </div>
  )
}

export default ForgetPassword