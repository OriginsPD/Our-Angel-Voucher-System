import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthConfig from './config/AuthConfig'
import AdminLayout from './layout/AdminLayout'
import ScreenLayout from './layout/ScreenLayout'
import AdminIssueScreen from './screens/AdminIssuedScreen'
import AdminHomeScreen from './screens/AdminHomeScreen'

import HomeScreen from './screens/HomeScreen'

const App = () => {
    return (
        <Routes>

            <Route element={<ScreenLayout />}>
                {/* HomeScreen */}
                <Route exact path='/' element={<HomeScreen />} />
                <Route element={<AdminLayout />}>
                    <Route path='/admin' element={<AdminHomeScreen />} />
                    <Route path={'/issue'} element={<AdminIssueScreen />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default App