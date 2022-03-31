import React, { useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

// Context Api
import { FormContext } from '../context/FormContext';
import { AuthContext } from '../context/AuthContext';

function AuthApi() {
    const navigate = useNavigate()
    const location = useLocation()

    // const from = location.state?.from?.pathname || "/"

    const { credentials } = useContext(FormContext)
    const { getToken, clearToken, token, getAuthInfo } = useContext(AuthContext)

    const accessPoint = 'http://127.0.0.1:8000/api'

    const authLogin = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        // myHeaders.append("Authorization", `Bearer ${token}`);

        const urlencoded = new URLSearchParams();
        urlencoded.append("email", credentials.email);
        urlencoded.append("password", credentials.password);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        await fetch(`${accessPoint}/login`, requestOptions)
            .then(response => response.json())
            .then(data => getToken(data.body))
            // .then(data => console.log(data.body.user.userType))
            .catch(error => console.log('error', error));

        navigate('/Admin')

        // navigate(from, { replace: true })

    }

    const authSignUp = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        const urlencoded = new URLSearchParams();
        urlencoded.append("username", credentials.username);
        urlencoded.append("email", credentials.email);
        urlencoded.append("password", credentials.password);
        urlencoded.append("password_confirmation", credentials.confirmPassword);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        await fetch(`${accessPoint}/register`, requestOptions)
            .then((response) => response.json())
            .then((data) => getToken(data.body))
            // .then((data) => console.log(data.body))
            .catch(error => console.log('error', error));

        // navigate('/student-list')


    }

    const authLogout = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${accessPoint}/logout`, requestOptions)
            .then(response => response.json())
            // .then(data => console.log(data))
            .catch(error => console.log('error', error));

        clearToken()

        navigate('/')
    }


    return { authLogin, authSignUp, authLogout }
}

export default AuthApi;