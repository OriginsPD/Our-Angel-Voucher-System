import React, { useContext } from 'react'

import FormConfig from '../config/FormConfig'
import PortalModal from '../modal/PortalModal'

const HomeScreen = () => {
    const { configModal, toggleLogin, toggleRegister } = FormConfig()

    // console.log({ ...configModal })

    return (
        <section class="relative bg-white">
            <PortalModal {...configModal} />
            <img
                class="absolute inset-0 object-[75%] sm:object-[25%] object-cover w-full h-full opacity-25 sm:opacity-100"
                src="https://cdn.pixabay.com/photo/2021/02/11/20/46/school-lunch-6006490_960_720.jpg"
                alt="Couple on a bed with a dog"
            />

            <div class="hidden sm:block sm:inset-0 sm:absolute sm:bg-gradient-to-r sm:from-white sm:to-transparent"></div>

            <div class="relative max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
                <div class="max-w-2xl text-center sm:text-left">
                    <h1 class="text-4xl font-extrabold uppercase sm:text-6xl">
                        Our Angel Primary
                        <strong class="font-extrabold text-blue-700 sm:block">
                            E-Voucher System.
                        </strong>
                    </h1>

                    <p class="max-w-lg mt-4 sm:leading-relaxed sm:text-xl">
                        It is more fun to talk with someone who doesn't use long, difficult words but rather short, easy words, like 'What about lunch?
                    </p>

                    <div class="flex flex-wrap gap-4 mt-8 text-center">
                        <button onClick={toggleLogin} class="block w-full px-12 cursor-pointer py-3 text-sm font-medium text-white rounded shadow bg-blue-600 sm:w-auto active:bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring" >
                            Our Voucher Now
                        </button>

                        <button onClick={toggleRegister} class="block w-full px-12 cursor-pointer py-3 text-sm font-medium bg-white rounded shadow text-blue-600 sm:w-auto hover:text-blue-700 active:text-blue-500 focus:outline-none focus:ring" >
                            Sign Up Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeScreen