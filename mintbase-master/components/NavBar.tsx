import React, { useState } from 'react'
function NavBar({ isConnected, wallet, details }) {


    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 p-8">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex items-center">
                    <img src="./logo.png" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">

                        <li>
                        <button style={{backgroundColor:'#000000'}} onClick={isConnected
                                ? () => {
                                    wallet?.disconnect()
                                    window.location.reload()
                                }
                                : () => {
                                    wallet?.connect({ requestSignIn: true })
                                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                {isConnected ? 'Disconnect Wallet' : 'Connect Wallet'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar