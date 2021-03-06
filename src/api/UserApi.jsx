import React, { useState, useContext, useEffect } from 'react';

// Context Api
import { FormContext } from '../context/FormContext';


const UserApi = () => {
    const { resetCredentials, changeMode, credentials, editCredentials } = useContext(FormContext)

    const [user, setUser] = useState([])

    const [queryId, setQueryId] = useState()

    const [refresh, setRefresh] = useState(0)

    const reloadIndex = () => {
        setRefresh((perviousState) => perviousState + parseInt(1))
    }

    const accessPoint = 'http://127.0.0.1:8000/api'

    const updateToken = () => {
        let newToken = ''
        return newToken = JSON.parse(sessionStorage.getItem('token'))
    }

    const configUri = {
        headers: {
            'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': `Bearer ${updateToken()}`,
        }
    }

    const indexUser = async () => {
        const myHeaders = new Headers();
        // myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${updateToken()}`);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch("http://127.0.0.1:8000/api/guardian", requestOptions)
            .then((response) => response.json())
            .then((result) => setUser(result))
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));

        // console.log(token)


    }

    // Add New User Information
    const addUser = async () => {
        await fetch(`${accessPoint}/guardian`, {
            method: 'POST',
            ...configUri,
            body: JSON.stringify(credentials)
        }).then((res) => res.json())
            .then((data) => console.log(data))


    }

    // Find User Information
    const findUser = async (id) => {
        setQueryId(id)

        await fetch(`${accessPoint}/guardian/${id}`, {
            method: 'GET',
            ...configUri
        })
            .then((res) => res.json())
            .then((data) => editCredentials(data))
        // .then((data) => console.log(data))



    }

    // Edit User Information
    const editUser = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${updateToken()}`);

        const urlencoded = new URLSearchParams();
        urlencoded.append("name", credentials.name);
        urlencoded.append("quantity", credentials.quantity);
        urlencoded.append("price", credentials.price);

        const requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        console.log(queryId)

        fetch(`${accessPoint}/guardian/${queryId}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        reloadIndex()
    }

    const config = {
        indexUser,
        addUser,
        findUser,
        editUser,
        user,
        refresh

    }

    return { ...config }

}

export default UserApi