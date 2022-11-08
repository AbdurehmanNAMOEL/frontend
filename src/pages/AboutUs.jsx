import React,{useEffect} from 'react'
import  NavBar  from '../components/NavBar'
import  Aos  from 'aos';
import "aos/dist/aos.css"
import AboutUsImage from '../images/about-us.svg'
import MissionIcon from '../images/target.png'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';

const AboutUs = ({path,buttonLabel,toggleClicked,handleToggle}) => {

   const navigate = useNavigate()
   const {user} = useSelector(state=>state.auth)
  useEffect(()=>{
    Aos.init({duration:2000})
    
   },[])
  return (
    <div className='flex flex-col w-full h-auto'>
    <NavBar
     path={'/'}
     buttonLabel={'Home'} 
     email={user?.email}
     profileImage={user?.profileImage}
     />
     <div className='mt-[10vh] bg-gradient-to-tr from-green-400 to-white flex justify-between items-center w-full h-[70vh]'>
        <span className='ml-20 text-2xl font-serif'>About Us</span>
        <img src={AboutUsImage} alt="" className='w-[60%] h-[100%]' />
     </div>

    <div className='mt-[6vh] flex justify-center items-center w-full h-[45vh] '>
       <div 
       data-aos="fade-right" 
       className='w-[80%] h-[100%] shadow-md rounded-md border-2 border-[#12121218] bg-white flex flex-col justify-center items-center '
       style={{backgroundColor:`${toggleClicked ? '#121212':'white'}`
       }}>

    <div  className='w-full flex justify-end md:-mt-12'><img src={MissionIcon} alt="" className='w-[50px] h-[50px] -mt-20 float-right' /></div>
          <span 
          className='-mt-12 mb-4 text-xl'
          style={{color:`${toggleClicked ? 'white':'#121212'}`}}>Our Mission
          </span>
       <p className='text-center text-[14px] px-5 text-[#1212128a]'
          style={{color:`${toggleClicked ? 'white':'#121212'}`}}>
           Lorem ipsum dolor sit amet, consectetur 
           adipisicing elit. At doloribus beatae 
           quod aliquam asperiores totam architecto 
           rerum quas quos, recusandae sapiente qui
           alias sunt, similique, earum eius iure 
           laudantium saepe!
           Lorem ipsum dolor sit amet, consectetur 
           adipisicing elit. At doloribus beatae 
           quod aliquam asperiores totam architecto 
           rerum quas quos, recusandae sapiente qui
           alias sunt, similique, earum eius iure 
           laudantium saepe!
           
           </p>
       </div>
     </div>

    <div className='mt-[2vh] flex justify-center items-center w-full h-[50vh]'>
     
       <div 
       data-aos="fade-left"
       className='w-[80%] h-[90%] shadow-md rounded-md border-2 border-[#12121218] bg-white flex flex-col justify-center items-center'
       style={{backgroundColor:`${toggleClicked ? '#121212':'white'}`}}>

       <div className='w-full flex justify-end md:-mt-12'><img src={MissionIcon} alt="" className='w-[50px] h-[50px] -mt-20 float-right' /></div>
       <span className='-mt-10 mb-4 text-xl'
       style={{color:`${toggleClicked ? 'white':'#121212'}`}}
       >Our Vision</span>
       <p className='text-center text-[14px] px-5 text-[#1212128a]'
        style={{color:`${toggleClicked ? 'white':'#121212'}`}}>
           Lorem ipsum dolor sit amet, consectetur 
           adipisicing elit. At doloribus beatae 
           quod aliquam asperiores totam architecto 
           rerum quas quos, recusandae sapiente qui
           alias sunt, similique, earum eius iure 
           laudantium saepe!
           Lorem ipsum dolor sit amet, consectetur 
           adipisicing elit. At doloribus beatae 
           quod aliquam asperiores totam architecto 
           rerum quas quos, recusandae sapiente qui
           alias sunt, similique, earum eius iure 
           laudantium saepe!
           
           </p>
       </div>
     </div>
    <div className='mt-[10vh] w-full h-[80vh] bg-gray-300 flex flex-col justify-center items-center'>
       <span className='text-xl mt-2 font-bold font-serif text-[#121212a4]'>Meet Our Team</span>
       <div className='w-[90%] h-[90%] flex justify-center items-center gap-10'>
       </div>
      </div>
     
       <Footer/>
   
    </div>
  )
}

export default AboutUs