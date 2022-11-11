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
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import ForgetPassword from "./pages/ForgetPassword";
import Navbar2 from "./components/NavBar";
import PageIsNotFound from "./components/PageIsNotFound";

function App() {
 
  const {isLoggedIn} = useSelector(state=>state.auth)
  const [listSelected,setListSelected] = useState('')

useEffect(()=>{},[isLoggedIn])
  return (
    <div className="w-full h-auto flex justify-center items-center ">
      <BrowserRouter>
      <ToastContainer/>
      <Routes>
      <Route element={<PrivateRoutes isLoggedIn={isLoggedIn}/>}>
      <Route path={'/home'} exact  element={<Home listSelected={listSelected} setListSelected={setListSelected}/>}/>
      <Route path={'/profile'} exact  element={<Profile listSelected={listSelected} setListSelected={setListSelected}/>}/>
      <Route path={'/upload'} exact  element={<Upload/>} listSelected={listSelected} setListSelected={setListSelected}/>
      <Route path={'/edit/:id'} exact  element={<Upload/>} listSelected={listSelected} setListSelected={setListSelected}/>
      </Route>  
      
      <Route path={'/'} exact  element={<LandingPage isLoggedIn={isLoggedIn}/>}/>
      <Route path={'/signup'} exact  element={<SignUp/>}/>
      <Route path={'/aboutUs'} exact  element={<AboutUs listSelected={listSelected} setListSelected={setListSelected}/>}/>
      <Route path={'/contactUs'} exact  element={<ContactUs listSelected={listSelected} setListSelected={setListSelected}/>}/>
      <Route path={'/login'} exact  element={<Login/>}/>
      <Route path={'/password'} exact  element={<ForgetPassword/>}/>
      <Route exact path="/*" element={<PageIsNotFound/>}/>
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
