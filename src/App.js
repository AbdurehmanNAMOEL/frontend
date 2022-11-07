import SignUp from "./pages/SignUp";
import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Upload from "./pages/Upload";
import PrivateRoutes from "./utils/PrivateRoutes";
 import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";

function App() {
 
   
    const {isLoggedIn} = useSelector(state=>state.auth)
 

    useEffect(()=>{
     
   
    },[])
  return (
    <div className="w-full h-auto flex justify-center items-center ">
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
      <Route element={<PrivateRoutes isLoggedIn={isLoggedIn}/>}>
      <Route path={'/'} exact  element={<Home/>}/>
      <Route path={'/aboutUs'} exact  element={<AboutUs/>}/>
      <Route path={'/contactUs'} exact  element={<ContactUs/>}/>
      <Route path={'/profile'} exact  element={<Profile/>}/>
      <Route path={'/upload'} exact  element={<Upload/>}/>
      <Route path={'/edit/:id'} exact  element={<Upload/>}/>
      </Route>  
      <Route path={'/signup'} exact  element={<SignUp/>}/>
      <Route path={'/login'} exact  element={<Login/>}/>
      
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
