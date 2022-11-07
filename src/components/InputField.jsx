import React from 'react'
import { useState } from 'react';
import { pattern } from '../verifier/patternVerifier';
const InputField = ({title,type,placeholder,error,setValue,value,name,id}) => {

const [isValid,setValid] = useState(false)
const [isEmpity,setEmpty] = useState()

const validate = (field,regex)=>{
      let inputValue = field.value
      if(!regex.test(inputValue)){
      if(inputValue !== ''){setEmpty(error)
      }else if(inputValue===''){setEmpty('input is required')}
      setValid(true)
   }else setValid(false)
  }
  
const handleInput =(e)=>{
    validate(e.target,pattern[e.target.attributes.name.value])
    setValue(e.target.value)
        
}
  return (
    <div className='w-[80%] h-auto mb-3 flex flex-col -mt-1'>
        <label className='text-white mb-1 text-[14px]'>{title}</label>
        <input 
        type={type} 
        placeholder={placeholder}
        onChange={handleInput}
        value={value}  
        name={name}
        id={id}
        className='h-[35px] indent-2 outline-none border-[1px] border-[#12121259] rounded-[3px]'/>
        {isValid ? <label className='text-red-600 mt-1 text-sm font-Poppinsk'>{isEmpity}</label>:''}
    </div>
  )
}

export default InputField