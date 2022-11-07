import React from 'react'
import { Link } from 'react-router-dom'
import {FaTimes,FaBars,FaSun,FaMoon} from 'react-icons/fa'
import {motion} from 'framer-motion'
import Logo from '../images/ethiopiaLogo.jpg'

const Menu = ({isMenu,displayMenuBar,path,buttonLabel,toggleClicked,handleToggle}) => {
  return (
    <div className='flex md:hidden  flex-row w-full items-center justify-between'>
  <div className="w-40">
       <img src={Logo} alt="" className='h-16' />
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
               className=" fixed top-[65px] right-0 flex flex-col w-36 h-68 bg-white shadow-md gap-2"
               initial={{x:200}}
               animate={{x:0}}
               transition={{type:'spring'}}
    >
     <Link to={'/'} className='cursor-pointer bg-green-400 w-full h-8 hover:bg-green-300 '>
          <label className='text-center ml-2  text-black p-4 mt-10' htmlFor="#Home">Home</label>
     </Link>
      
       <Link to={'/upload'} className='w-full hover:bg-green-300 h-8'>
          <label className='cursor-pointer text-center ml-2  text-black p-4 mt-10' htmlFor="#Upload">Upload</label>
     </Link>
      
      
     <Link to={'/contactUs'} className='w-full hover:bg-green-300 h-8'>
          <label className='cursor-pointer text-center ml-2  text-black p-4 mt-10' htmlFor="#Home">Contact Us</label>
     </Link>

     <Link to={'/aboutUs'} className='w-full hover:bg-green-300 h-8'>
          <label className='cursor-pointer text-center ml-2  text-black p-4 mt-10' htmlFor="#Home">About Us</label>
     </Link>

      <Link to={'/aboutUs'} className='w-full hover:bg-green-300 h-8'>
          <label className='cursor-pointer text-center ml-2  text-black p-4 mt-10' htmlFor="#Home">LogOut</label>
     </Link>
  </motion.div>}
  </div>
</div>

  )
}


export default Menu