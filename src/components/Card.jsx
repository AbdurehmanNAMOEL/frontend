import React from 'react'
import InputField from './InputField'
import { Link } from 'react-router-dom'
import FileBase64 from 'react-filebase64';
const Card = () => {
  return (
    <form className='w-[400px] mt-4 h-[95%] items-center flex flex-col'>
       <div className='h-[60px] w-full flex justify-center items-center'>
       <span className='text-xl text-[#121212c9] -mt-8'>SignUp</span>
       </div>
      <InputField type='text' placeholder={'Enter fullName'} title='Name'/>
      <InputField type='email' placeholder={'Enter Email'} title='Email'/>
      <InputField type='password' placeholder={'Enter password'} title='Password'/>
       <InputField type='password' placeholder={'confirmPassword'} title='ConfirmPassword' />
      <InputField type='tel' placeholder={'Enter PhoneNumber'} title='PhoneNumber' />
      <div className='w-[80%] h-[60px] flex flex-col -mt-3'>
        <span className=' text-[14px]'>upload Your Profile Image</span>
        <FileBase64/>
      </div>
      
      <span className='w-full flex ml-[320px]'>
        <Link to={'/login'} className='text-sm text-blue-500'>
          already have an account? SignIn
        </Link>
      </span>
      <button type='submit' className='w-[80%] h-[40px] mt-1 flex justify-center items-center bg-blue-500 text-white rounded-md'>Submit</button>
    </form>
  )
}

export default Card