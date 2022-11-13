import React, { useEffect } from 'react'
import { gemStoneCategories } from '../utils/defaultGemStonesData'
import {motion} from 'framer-motion'
import { useState } from 'react'
import gemstoneCollection from '../assets/Images/collection.png';
import Navbar2 from '../components/NavBar';
import SampleCard from '../components/SampleCard';
import '../style/landingpage.css';
import  Aos  from 'aos';
import { useDispatch, useSelector } from 'react-redux';
import Footer from '../components/Footer';
import MomVideo from '../assets/videos/vertualTourOfMOM.mp4'
import {toast} from 'react-toastify'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from '../components/Modal';
import { getStone } from '../redux/features/gemstoneSlice';
import { getSeller } from '../redux/features/authSlice';
import InputField from '../components/InputField';
let count=0;
let intervalId;


function LandingPage() {
    
  const form = useRef()
  const [fullName,setFullName]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  
  const dispatch = useDispatch()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('gmail','template_ft3gg8b',form.current,'NqKFG5yFZi3hU0nnJ')
      .then((result) => {
        
         toast.success('sent')
         setEmail('')
         setFullName('')
         setLastName('')
         setMessage('')
        
      }, (error) => {
           toast.error(error.text)
      });
  };
 
  let array=gemStoneCategories.map(item=>{return item.image})
  const {user} = useSelector(state=>state.auth)
  const [image,setImage]=useState(array[0])
  let titleArray=gemStoneCategories.map(item=>{return item.name})
  const [titles,setTitle]=useState(titleArray[0])
  let imageLength=array.length
  let interval=5000;
  const [modalData,setModalData]=useState([])
  const [isModalVisible,setModalState]=useState(false)

  const handleModal=(product)=>{
    setModalData(product)
    setModalState(pre=>!isModalVisible)
  
 }
  
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
    dispatch(getStone());
    dispatch(getSeller())
   },[])

  return (
    <div className='landing-page-container w-full gap-2 bg-[#868686] flex flex-col items-center justify-center'>
    
       <div className='w-full' >
        <Navbar2
         path={'/'}
         buttonLabel={'Home'} 
         email={user?.email}
         profileImage={user?.profileImage}
         bgColor='white'/>
       </div>

      <div className='w-[1px] h-[1px] flex justify-center -mt-4'>
      <Modal
      modalData={modalData}  
      setModalState={setModalState} 
      isModalExist={isModalVisible} 
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
         <h1  data-aos="fade-right" className='stone-title w-[84%] text-4xl mb-12 mt-12'>
          Some of Our finest natural gemstone
         </h1>
         <section  data-aos="fade-left"  className='stone-container w-full h-auto  mb-[50px]  grid grid-cols-4 grid-flow-row place-items-center'>
             {
                gemStoneCategories.map(data=>
                <SampleCard
                  key={data.id}
                  title={data.title}
                  image={data.image}
                  handleModal={handleModal}
                  data={data}
                  />
                )
             }
        </section>
        <span className=' text-2xl p-2 md:p-4 text-[#121212c9]  w-[85%]'>
             Minister of Mine Virtual Tour sample Video
          </span>
        <section  data-aos="fade-left" className='border-2 border-[#2748725d] w-[95%] md:w-[85%] h-[20%] mt-5 md:h-[90vh] flex flex-col justify-center  items-center shadow-md rounded-md bg-white mt'>
          
          <div className='w-[90%] md:w-[70%] h-[50%] '>
          <video
          src={MomVideo}
          autoPlay
          controls
          muted='muted'></video>
          </div>
          <div className='md:mt-[180px] md:text-2xl text-[#121212d8]'>To experince the full tour  
            <a className='text-blue-600' href='https://eyita-virtualtours.github.io/Ministry-of-Mines/'>
             clickhere
            </a>
          </div>
        </section>
       
      <div  data-aos="fade-right" className='w-[100%] bg-[#0b18309c] gap-9 md:w-[85%] h-[90vh] flex mt-[10vh] justify-center items-center flex-col'>
           <h1 className='mt-[10px] text-[20px] md:mt-0 md:text-2xl text-[white] mb-[5px]'>Contact us using your email</h1>
       <form ref={form}  onSubmit={sendEmail}  className=' w-[90%] bg-white shadow-md h-[80%] md:w-[40%] md:h-[70%]  rounded-md flex flex-col justify-center items-center'>
     
        <div className='w-full h-[2px] bg-[#12121200] mb-6'/>
        <div className='w-full md:w-[85%] -mt-10 md:mt-0 flex flex-col md:flex-row justify-center items-center gap-4'>
        <InputField 
          type='text' 
          color={'#121212'}
          placeholder={'Enter fullName'} 
          title='FullName'
          setValue={setFullName}
          value ={fullName}
          name='userName'
          error={'valid name is required'}
       />
 
        </div>
        <div className='w-full md:w-[85%] flex justify-center items-center'>
        <InputField 
          type='email' 
          color={'#121212'}
          placeholder={'Enter here'} 
          title='Email'
          setValue={setEmail}
          value ={email}
          name='email'
          error={'valid email is required'}
        />
        </div>
        <div className='w-full h-[40%] flex justify-center items-center'>
         <textarea 
           placeholder='Message' 
           name='message' 
           onChange={(e)=>setMessage(e.target.value)}
           value={message}
           className='border-2 border-[#12121227] w-[80%] md:w-[68%] h-[80%] indent-2'></textarea>
        </div>
        <input 
          type="submit" 
          value={'Submit'} 
          className='w-[80%] md:w-[50%] h-10 bg-green-400 rounded-md cursor-pointer
                   text-white font-bold flex justify-center items-center
                   hover:bg-green-500
          '/>
        </form>
      </div>
        <Footer/>
    </div>
  )
}

export default LandingPage