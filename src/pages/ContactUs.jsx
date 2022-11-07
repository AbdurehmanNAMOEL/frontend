import React from 'react'
import  NavBar  from '../components/NavBar'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const ContactUs = () => {
  const form = useRef()
  const navigate = useNavigate()
  const {user} = useSelector(state=>state.auth)
   const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('gmail', 'template_ft3gg8b',  form.current, 'NqKFG5yFZi3hU0nnJ')
      .then((result) => {
         toast.success(result.data)
      }, (error) => {
           toast.error(error.text)
      });
  };
  useEffect(()=>{
      if(!localStorage.getItem('profile')){
       navigate('/login')
     } 
  })
  return (
     <div className='flex flex-col w-full bg-[#121212]'>
    <NavBar
     path={'/'}
     buttonLabel={'Home'} 
     email={user?.email}
     profileImage={user?.profileImage}
     />
      <div className='w-[100%] md:w-full h-[90vh] flex mt-[10vh] justify-center items-center'>
       <form ref={form}  onSubmit={sendEmail}  className='bg-white w-[90%] border-2 border-[#12121223] h-[80%] md:w-[45%] md:h-[90%]  rounded-md flex flex-col gap-3 justify-center items-center'>
        <h1 className='mt-[10px] text-[20px] md:mt-0 md:text-2xl text-[#121212c7] mb-[5px]'>Contact us using your email</h1>
        <div className='w-full h-[2px] bg-[#1212123d] mb-6'/>
        <div className='w-full -mt-6 md:mt-0 flex flex-col md:flex-row justify-center items-center gap-4'>
          <input type="text" placeholder='FirstName' name="firstName" className='border-2 border-[#1212122c] h-[35px] md:h-[40px] rounded-md indent-2 w-[80%] md:w-[35%]'/>
          <input type="text" placeholder='LastName' name='lastName' className='border-2 border-[#12121238] h-[35px] md:h-[40px] rounded-md indent-2 w-[80%] md:w-[30%]' />
        </div>
        <div className='w-full flex justify-center items-center'>
          <input type="email" placeholder='Email' name='email' className='border-2 border-[#12121238] h-[35px] md:h-[40px] rounded-md indent-2 w-[80%] md:w-[68%]' />
        </div>
        <div className='w-full h-[40%] flex justify-center items-center'>
         <textarea placeholder='Message' name='message' className='border-2 border-[#12121227] w-[80%] md:w-[68%] h-[80%] indent-2'></textarea>
        </div>
        <input type="submit" value={'Submit'} className='w-[80%] md:w-[50%] h-10 bg-green-400 rounded-md cursor-pointer
                      text-white font-bold flex justify-center items-center
                       hover:bg-green-500
                      '/>
        </form>
      </div>
     </div>
  )
}

export default ContactUs