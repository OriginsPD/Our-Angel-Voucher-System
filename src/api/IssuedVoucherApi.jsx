import React, { useState, useContext, useEffect } from 'react';

// Context Api
import FormContextProvider, { FormContext } from '../context/FormContext';
import { AuthContext } from '../context/AuthContext';


const IssuedVoucherApi = () => {
    const { resetCredentials, changeMode, credentials, editCredentials } = useContext(FormContext)
    const { token } = useContext(AuthContext)


    const [issued, setIssued] = useState([])
    const [queryId, setQueryId] = useState()

    const accessPoint = 'http://127.0.0.1:8000/api'

    const updateToken = () => {
        let newToken = ''
        return newToken = JSON.parse(sessionStorage.getItem('token'))
    }

    const configUri = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${updateToken()}`,
        }
    }
    const indexIssued = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${updateToken()}`);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch(`${accessPoint}/issue/`, requestOptions)
            .then(response => response.json())
            .then(result => setIssued(result))
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    // Add New Issued Information
    const addIssued = async () => {
        await fetch(`${accessPoint}/issue`, {
            method: 'POST',
            ...configUri,
            body: JSON.stringify(credentials)
        }).then((res) => res.json())
            .then((data) => console.log(data))


    }

    // Find Issued Information
    const findIssued = async (id) => {
        setQueryId(id)

        await fetch(`${accessPoint}/issue/${id}`, {
            method: 'GET',
            ...configUri
        })
            .then((res) => res.json())
            .then((data) => setIssued(data))
        // .then((data) => console.log(data))



    }

    // Edit Issued Information
    const editIssued = async () => {
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

        await fetch(`${accessPoint}/issue/${queryId}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


    }

    const config = {
        indexIssued,
        addIssued,
        findIssued,
        editIssued,
        issued

    }

    useEffect(() => {

    }, [queryId])

    return { ...config }

}

export default IssuedVoucherApi