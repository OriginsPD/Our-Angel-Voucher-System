import React from 'react'
import { Outlet } from 'react-router-dom'

const ParentLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default ParentLayout