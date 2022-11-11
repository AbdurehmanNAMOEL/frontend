import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteStone} from '../redux/features/gemstoneSlice'
import {toast} from 'react-toastify'
import Trash from '../images/toTrash.svg'

import { Link } from 'react-router-dom'

const StoneCard = ({image,title,name,weight,desc,id}) => {
  console.log(id);
 const dispatch =  useDispatch()

    const deletedStone= ()=>{
        dispatch(deleteStone({id,toast}))
    }
  
  return (
    <div  className=' w-[250px] bg-white border-[#1212121e] h-[400px] mb-4 md:w-[60%] md:h-[180px] flex flex-col md:flex-row shadow-md rounded-md border-2 '>
     <div className='w-full h-[40%] md:w-[30%] md:h-full'>
        <img src={image} alt=""  className='w-full h-full'/>
     </div>
     <div className='w-full md:w-[25%] h-full flex flex-col text-white'>
      <span className='text-xl flex w-full text-[#121212] justify-center items-center md:justify-start md:ml-4 mt-3'>{title}</span>
      <span className='text-[16px] font-mono text-[#121212] w-full flex justify-center items-center md:justify-start md:ml-4 md:mt-3'>{`weight: ${weight}`}</span>
      <span className='text-[12px] mt-2 font-mono text-[#121212] w-full flex justify-center items-center md:justify-start md:ml-4 md:mt-3'>{`by ${name}`}</span>
     </div>
     <div className='w-[35%] h-[200px] md:h-full flex flex-col  text-[#121212af]'>
       <h1 className='mt-4  ml-2 text-[#121212] md:ml-0'>Description</h1>
       <p className='text-sm  mt-2 ml-2 text-[#121212]'>{desc}</p>
     </div>
     <div className='mt-5 md:mt-0 md:w-[20%] h-full flex justify-center items-center md:flex-col gap-4'>
      <div className='w-[80px] text-[#121212] h-[40px] -mt-8 md:h-[20%] md:mt-0  md:w-[50%] flex justify-center items-center border-2 border-blue-400 rounded-md cursor-pointer text-white hover:bg-blue-500'>
        <Link to={`/edit/${id}`}>Edit</Link>
      </div>
      <img onClick={deletedStone} src={Trash} alt="" className='w-[120px] h-[50px] -mt-12 md:mt-0  md:h-[30%] md:w-[60%] flex justify-center items-center rounded-md cursor-pointer text-white '/>
     </div>
    </div>
  )
}

export default StoneCard