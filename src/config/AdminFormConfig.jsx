import React, { useContext } from 'react'


// Yup Schema Object
import * as yup from 'yup'

// Context Api's
import { FormContext } from '../context/FormContext'
import VoucherApi from '../api/VoucherApi'

// Toggle Modal
import ToggleModal from '../components/ToggleModal'


// Schemas For Form
const schema = yup.object({
    name: yup.string().required('Voucher name is required'),
    quantity: yup.string().required('Quantity is required'),
    price: yup.string().min(3).max(6).required('Voucher Price is required'),
})

const AdminFormConfig = () => {
    const { CreateVoucherForm, formMode, setFormMode } = useContext(FormContext)
    const { addVoucher, editVoucher } = VoucherApi()

    const { toggle, openModal } = ToggleModal()

    // const schemaState = (formMode) ? schemaLogin : schemaRegister
    // const formType = (formMode) ? LoginForm : SignUpForm
    // const formSubmit = (formMode) => 

    const configModal = {
        show: openModal,
        toggle: toggle,
        schema,
        formType: CreateVoucherForm,
        formMode: formMode,
        formSubmit: (formMode) ? addVoucher : editVoucher
    }


    const toggleCreate = () => {
        setFormMode(true)
        toggle()
    }

    const toggleEdit = () => {
        setFormMode(false)
        toggle()
    }

    return { configModal, toggleCreate, toggleEdit }

}

export default AdminFormConfig