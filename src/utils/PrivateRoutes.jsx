import { Outlet,Navigate } from "react-router-dom"

const privateRoutes = ({isLoggedIn}) => {
    let auth ={'token':isLoggedIn}
    console.log(isLoggedIn)
  return (
    auth.token ? <Outlet/> : <Navigate to={'/login'}/>
  )
}

export default privateRoutes