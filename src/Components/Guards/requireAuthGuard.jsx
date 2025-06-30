import React, {useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { Navigate, useLocation } from 'react-router-dom';

function RequireAuth({children}) {
    const {authuser}=useContext(AuthContext);
    if(!authuser)
    {
        const location = useLocation()
        console.log("auth")
        return <Navigate to="/login" state={{path:location.pathname}} ></Navigate>
    }
    else{
      console.log("hi auth")
      return children
    }
}

export default RequireAuth