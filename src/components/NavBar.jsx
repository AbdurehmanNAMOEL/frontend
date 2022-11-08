import React,{useState} from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../images/ethiopiaLogo.jpg'
import { useDispatch } from 'react-redux'
import Menu from './Menu'
import { logOut } from '../redux/features/authSlice'
const Navbar2 = ({email,profileImage,bgColor}) => {
   const [isMenu,setMenu]=useState(false)
  const dispatch = useDispatch()
  
  const displayMenuBar=()=>{
       setMenu(!isMenu);
  }
  return (
    <div style={{backgroundColor:`${bgColor?bgColor:'white'}`}} className="fixed z-[100] flex w-full h-[70px] bg-white">
    <nav className='hidden md:flex  w-full h-[70px] bg-white justify-between items-center'>
      <Link to= '/' className='w-[200px] h-[70px] flex items-center'>
         <img src={Logo} alt=""  className='w-[50%] h-[80%]'/>
      </Link>

      <ul className='flex gap-10 w-[98%] justify-end mr-[40px]'>
      
        <li className='cursor-pointer h-[70px] flex justify-center items-center hover:text-[#4cebe3]'>
          <Link to={`${profileImage?'/Home': '/'}`}>{`${profileImage?'DashBoard': 'Home'}`}</Link>
        </li>

        <li className='cursor-pointer h-[70px] flex justify-center items-center hover:text-[#4cebe3]'>
          <Link to='/upload'>Upload</Link>
        </li>

        <li className='cursor-pointer h-[70px] flex justify-center items-center hover:text-[#4cebe3] '>
          <Link to='/contactUs'>Contact-Us</Link>
        </li>

        <li className='cursor-pointer h-[70px] flex justify-center items-center hover:text-[#4cebe3]'>
          <Link to='/aboutUs'>About-Us</Link>
        </li>

        <li className='user cursor-pointer h-[70px]  flex justify-center items-center'>
          <span className='hover:text-[#26f1d0]'> {email}</span>
            <ul className='user-detail hidden absolute mt-[175px] cursor-pointer w-[150px] h-[100px] bg-white'>
                <li className='w-full h-[50%] hover:bg-[#19fdd7] flex justify-center items-center'><Link to='/profile'>profile</Link></li>
                <li onClick={()=>dispatch(logOut())} className='w-full h-[50%] flex justify-center items-center hover:bg-[#19fdd7]  '><Link to='/'>LogOut</Link></li>
            </ul>
        </li>
         { profileImage?
         <li className='cursor-pointer h-[70px] flex justify-center items-center hover:text-[#4cebe3]'> 
          <img src={profileImage} alt="" className='w-[40px] h-[40px] rounded-full border-2 border-[#1212129f]' />
         </li> 
        :''}
      </ul>
    </nav>

  <Menu
  isMenu={isMenu}
  displayMenuBar={displayMenuBar}
  profileImage={profileImage}
 />
    </div>
  )
}

export default Navbar2