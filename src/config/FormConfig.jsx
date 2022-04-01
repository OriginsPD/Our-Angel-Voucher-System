import React, { useContext } from 'react'


// Yup Schema Object
import * as yup from 'yup'

// Context Api's
import { FormContext } from '../context/FormContext'
import AuthApi from '../api/AuthApi'
// Toggle Modal
import ToggleModal from '../components/ToggleModal'


// Schemas For Form
const schemaLogin = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(4).max(8).required('Password is required'),
})

const schemaRegister = yup.object({
    username: yup.string().required('Username is required'),
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(4).max(8).required('Password is required'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
})

const FormConfig = () => {
    const { LoginForm, SignUpForm, formMode, setFormMode } = useContext(FormContext)
    const { authLogin, authSignUp } = AuthApi()

    const { toggle, openModal } = ToggleModal()

    const formLabel = {
        name: (formMode) ? 'Login' : 'Register',
        button: (formMode) ? 'Login' : 'Register Now'
    }

    const schemaState = (formMode) ? schemaLogin : schemaRegister
    const formType = (formMode) ? LoginForm : SignUpForm
    // const formSubmit = (formMode) => 

    const configModal = {
        show: openModal,
        toggle: toggle,
        schema: schemaState,
        formType: formType,
        formMode: formMode,
        formSubmit: (formMode) ? authLogin : authSignUp,
        formLabel
    }


    const toggleLogin = () => {
        setFormMode(true)
        toggle()
    }

    const toggleRegister = () => {
        setFormMode(false)
        toggle()
    }

    return { configModal, toggleLogin, toggleRegister }

}

export default FormConfig