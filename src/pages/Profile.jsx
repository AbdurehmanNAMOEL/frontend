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
    <div className='w-full h-[150vh] md:h-[100vh] gap-[100px] md:gap-0 flex flex-col bg-[#363636b6]'>
   <div className='w-full h-[70px]'>
    <NavBar
     email={user?.email}
     profileImage={user?.profileImage}
     />
   </div>
    
     <div className='profile-container -mt-[50px] w-[80%] ml-[10%] md:ml-0 md:w-full h-[110vh]  flex flex-col md:flex-row justify-center items-center'>
        <div className='user-photo md:ml-10 rounded-md md:w-[40%]  bg-red-400 flex justify-center md:h-[80%] md:justify-center items-center flex-col'>
        <div className='image-container rounded-md w-[200px] mt-7 h-[200px] bg-slate-500'
        style={{backgroundImage:`url(${user?.profileImage})`,backgroundSize:'cover',position:'center'}
      
      }
        >

        </div>
         <div className='user-name text-xl mt-[80px] md:mt-0'>
          {user?.name}
         </div>
         <span className='text-[#121212c4]'>Seller</span>
        </div>
         <div className='user-data rounded-md h-[80%] w-[80%] md:h-[80%] mt-2 md:mt-0 md:ml-2 md:w-[40%]  bg-white flex flex-col'>
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

  )
}

export default Profile