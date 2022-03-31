import React from 'react'

import { Outlet } from 'react-router-dom'
import AdminSideBar from '../screens/SideBar/AdminSideBar'

const AdminLayout = () => {
    return (
        <div className="min-h-full flex">
            <AdminSideBar />
            <Outlet />
        </div>
    )
}

export default AdminLayout