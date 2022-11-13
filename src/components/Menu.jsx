import React from 'react'
import { Link } from 'react-router-dom'
import {FaTimes,FaBars,FaSun,FaMoon} from 'react-icons/fa'
import {motion} from 'framer-motion'
import Logo from '../images/ethiopiaLogo.jpg'
import User from '../images/user.gif'
import './miniContainer.css'
import { useDispatch } from 'react-redux'
import { logOut } from '../redux/features/authSlice'
const Menu = ({isMenu,displayMenuBar,email,profileImage,toggleClicked}) => {
   const dispatch = useDispatch()
  return (
<div className='flex md:hidden  flex-row w-full items-center justify-between'>
  <Link to='/' className="w-40">
       <img src={Logo} alt="" className='h-16' />
   </Link>
  

  <div>
    <div className="text-md mr-8 cursor-pointer">
       { isMenu ? <FaTimes className={`${toggleClicked ? 'text-[white]' : 'text-[#121212]'}`}
       onClick={displayMenuBar}
       />:<FaBars className={`${toggleClicked ? 'text-[white]' : 'text-[#121212]'}`}
       onClick={displayMenuBar}
       />}
    </div>

    { isMenu && <motion.div 
               className=" mini-container rounded-sm fixed gap-4 top-[75px] right-[90px] flex justify-center items-center flex-col w-[70%] h-[450px] bg-white shadow-md"
               initial={{y:-400}}
               animate={{y:0}}
               transition={{type:'spring'}}
    >
    <div className='user-image w-full gap-2 cursor-pointer  h-[50px] flex justify-start items-center hover:text-[#4cebe3]'>
          <img src={email ? profileImage:User} alt="" className='ml-[20px] w-[40px] h-[40px] rounded-full border-2 border-[#941b1b9f]' />
          <span className='text-[13px] text-[#121212a6] mt-4'>{email?email:'Email'}</span>
     </div>
    { email ?<span   className='bg-white cursor-pointer justify-start flex p-3  items-center w-full h-8 hover:bg-green-300 '><Link to={'/'} className='ml-[30px]'>Home</Link></span>:''}
     <span  className='cursor-pointer flex justify-start items-center w-full h-8 p-3 hover:bg-green-300'>
       <Link className='ml-[30px]' to={`${email?'/Home': '/'}`}>{`${email?'DashBoard': 'Home'}`}</Link>
    </span>

     <span   className='bg-white cursor-pointer justify-start flex p-3  items-center w-full h-8 hover:bg-green-300 '><Link to={'/upload'} className='ml-[30px]'>Upload</Link></span>
     <span  className='cursor-pointer flex justify-start p-3 items-center w-full hover:bg-green-300 h-8'><Link  to={'/contactUs'} className='ml-[30px]'>Contact Us</Link></span>
     <span   className='cursor-pointer flex justify-start p-3 items-center w-full hover:bg-green-300 h-8'><Link to={'/aboutUs'} className='ml-[30px]'>About Us</Link></span>
     <span   className='cursor-pointer flex justify-start p-3 items-center w-full hover:bg-green-300 h-8'><Link to={'/profile'} className='ml-[30px]'>ProFile</Link></span>
    { email ? <span onClick={()=>dispatch(logOut())}   className='cursor-pointer p-3 flex justify-start items-center w-full hover:bg-green-300 h-8'>
      <Link to={'/'} className='ml-[30px]'>LogOut</Link>
    </span>:<span   className='bg-white cursor-pointer justify-start flex p-3  items-center w-full h-8 hover:bg-green-300 '><Link to={'/login'} className='ml-[30px]'>Login</Link></span>}
  </motion.div>}
  </div>
</div>

  )
}


export default Menu