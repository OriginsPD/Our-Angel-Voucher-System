import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import AuthConfig from './config/AuthConfig'
import HomeScreen from './screens/HomeScreen'
import AdminLayout from './layout/AdminLayout'
import ScreenLayout from './layout/ScreenLayout'
import AdminHomeScreen from './screens/AdminHomeScreen'
import AdminIssueScreen from './screens/AdminIssuedScreen'

import AdminHistoryScreen from './screens/AdminHistoryScreen'
import AdminVoucherScreen from './screens/AdminVoucherScreen'
import ParentLayout from './layout/ParentLayout'
import ParentHomeScreen from './screens/ParentHomeScreen'

const App = () => {
    return (
        <Routes>

            <Route element={<ScreenLayout />}>
                {/* HomeScreen */}
                <Route exact path='/' element={<HomeScreen />} />
                {/* <Route element={<AuthConfig />}> */}
                <Route element={<AdminLayout />}>
                    <Route path='/admin' element={<AdminHomeScreen />} />
                    <Route path='/voucher' element={<AdminVoucherScreen />} />
                    <Route path={'/issue'} element={<AdminIssueScreen />} />
                    <Route path='/history' element={<AdminHistoryScreen />} />
                </Route>
                {/* </Route> */}
                {/* <Route element={<AuthConfig />}> */}
                <Route element={<ParentLayout />}>
                    <Route path='/parent' element={<ParentHomeScreen />} />
                </Route>
                {/* </Route> */}
            </Route>
        </Routes>
    )
}

export default App