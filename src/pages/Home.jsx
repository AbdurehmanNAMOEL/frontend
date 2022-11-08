import React from 'react'
import NavBar from '../components/NavBar';
import StoneCard from '../components/StoneCard';
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { getStone } from '../redux/features/gemstoneSlice';
import LoadSvg  from '../images/load.svg'
import { getSeller} from '../redux/features/authSlice';
import Loader from '../components/Loader';
import Footer from '../components/Footer';


const Home = () => {

  const {stoneList} = useSelector(state=>state.stone)
  const {user,load} = useSelector(state=>state.auth)
  const dispatch= useDispatch()
  
 

  useEffect(()=>{
    dispatch(getStone());
    dispatch(getSeller())
   
   
  },[])
  return (
    <div className='w-full h-auto  flex flex-col'>
     <NavBar
     path={'/'}
     buttonLabel={'Home'} 
     email={user?.email}
     profileImage={user?.profileImage}
     />

     <div className='w-full h-auto mt-[100px] gap-4  grid-cols-1 grid grid-flow-row  place-items-center xxs:grid-cols-2 md:grid-cols-1'>
     {load? <Loader/>:''}
     { stoneList?.length === 0?
     <div className='flex flex-col mt-52'>
     <h1 className='text-3xl text-[#121212a2]'>Upload first</h1>
     <img src={LoadSvg} alt="" />
     </div>: stoneList?.map(item=>
      <StoneCard 
      key={item._id} 
      name={user?.name} 
      title = {item.title} 
      image={item.image} 
      desc={item.desc} 
      weight={item.weight}
      id={item._id}
      />)}
      
     </div>
     
    </div>
  )
}

export default Home