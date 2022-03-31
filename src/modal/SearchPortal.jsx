import React, { useState, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'

import VoucherApi from '../api/VoucherApi'

const SearchPortal = ({ show, toggle, close }) => {
    const { indexVoucher, voucher } = VoucherApi()
    const { findVoucher } = VoucherApi()

    const [filterData, setFilterData] = useState([])

    const [searchData, setSearchData] = useState({
        name: ''
    })


    const storeInfo = (e) => {
        const { name, value } = e.target
        setSearchData((previousState) => ({
            ...previousState,
            [name]: value
        }))

        handleChange()
    }

    const handleChange = () => {
        const newFilter = voucher.filter((value) => {
            return value.name.toLowerCase().includes(searchData.name.toLowerCase())
        })

        setFilterData(newFilter)

    }

    const operation = (id) => {
        toggle()
        findVoucher(id)
        close()
        console.log(id)
    }


    useEffect(() => {
        indexVoucher()
        if (searchData.name == '') {
            setFilterData([])
        }

    }, [searchData])

    // console.log(voucher)


    return (!show)
        ? null
        : ReactDOM.createPortal(
            <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20" role="dialog" aria-modal="true">

                <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" aria-hidden="true"></div>

                <div className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                    <div className="relative">

                        <svg className="pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                        </svg>
                        <input type="text" name='name' className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm" onChange={storeInfo} value={searchData.name} placeholder="Search..." />
                    </div>

                    <ul className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800" id="options" role="listbox">
                        {
                            filterData.length != 0
                                ? filterData.map((items) => {
                                    return (
                                        <li key={items.id} onClick={() => operation(items.id)} className="cursor-pointer hover:bg-gray-900 hover:text-white select-none px-4 py-2" id="option-1" role="option" tabIndex="-1">
                                            <div className='flex w-full justify-between' >
                                                <div> {items.name} </div>
                                                <div> Price: $ {items.price} </div>
                                            </div>
                                        </li>
                                    )
                                })
                                : <p className="p-4 text-sm text-center text-gray-500">No Voucher found.</p>
                        }
                    </ul>
                </div>
            </div>, document.getElementById('portal')
        )
}

export default SearchPortal