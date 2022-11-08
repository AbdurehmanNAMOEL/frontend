import React from 'react'
import { Link } from 'react-router-dom'
import {FaTimes,FaBars,FaSun,FaMoon} from 'react-icons/fa'
import {motion} from 'framer-motion'
import Logo from '../images/ethiopiaLogo.jpg'
import User from '../images/user.gif'
import './miniContainer.css'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/features/authSlice'
const Menu = ({isMenu,displayMenuBar,profileImage,toggleClicked}) => {
   const dispatch = useDispatch()
  return (
<div className='flex md:hidden  flex-row w-full items-center justify-between'>
  <div className="w-40">
       <img src={Logo} alt="" className='h-16' />
   </div>
    <div className='cursor-pointer -ml-[150px] h-[70px] flex justify-center items-center hover:text-[#4cebe3]'>
          <img src={profileImage ? profileImage:User} alt="" className='w-[40px] h-[40px] rounded-full border-2 border-[#1212129f]' />
     </div>

  <div>
    <div className="text-md mr-8 cursor-pointer">
       { isMenu ? <FaTimes className={`${toggleClicked ? 'text-[white]' : 'text-[#121212]'}`}
       onClick={displayMenuBar}
       />:<FaBars className={`${toggleClicked ? 'text-[white]' : 'text-[#121212]'}`}
       onClick={displayMenuBar}
       />}
    </div>

    { isMenu && <motion.div 
               className=" rounded-sm fixed  gap-4 top-[75px] right-0 flex justify-center items-center flex-col w-[70%] h-[300px] bg-white shadow-md"
               initial={{x:-200}}
               animate={{x:-105}}
               transition={{type:'spring'}}
    >
     <span  className='cursor-pointer flex justify-start items-center w-full h-12 hover:bg-green-300'><Link to={'/'} className='ml-[30px]'>Home</Link></span>
     <span   className='bg-white cursor-pointer justify-start flex  items-center w-full h-8 hover:bg-green-300 '><Link to={'/upload'} className='ml-[30px]'>Upload</Link></span>
     <span  className='cursor-pointer flex justify-start items-center w-full hover:bg-green-300 h-8'><Link  to={'/contactUs'} className='ml-[30px]'>Contact Us</Link></span>
     <span   className='cursor-pointer flex justify-start items-center w-full hover:bg-green-300 h-8'><Link to={'/aboutUs'} className='ml-[30px]'>About Us</Link></span>
     <span   className='cursor-pointer flex justify-start items-center w-full hover:bg-green-300 h-8'><Link to={'/profile'} className='ml-[30px]'>ProFile</Link></span>
     <span onClick={()=>dispatch(logOut())}   className='cursor-pointer flex justify-start items-center w-full hover:bg-green-300 h-8'><Link to={'/login'} className='ml-[30px]'>LogOut</Link></span>
  </motion.div>}
  </div>
</div>

  )
}


export default Menu