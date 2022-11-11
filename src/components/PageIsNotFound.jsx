import React from 'react'
import Image from '../assets/Images/pagenotfound.gif';
const PageIsNotFound = () => {
  return (
   <div className='w-full h-[100vh]'>
    <img src={Image} alt="not-found" className='w-full h-full z-10' />
    <div className='w-full absolute z-50 text-3xl font-bold flex items-center justify-center -mt-[20%] md:-mt-10% text-[rgba(55,57,57,0.7)]'>Page is not Found</div>
    </div>
  )
}

export default PageIsNotFound