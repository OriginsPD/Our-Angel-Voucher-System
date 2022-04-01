import React, { useContext } from 'react';
import { useNavigate, useOutlet, useLocation, Outlet, Navigate } from 'react-router-dom'
// import { AuthContext } from '../context/AuthContext';


const AuthConfig = ({ allowedRole }) => {
    // const { authInfo } = useContext(AuthContext)
    const authString = sessionStorage.getItem('AuthDetails');
    const authInfo = (!authString)
        ? 0
        : JSON.parse(authString)

    const location = useLocation()
    const navigation = useNavigate()

    console.log(authInfo.userType)

    return (
        (authInfo.userType == 3)
            ? <Outlet />
            : (authInfo.userType == 1)
                ? <Outlet />
                : <Navigate to='/' state={{ from: location }} replace />
    )
}

export default AuthConfig;