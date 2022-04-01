import { useState, useContext, useEffect } from 'react';

// Context Api
import { FormContext } from '../context/FormContext';



const RegisterStudentApi = () => {
    const { resetCredentials, changeMode, credentials, editCredentials } = useContext(FormContext)

    const [regStudent, setRegStudent] = useState([])

    const [refresh, setRefresh] = useState(0)

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

    const indexRegStudent = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${updateToken()}`);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        await fetch(`${accessPoint}/register-student`, requestOptions)
            .then(response => response.json())
            .then(result => setRegStudent(result))
            // .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    // Add NewRegStudent Information
    const addRegStudent = async () => {
        await fetch(`${accessPoint}/register-student`, {
            method: 'POST',
            ...configUri,
            body: JSON.stringify(credentials)
        }).then((res) => res.json())
            .then((data) => console.log(data))


    }

    // FindRegStudent Information
    const findRegStudent = async (id) => {
        sessionStorage.setItem('queryId', id)

        await fetch(`${accessPoint}/register-student/${id}`, {
            method: 'GET',
            ...configUri
        })
            .then((res) => res.json())
            .then((data) => setRegStudent(data))
            // .then((data) => console.log(data))


    }

    // EditRegStudent Information
    const editRegStudent = async () => {

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

        // console.log(queryId)

        await fetch(`${accessPoint}/register-student/${queryId}`, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        setRefresh((perviousState) => perviousState + parseInt(1))

    }

    const config = {
        indexRegStudent: indexRegStudent,
        addRegStudent: addRegStudent,
        findRegStudent: findRegStudent,
        editRegStudent: editRegStudent,
        regStudent,
        refresh
    }


    return { ...config }

}

export default RegisterStudentApi