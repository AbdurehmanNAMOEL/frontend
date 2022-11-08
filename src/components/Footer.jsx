import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import WhatsApp from '../assets/Images/whatsapp.png'
import Telegram from '../assets/Images/telegram.webp'
import Imo from '../assets/Images/imo.webp'
import {FaMapMarker} from 'react-icons/fa'
const Footer = () => {
  return (
   <div className="w-full h-[100vh] md:h-[80vh]  mt-10 flex flex-col
                       md:flex-row md:justify-center md:items-center gap-8 bg-[#08081bea]">
            <div className="w-full md:w-[22%] h-[50%] md:h-[70%]  border-r-2 flex flex-col items-center border-[#ffffff25]">
              <h4 className='mt-8 text-[white]'>Ethiopian Minerals</h4>
              <ul className='mt-4 gap-2 flex flex-col-2 md:flex-col'>
                <li><Link to="/" className='text-sm text-[white]'>Home</Link></li>
              </ul>
            </div>
            {/* <div className="w-full md:w-[22%] h-[70%]  flex flex-col items-center border-r-2 border-[#ffffff25]">

              <h4 className='mt-8 text-[white]'>Help</h4>
              <ul className='mt-4 gap-2 flex flex-col'>
                <li><Link to="/gemstoneHome" className='text-sm text-white'>Buying guid</Link></li>
                <li><Link to="/gemstoneHome" className='text-sm text-white'>Payment guid</Link></li>
             </ul>
            </div> */}
            <div className="w-full md:w-[22%] h-[70%] flex flex-col items-center border-r-2 border-[#ffffff25]">
              
              <h4 className='mt-8 text-white'>Contact Us on</h4>
              <div className='w-full h-20 flex justify-center items-center gap-4'>
                <motion.div className='w-[30px] h-[30px] cursor-pointer shadow-md rounded-full'
                 whileTap={{scale:0.6}}>
                
                <a href='https://t.me/Namoel'>
                  <img src={Telegram} alt="facebook" className='w-full h-full' />
                </a>

               </motion.div>
              
                <motion.div className='w-[30px] h-[30px] cursor-pointer shadow-md rounded-full'
                 whileTap={{scale:0.6}}>
               <a href=' https://wa.me/251936970345'><img src={Imo} alt="facebook" className='w-full h-full rounded-full'/></a>
               </motion.div>
               </div>
            </div>
            <div className="w-full md:w-[22%] h-[70%]  flex 
                            flex-col items-center border-r-2 border-[#ffffff25]">
                <h4 className='mt-8 text-[white] flex'>Location <FaMapMarker className='ml-2'/></h4>
                <span className='text-sm mt-4 text-white'>Ethiopia/Addis Ababa</span>
          </div>
        </div>
  )
}

export default Footer