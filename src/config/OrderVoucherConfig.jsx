import React, { useContext, useEffect } from 'react'


// Yup Schema Object
import * as yup from 'yup'

// Context Api's
import { FormContext } from '../context/FormContext'
import VoucherApi from '../api/VoucherApi'

// Toggle Modal
import ToggleModal from '../components/ToggleModal'
import RegisterStudentApi from '../api/RegisterStudentApi'
import IssuedVoucherApi from '../api/IssuedVoucherApi'


// Schemas For Form
const schema = yup.object({
    id: yup.string().required('Please Select a Student'),
    name: yup.string().required('Voucher name is required'),
    quantity: yup.string().max(1).required('Quantity is required'),
    // price: yup.string().min(3).max(6).required('Voucher Price is required'),
})

const OrderVoucherConfig = () => {
    const { OrderVoucherForm, formMode, setFormMode } = useContext(FormContext)
    const { addVoucher, editVoucher, voucher, indexVoucher } = VoucherApi()
    const { addIssued } = IssuedVoucherApi()
    const { findRegStudent, regStudent } = RegisterStudentApi()

    const authString = sessionStorage.getItem('AuthDetails');
    const authInfo = (!authString)
        ? 0
        : JSON.parse(authString)

    useEffect(() => {
        indexVoucher()
        findRegStudent(authInfo.id)
    }, [])


    const { toggle, openModal } = ToggleModal()

    const formLabel = {
        name: 'Order Voucher',
        button: 'Order Now'
    }

    const configModal = {
        show: openModal,
        toggle: toggle,
        schema,
        formType: OrderVoucherForm,
        formMode: formMode,
        formSubmit: addIssued,
        formLabel,
        option: voucher,
        students: regStudent
    }


    const toggleOrder = () => {
        setFormMode(true)
        toggle()
    }

    const toggleEdit = () => {
        setFormMode(false)
        toggle()
    }

    return { configModal, toggleOrder }

}

export default OrderVoucherConfig