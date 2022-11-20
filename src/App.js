import { BrowserRouter ,Routes,Route } from 'react-router-dom';
import PrivateRoutes from "./utils/PrivateRoutes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, useEffect, useState} from "react";
import { useSelector } from "react-redux";
import ForgetPassword from "./pages/ForgetPassword";
import PageIsNotFound from "./components/PageIsNotFound";
import { lazy } from "react";
import Loader from './components/Loader';
import SentToEmail from './pages/SentToEmail';

const LandingPage = lazy(()=>import('./pages/LandingPage'))
const Home = lazy(()=>import('./pages/Home'))
const Profile = lazy(()=>import('./pages/Profile'))
const Upload = lazy(()=>import('./pages/Upload'))
const SignUp = lazy(()=>import('./pages/SignUp'))
const AboutUs = lazy(()=>import('./pages/AboutUs'))
const ContactUs = lazy(()=>import('./pages/ContactUs'))
const Login = lazy(()=>import('./pages/Login'))


function App() {
 
  const {isLoggedIn,load} = useSelector(state=>state.auth)
  const [listSelected,setListSelected] = useState('')
  

useEffect(()=>{},[isLoggedIn])
  return (
    <div className="w-full h-auto flex justify-center items-center ">
      <BrowserRouter>
      <ToastContainer/>
       <Suspense fallback={<div className='w-full h-full bg-slate-500'><Loader/></div>}>
      <Routes>
      <Route element={<PrivateRoutes isLoggedIn={isLoggedIn}/>}>
      <Route 
        path={'/home'} exact  
        element={<Home listSelected={listSelected} 
        setListSelected={setListSelected}/>}
      />
      <Route 
       path={'/profile'} exact  
       element={<Profile 
       listSelected={listSelected} 
       setListSelected={setListSelected}/>}
       />
      <Route 
       path={'/upload'} exact  
       element={<Upload/>} 
       listSelected={listSelected} 
       setListSelected={setListSelected}
      />
      <Route 
       path={'/edit/:id'} exact  
       element={<Upload/>} 
       listSelected={listSelected} 
       setListSelected={setListSelected}
       />
      </Route>  
      
      <Route 
        path={'/'} exact 
        element={<LandingPage isLoggedIn={isLoggedIn}/>}
      />

      <Route 
        path={'/signup'} exact  
        element={<SignUp/>}
      />

      <Route 
       path={'/aboutUs'} exact  
       element={<AboutUs listSelected={listSelected} 
       setListSelected={setListSelected}/>}
      />

      <Route 
       path={'/contactUs'} exact  
       element={<ContactUs listSelected={listSelected} 
       setListSelected={setListSelected}/>}
      />

      <Route 
       path={'/login'} exact  
       element={<Login/>}
      />

      <Route 
       path={'/password/:id'} exact  
       element={<ForgetPassword/>}
      />
      <Route 
       path={'/restPassword'} exact  
       element={<SentToEmail/>}
      />

      <Route exact 
      path="/*" 
      element={<PageIsNotFound/>}
      />

     </Routes>
     </Suspense>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
