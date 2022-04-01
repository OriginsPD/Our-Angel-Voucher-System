import React from 'react'

import FormConfig from '../config/FormConfig'
import PortalModal from '../modal/PortalModal'

const NavBar = () => {
    const { configModal, toggleLogin, toggleRegister } = FormConfig()

    return (
        <header class="shadow-sm">

            <PortalModal {...configModal} />
            <div class="max-w-screen-xl p-4 mx-auto">
                <div class="flex items-center justify-between space-x-4 lg:space-x-10">
                    <div class="flex lg:w-0 lg:flex-1">
                        <span class="w-20 h-10 bg-gray-200 rounded-lg"></span>
                    </div>

                    <nav class="hidden space-x-8 text-sm font-medium md:flex">
                        <a class="text-gray-500" href="">About</a>
                        <a class="text-gray-500" href="">Blog</a>
                        <a class="text-gray-500" href="">Projects</a>
                        <a class="text-gray-500" href="">Contact</a>
                    </nav>

                    <div class="items-center justify-end flex-1 hidden space-x-4 sm:flex">
                        <button onClick={toggleLogin} class="px-5 py-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg">
                            Log in
                        </button>

                        <button onClick={toggleRegister} class="px-5 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg">
                            Sign up
                        </button>
                    </div>

                    <div class="lg:hidden">
                        <button class="p-2 text-gray-600 bg-gray-100 rounded-lg" type="button">
                            <span class="sr-only">Open menu</span>
                            <svg
                                aria-hidden="true"
                                class="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewbox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4 6h16M4 12h16M4 18h16"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default NavBar