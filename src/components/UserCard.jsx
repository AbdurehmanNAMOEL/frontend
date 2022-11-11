import React from 'react'
import User from '../assets/Images/user.png'
import '../style/aboutus.css'
export const UserCard = () => {
  return (
   <div className='user-card mt-6 md:mt-0 bg-white rounded-[5px] border-2 border-[#121212a1]
                    cursor-pointer flex flex-col justify-center
                    items-center ml-4'>
      <div className='w-full h-[50%] flex flex-col justify-center items-center'>
        <div className='w-[200px] h-[100px] mt-4 flex justify-center items-center'>
           <img src={User} alt="" className='w-[40%]' />
        </div>
        <span className='text-md text-[#121212c7] mt-3 team-name'>Name</span>
      </div>
      <div className='w-full h-[50%]  text-center  text-[12px] text-[#121212d8]'>
        Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Eius, minus rerum dolorem,
        facere aut, itaque dolores quaerat assumenda
        voluptate eveniet obcaecati officiis molestiae
        sit commodi similique voluptatem incidunt porro 
        illum?</div>
    </div>
  )
}
