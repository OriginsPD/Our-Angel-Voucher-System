import React from 'react'
import { NavLink } from 'react-router-dom'

// Modals
import PortalModal from '../../modal/PortalModal'
import SearchPortal from '../../modal/SearchPortal'

import ToggleModal from '../../components/ToggleModal'

// Api's
import AuthApi from '../../api/AuthApi'

// Form Configurations
import AdminFormConfig from '../../config/AdminFormConfig'

import {
    BellIcon,
    ClockIcon,
    CogIcon,
    CreditCardIcon,
    DocumentReportIcon,
    HomeIcon,
    MenuAlt1Icon,
    QuestionMarkCircleIcon,
    PencilIcon,
    UserIcon,
    PlusCircleIcon,
    UserGroupIcon,
    LogoutIcon,
    TicketIcon,
} from '@heroicons/react/outline'

import {
    CashIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    OfficeBuildingIcon,
    SearchIcon,
} from '@heroicons/react/solid'

const AdminSideBar = () => {
    const { authLogout } = AuthApi()

    const { openModal, toggle } = ToggleModal()

    const { configModal, toggleCreate, toggleEdit } = AdminFormConfig()

    const navigation = [
        { name: 'Home', href: '/admin', icon: HomeIcon },
        // { name: 'History', href: '#', icon: ClockIcon, current: false },
        { name: 'Voucher', href: '/voucher', icon: TicketIcon },
        { name: 'Issued', href: '/issue', icon: UserGroupIcon },
        { name: 'Reports', href: '/history', icon: DocumentReportIcon },
    ]

    const secondaryNavigation = [
        { name: 'New Voucher', action: toggleCreate, icon: PlusCircleIcon },
        { name: 'Edit Voucher', action: toggle, icon: PencilIcon },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const toggleSearch = () => {

    }



    return (
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:inset-y-0">

            <PortalModal {...configModal} />

            <SearchPortal show={openModal} close={toggle} toggle={toggleEdit} />

            <div className="flex flex-col h-screen flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4 mb-5">
                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg" alt="Easywire logo" />
                </div>
                <nav>
                    <div className="px-2 space-y-1">
                        {navigation.map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.href}
                                className={({ isActive }) => ' group flex items-center px-2 py-2 text-base font-medium rounded-md ' + ((isActive) ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600')}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" aria-hidden="true" />
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="pt-6">
                        <div className="px-2 space-y-1">
                            {secondaryNavigation.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={item.action}
                                    className="group flex items-center px-2 py-2 text-base w-full font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                                >
                                    <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                                    {item.name}
                                </button>
                            ))}
                            <div className='mt-8'>
                                <button
                                    onClick={authLogout}
                                    className="group flex items-center mt-8 px-2 py-2 text-base w-full font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                                >
                                    <LogoutIcon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                                    Logout
                                </button>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AdminSideBar