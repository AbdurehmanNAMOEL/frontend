import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../style/listStyle.css'
import { navData } from '../utils/defaultGemStonesData'
const UnOrderList = ({listSelected,setListSelected}) => {
     
  return (
  <ul>
        {
         navData.map(data=>
         <li
         key={data.id}   
         name={data.title}
        //  onClick={(e)=>setListSelected(e.target.name)}
         style={{color:`${listSelected === data.title ? "cyan":"#12121283"}`}}  
         >
         <Link to={data.link}>
            {data.title}
         </Link>
         </li>)
        }
    </ul>
  )
}

export default UnOrderList