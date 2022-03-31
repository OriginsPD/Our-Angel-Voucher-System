import React from 'react'

import FormConfig from '../config/FormConfig'
import PortalModal from '../modal/PortalModal'

const NavBar = () => {
    const { configModal, toggleLogin, toggleRegister } = FormConfig()

    return (
        <header className="relative">

            <PortalModal {...configModal} />

            <div className="bg-gray-900 pt-6 pb-4">
                <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6" aria-label="Global">
                    <div className="flex items-center flex-1">
                        <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="#">
                                <span className="sr-only">Workflow</span>
                                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="" />
                            </a>
                            <div className='text-2xl text-white px-2 font-bold italic'> Our Angel Primary </div>
                        </div>
                        {/* <div className="hidden space-x-8 md:flex md:ml-10">
                            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Product</a>

                            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Features</a>

                            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Marketplace</a>

                            <a href="#" className="text-base font-medium text-white hover:text-gray-300">Company</a>
                        </div> */}
                    </div>
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <button onClick={toggleLogin} className="text-base font-medium text-white hover:text-gray-300"> Log in </button>
                        <button onClick={toggleRegister} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"> Register </button>
                    </div>
                </nav>
            </div>

        </header>

    )
}

export default NavBar