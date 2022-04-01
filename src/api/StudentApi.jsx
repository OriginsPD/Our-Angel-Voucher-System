import React, { useState, useContext } from 'react';

import { FormContext } from '../context/FormContext';
// import { AuthContext } from '../context/AuthContext';

function StudentApi() {
    const { resetCredentials, changeMode, credentials, editCredentials } = useContext(FormContext)
    // const { token } = useContext(AuthContext)

    const [student, setStudent] = useState([])
    const [queryId, setQueryId] = useState(0)

    const [refreshVal, setRefreshVal] = useState(0);

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

    const operation = () => {
        setRefreshVal((previousState) => ({ ...previousState }) + parseInt(1))
    }
    // console.log(token)

    // Get All Student Information
    const indexStudents = async () => {
        const response = await fetch(`${accessPoint}/studentdir`, {
            method: 'GET',
            ...configUri,
        }).then((res) => res.json()
        ).then((data) => console.log(data))

        // const data = await response.json()
        // setStudent(data)
        // console.log(data)

        operation()

    }

    // Add New Student Information
    const addStudent = async () => {
        await fetch(`${accessPoint}/studentdir`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${updateToken()}`
            },
            body: JSON.stringify(credentials)
        }).then((res) => res.json()
        ).then((data) => console.log(data))


    }

    // Find Students Information
    const findStudent = async (studentID) => {
        await fetch(`${accessPoint}/studentdir/${studentID}`, {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${updateToken()}`
            },
        })
            .then((res) => res.json())
            .then((data) => editCredentials(data))
        // .then((data) => console.log(data]))

        setQueryId(studentID)

    }

    // Edit Student Information
    const editStudent = async () => {
        await fetch(`${accessPoint}/studentdir/${queryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${updateToken()}`
            },
            body: JSON.stringify(credentials)
        })


    }


    // Delete Student Information
    const deleteStudent = async (valueID) => {
        await fetch(`${accessPoint}/studentdir/${valueID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${updateToken()}`
            },
        }).then((res) => res.json())
            .then((data) => console.log(data))

    }


    return { student, setStudent, indexStudents, addStudent, findStudent, editStudent, deleteStudent, refreshVal }
}

export default StudentApi;