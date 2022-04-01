import { useState, useContext } from 'react';

// Context Api
import { FormContext } from '../context/FormContext';

const VoucherHistoryApi = () => {
    const { credentials, editCredentials } = useContext(FormContext)

    const [history, setHistory] = useState([])

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

    const indexHistory = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${updateToken()}`);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch(`${accessPoint}/voucher-history`, requestOptions)
            .then(response => response.json())
            .then(result => setHistory(result))
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    // Add NewHistory Information
    const addHistory = async () => {
        await fetch(`${accessPoint}/voucher-history`, {
            method: 'POST',
            ...configUri,
            body: JSON.stringify(credentials)
        }).then((res) => res.json())
            .then((data) => console.log(data))


    }

    // FindHistory Information
    const findHistory = async (id) => {
        sessionStorage.setItem('queryId', id)

        await fetch(`${accessPoint}/voucher-history/${id}`, {
            method: 'GET',
            ...configUri
        })
            .then((res) => res.json())
            .then((data) => editCredentials(data))
        // .then((data) => console.log(data))


    }

    // EditHistory Information
    const editHistory = async () => {

        let queryId = 0;
        queryId = sessionStorage.getItem('queryId')

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

        await fetch(`${accessPoint}/voucher-history/${queryId}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


    }

    const config = {
        indexHistory: indexHistory,
        addHistory: addHistory,
        findHistory: findHistory,
        editHistory: editHistory,
        history
    }


    return { ...config }

}

export default VoucherHistoryApi