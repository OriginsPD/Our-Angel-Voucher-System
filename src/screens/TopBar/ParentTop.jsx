import React from 'react'

const ParentTop = () => {
    return (
        <nav className="flex-shrink-0 bg-indigo-600">
            <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                <div className="relative flex items-center justify-between h-16">

                    <div className="flex items-center px-2 lg:px-0 xl:w-64">
                        <div className="flex-shrink-0">
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg" alt="Workflow" />
                        </div>
                    </div>


                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="w-full px-2 lg:px-6">
                            <label htmlFor="search" className="sr-only">Search projects</label>
                            <div className="relative text-indigo-200 focus-within:text-gray-400">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">

                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <input id="search" name="search" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-indigo-400 bg-opacity-25 text-indigo-100 placeholder-indigo-200 focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm" placeholder="Search projects" type="search" />
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:hidden">

                        {/* <!-- Mobile menu button --> */}
                        <button type="button" className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"></path>
                            </svg>

                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="hidden lg:block lg:w-80">
                        <div className="flex items-center justify-end">
                            <div className="flex">
                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white" aria-current="page">Dashboard</a>

                                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white">Domains</a>
                            </div>

                            <div className="ml-4 relative flex-shrink-0">
                                <div>
                                    <button type="button" className="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=256&amp;h=256&amp;q=80" alt="" />
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="lg:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">

                    <a href="#" className="text-white bg-indigo-800 block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

                    <a href="#" className="text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Domains</a>
                </div>
                <div className="pt-4 pb-3 border-t border-indigo-800">
                    <div className="px-2 space-y-1">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Your Profile</a>

                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Settings</a>

                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Sign out</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default ParentTop