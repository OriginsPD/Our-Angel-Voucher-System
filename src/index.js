import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


// Context APIs
import AuthContextProvider, { AuthContext } from './context/AuthContext';
import ThemeContextProvider from './context/ThemeContext';
import FormContextProvider from './context/FormContext';


ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeContextProvider>
                <FormContextProvider>
                    <AuthContextProvider>
                        <Routes>
                            <Route path='/*' element={<App />} />
                        </Routes>
                    </AuthContextProvider>
                </FormContextProvider>
            </ThemeContextProvider>
        </Router>
    </React.StrictMode>
    , document.getElementById('root')
)
