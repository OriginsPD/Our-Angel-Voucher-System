import React, { useState, useEffect } from 'react';

import VoucherHistoryApi from '../api/VoucherHistoryApi';

const AdminHistoryScreen = () => {

    const { history, indexHistory } = VoucherHistoryApi()

    useEffect(() => {
        indexHistory()
    }, [])

    return (
        <div className="p-4 sm:p-6 w-full h-screen overflow-auto lg:p-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-xl font-semibold text-gray-900">Voucher History</h1>
                    <p className="mt-2 text-sm text-gray-700">A list of all the parents whose account including their name, phone number and email.</p>
                </div>

            </div>
            <div className="mt-8 flex flex-col">
                <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Student</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Voucher</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Quantity</th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>

                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {
                                        (history.length !== 0)
                                            ? history.map((items) => {
                                                return (
                                                    <tr key={items.id}>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">{items.student_reg_id}</td>

                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-500 sm:pl-6">
                                                            {items.Voucher}
                                                        </td>

                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                            {items.quantity}
                                                        </td>

                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{items.price}</td>
                                                    </tr>
                                                )
                                            })
                                            : <tr> <td colSpan={4} className="whitespace-nowrap px-3 text-center py-4 text-sm text-gray-500"> No Data Found </td></tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHistoryScreen