import React from 'react'

import '../style/modal.css'
const Modal = ({isModalExist,modalData,setModalState}) => {

  return (
  <>
   
  { isModalExist? <div className='w-full h-[120vh]  bg-[#121212a1] 
                   z-[3000] fixed flex  justify-center md:flex-col
                   items-center'>

         <div className='main-container w-[80%] h-[60%] flex bg-white z-30 flex-col '>
          <div className='w-full h-10  flex justify-end items-center'>
            <div className='modal-close-btn text-2xl cursor-pointer
                         text-white bg-blue-500 flex justify-center
                          items-center' onClick={()=>setModalState(false)}>x</div>
                                 
          </div>
          <div className='modal-inner-container w-full h-[91%] flex'>
            <div className='modal-image bg-green-500 ml-4 shadow-md  rounded-md'>
            <img src={modalData?.image} alt="item" className='w-full h-full'/>
            </div>

            <div className='w-[70%] h-full flex-col'>
                <h1 className='text-2xl ml-5'>{modalData?.title}</h1>
                <h1 className='text-[#121212be] mt-9  
                                 px-5 w-full h-[30%] flex 
                                  justify-center items-center'
                                  >{modalData?.name}</h1>
            </div>
          </div>
         </div>
    </div>
:null}
    </>
  )
}

export default Modal