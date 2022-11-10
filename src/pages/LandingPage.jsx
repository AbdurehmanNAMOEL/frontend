import React, { useEffect } from 'react'
import { gemStoneCategories } from '../utils/defaultGemStonesData'
import {motion} from 'framer-motion'
import { useState } from 'react'
import gemstoneCollection from '../assets/Images/collection.png';
import Navbar2 from '../components/NavBar';
import SampleCard from '../components/SampleCard';
import '../style/landingpage.css';
import  Aos  from 'aos';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import MomVideo from '../assets/videos/vertualTourOfMOM.mp4'
let count=0;
let intervalId;

function LandingPage({isLoggedIn}) {
      
    let array=gemStoneCategories.map(item=>{return item.image})
    const {user} = useSelector(state=>state.auth)
    console.log(user);
    const [image,setImage]=useState(array[0])
    let titleArray=gemStoneCategories.map(item=>{return item.name})
    const [titles,setTitle]=useState(titleArray[0])
    let imageLength=array.length
    let interval=5000;
  const slide=()=>{
     setImage(array[count])
     setTitle(titleArray[count])
    
   }

   const handleInterval=()=>{
        intervalId= setInterval(slide,interval)
   }  

useEffect(()=>{
     if(count<imageLength-1){
       handleInterval()
       count++;
     }else {
        clearInterval(intervalId)
        count=0
     };
    
},[count])

  useEffect(()=>{
    Aos.init({duration:2000})
    
   },[])
  return (
    <div className='landing-page-container w-full gap-2 bg-white flex flex-col items-center justify-center'>
       <div className='w-full' >
        <Navbar2
         path={'/'}
         buttonLabel={'Home'} 
         email={user?.email}
         profileImage={user?.profileImage}
     />
       </div> 
        <section style={{backgroundImage:`url(${gemstoneCollection})`,backgroundSize:'cover'}} 
         className='w-full h-[80vh] md:h-[100vh] bg-[#121212]'>
           <div  
           className='w-[100%] bg-[#121212a6]  h-full flex flex-col md:flex-row'>
              <motion.div
               initial={{x:-250}} 
              animate={{x:0}}  
              className='md:w-[50%] md:h-[100%] mt-20 md:mt-0 flex justify-center items-center'>
                <span className='text-2xl mt-3 md:mt-0 md:text-5xl text-center px-10 text-[#f3cd87]'>
                  We buy and sell The best Ethiopian raw and polished Gemstone
                  like:  <h1 className='text-5xl  text-white z-20 ml-[10px]'>{titles}</h1>
                </span>
              </motion.div>
              <div className='image-collection w-[100%]  md:w-[50%] h-full flex justify-center items-center'>
              <img src={image} alt="" className='w-[80%] z-10 rounded-md  h-[50%] md:w-[50%]  md:h-[40%] '/>
                
            </div>
         </div>

        </section>
         <h1  data-aos="fade-right" className='stone-title text-4xl mb-12 mt-12 text-[#d1656585]'>Some of Our finest gemstone</h1>
         <section  className='stone-container w-full h-auto  mb-[150px]  grid grid-cols-4 grid-flow-row place-items-center'>
             {
                gemStoneCategories.map(data=>
                <SampleCard
                  key={data.id}
                  title={data.title}
                  image={data.image} 
                 
                  />
                )
             }
        </section>
        <section className='border-2 border-[#1212125b] w-[95%] md:w-[80%] h-[20%] mt-5 md:h-[90vh] flex flex-col  items-center shadow-md rounded-md bg-white mt'>
        <span className='text-xl md:text-4xl p-2 md:p-4 text-[#121212c9] mb-3'>Minister of Minerals Virtual Tour sample Video </span>
          <div className='w-[90%] md:w-[70%] h-[50%] '>
          <video
          src={MomVideo}
          autoPlay
          controls
          muted='muted'></video>
          </div>
          <div className='md:mt-[140px] md:text-2xl text-[#121212d8]'>To experince the full tour <a className='text-blue-600' href='https://eyita-virtualtours.github.io/Ministry-of-Mines/'>clickhere</a></div>
        </section>
       {!isLoggedIn?<h1 data-aos="fade-left" className='for-more text-4xl mb-6 mt-16 text-[#121212]'>For more</h1>:''}
        {!isLoggedIn?<div className='login w-[180px] h-[40px] rounded-md flex justify-center items-center cursor-pointer bg-blue-500  mb-6 mt-6 text-white'>
           <Link to='/login'>LogIn</Link> 
        </div>:''}
        <Footer/>
    </div>
  )
}

export default LandingPage