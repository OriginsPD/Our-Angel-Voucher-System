import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../routes/NavBar'

import { AuthContext } from '../context/AuthContext'

const ScreenLayout = () => {
    const { isAuth } = useContext(AuthContext)
    return (
        <div>
            {/* {
                (isAuth) 
                ? null
                    : <NavBar /> 
            } */}

            <Outlet />
        </div>
    )
}

export default ScreenLayout