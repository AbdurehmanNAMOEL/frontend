import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/NavBar'
import User from '../images/user.gif'
import '../style/profile.css'
const Profile = () => {
  const navigate = useNavigate()
  const {user} = useSelector(state=>state.auth)
 
  return (
    <div className='w-full h-auto flex flex-col bg-[#363636b6]'>
    <NavBar
     email={user?.email}
     profileImage={user?.profileImage}
     />
     <div className='profile-container w-full h-[89vh] mt-[11vh] flex  justify-center items-center'>

      <div className='w-[90%] md:w-[80%] h-[90%] flex flex-col md:flex-row'>
        <div className='w-full h-[500px] rounded-md md:w-[40%] md:h-full bg-red-400 flex md:justify-center items-center flex-col'>
         <div className='image-container w-[80%] mt-5 md:w-[40%] h-[40%] md:mt-0'>
          <img src={user?.profileImage? user?.profileImage:User} alt="" className=' w-[80%] ml-8 md:ml-0 md:w-[300px] md:h-[180px] rounded-full border-2 border-[#121212c0]' />
         </div>
         <div className='user-name text-xl mt-[80px] md:mt-0'>
          {user?.name}
         </div>
         <span className='text-[#121212c4]'>Seller</span>
        </div>
         <div className='rounded-md mt-2 md:mt-0 md:ml-2 md:w-[60%] h-full bg-white flex flex-col'>
           <div className='flex flex-col ml-4 w-[80%] mt-3'>
            <span className='text-xl mb-2'>Name</span>
            <div className='h-[30px] bg-[#75757548]'>
             <span className='ml-2'> {user?.name}</span></div>
           </div>

           <div className='flex flex-col ml-4 w-[80%] mt-3'>
            <span className='text-xl mb-2'>Email</span>
            <div className='h-[30px] bg-[#75757548]'>
             <span className='ml-2'> {user?.email}</span></div>
           </div>

           <div className='flex flex-col ml-4 w-[80%] mt-3'>
            <span className='text-xl mb-2'>Phone Number</span>
            <div className='h-[30px] bg-[#75757548]'>
             <span className='ml-2'> {user?.phoneNumber}</span></div>
           </div>

          <div className='flex flex-col ml-4 w-[80%] mt-3'>
            <span className='text-xl mb-2'>Address</span>
            <div className='h-[30px] bg-[#75757548]'>
             <span className='ml-2'>Addis Ababa</span></div>
           </div>
         </div>
        </div> 
     </div>
    </div>
  )
}

export default Profile