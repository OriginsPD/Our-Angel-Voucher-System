import React, { useState, useEffect, createContext } from 'react';

export const FormContext = createContext()

const FormContextProvider = ({ children }) => {
    // Define States 
    const [editMode, setEditMode] = useState(false)
    const [formMode, setFormMode] = useState(false)

    const { testRef, refreshCredentials } = RefreshRender()

    const [credentials, setCredentials] = useState({
        username: '',
        dob: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        password: '',
        confirmPassword: '',
        price: '',
        quantity: '',
        name: '',
        id: ''
    })

    const resetCredentials = () => {
        setCredentials((perviousState) => ({
            ...perviousState,
            username: '',
            dob: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            password: '',
            confirmPassword: '',
            price: '',
            quantity: '',
            name: '',
            id: ''
        }))

    }


    const editCredentials = (newCredentials = 0) => {
        if (newCredentials !== 0) {
            setCredentials(({
                ...newCredentials,
            }))
        }
        testRef()

    }


    const SignUpForm = [
        { id: 1, type: 'text', name: 'username', label: 'Full Name', value: credentials.username },
        { id: 2, type: 'email', name: 'email', label: 'Email', value: credentials.email },
        { id: 3, type: 'password', name: 'password', label: 'Password', value: credentials.password },
        { id: 4, type: 'password', name: 'confirmPassword', label: 'Password Confirmation', value: credentials.confirmPassword }
    ]

    const LoginForm = [
        { id: 1, type: 'email', name: 'email', label: 'Email', value: credentials.email },
        { id: 2, type: 'password', name: 'password', label: 'Password', value: credentials.password },
    ]


    const CreateVoucherForm = [
        { id: 1, type: 'text', name: 'name', label: 'Voucher Name', value: credentials.name },
        { id: 2, type: 'number', name: 'quantity', label: 'Quantity', value: credentials.quantity },
        { id: 3, type: 'number', name: 'price', label: 'Total Price', value: credentials.price },
    ]

    const OrderVoucherForm = [
        { id: 2, type: 'select', name: 'name', label: 'Voucher Name', value: credentials.name },
        { id: 1, type: 'select', name: 'id', label: 'Student Name', value: credentials.id },
        { id: 3, type: 'number', name: 'quantity', label: 'Quantity', value: credentials.quantity },
        // { id: 4, type: 'number', name: 'price', label: 'Total Price', value: credentials.price },
    ]

    // console.log(CreateVoucherForm)


    const storeInfo = (event) => {
        const { name, value } = event.target
        setCredentials((previousState) => ({
            ...previousState,
            [name]: value
        }))
        console.log(credentials)
    }

    const changeMode = () => {
        setEditMode(!editMode)
    }


    const config = {
        credentials,
        editMode,
        changeMode: changeMode,
        formMode,
        setFormMode,
        editCredentials: editCredentials,
        resetCredentials: resetCredentials,
        storeInfo: storeInfo,
        LoginForm,
        SignUpForm,
        CreateVoucherForm,
        OrderVoucherForm

    }

    useEffect(() => {
        // setCredentials((currentState) => ({ currentState, ...credentials }))
        // console.log(credentials)
        // // console.log(refreshCredentials)
    }, [credentials])


    return (
        <FormContext.Provider value={{ ...config }}>
            {children}
        </FormContext.Provider>
    )


}

const RefreshRender = () => {
    const [refreshCredentials, setRefreshCredentials] = useState(0)

    const testRef = () => {
        setRefreshCredentials((currentState) => currentState + parseInt(1))
        // console.log(refreshCredentials)
    }

    return { testRef, refreshCredentials }
}

export default FormContextProvider;