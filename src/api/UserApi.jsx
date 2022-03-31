import React, { useState, useContext, useEffect } from 'react';

// Context Api
import FormContextProvider, { FormContext } from '../context/FormContext';
import { AuthContext } from '../context/AuthContext';


const UserApi = () => {
    const { resetCredentials, changeMode, credentials, editCredentials } = useContext(FormContext)
    const { token } = useContext(AuthContext)


    const [user, setUser] = useState([])
    const [queryId, setQueryId] = useState()

    const accessPoint = 'http://127.0.0.1:8000/api'

    const configUri = {
        headers: {
            'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }

    // console.log(queryId)

    const indexUser = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 1|awk24MNd4I3dsvs04HDAwGBSSWlCCkAf2BHehZ8K");

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
        // await fetch(`${accessPoint}/guardian/${queryId}`, {
        //   method: 'PUT',
        //   ...configUri,
        //   body: JSON.stringify(credentials)
        // }).then((res) => res.json())
        //   .then((data) => console.log(data))


        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer 1|awk24MNd4I3dsvs04HDAwGBSSWlCCkAf2BHehZ8K");

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


    }

    const config = {
        indexUser,
        addUser,
        findUser,
        editUser,
        user

    }

    return { ...config }

}

export default UserApi