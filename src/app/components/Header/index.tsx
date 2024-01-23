'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGift, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isClick, setIsClick] = useState(false);

    const toggleNavbar = () => {
        setIsClick(!isClick);
    };

    return (
        <>
            <nav className="h-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg-px-8">
                    <div className="flex items-center justify-center pt-5 h-16 md:ml-32 md:mr-32">
                        <div className="hidden md:block">
                            <div className="ml-12 flex items-center space-x-4 font-georama font-light text-[14px]">
                                <a href="/" className="no-underline  m-2 text-[#707F62]  rounded-sm p-2 transition duration-300">
                                    <span className="ml-1 font-medium border-b-4 hover:border-lime-700 uppercase flex items-center justify-center text-[#546049] font-serif">
                                    <FontAwesomeIcon icon={faHouse} width={15} height={15} className="mr-1" />
                                        Início
                                    </span>
                                </a>
                                <a href="/" className="no-underline  m-2 text-[#707F62]  rounded-sm p-2 transition duration-300">
                                    <span className="ml-1 font-medium border-b-4 hover:border-lime-700 uppercase flex items-center justify-center text-[#546049] font-serif">
                                    <FontAwesomeIcon icon={faGift} width={15} height={15} className="mr-1" />
                                        Presentes
                                    </span>
                                </a>
                                <a href="/" className="no-underline  m-2 text-[#707F62] rounded-sm p-2 transition duration-300">
                                    <span className=" ml-1 font-medium border-b-4 hover:border-lime-700  uppercase flex items-center justify-center text-[#546049] font-serif">
                                    <FontAwesomeIcon icon={faLocationDot} width={15} height={15} className="mr-1" />
                                        Local & Data
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                onClick={toggleNavbar}
                            >
                                {isClick ? <AiOutlineClose className="text-[#22394ada] hover:active-[#fff] w-6 h-6" /> : <GiHamburgerMenu className="text-[#22394ada] hover:active-[#fff] w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#b2ba9fd7]">
                            <a href="/" className="no-underline hover:bg-[#22394a92] block text-[#485766] hover:text-[#F0F2ED] rounded-sm p-2 transition duration-300">
                                <FontAwesomeIcon icon={faHouse} width={15} height={15} />
                                <span className="ml-1 font-medium font-firasans">
                                    Início
                                </span>
                            </a>
                            <a href="/" className="no-underline hover:bg-[#22394a92] block text-[#788a9c]  hover:text-[#F0F2ED] rounded-sm p-2 transition duration-300">
                                <FontAwesomeIcon icon={faGift} width={15} height={15} />
                                <span className="ml-1 font-medium font-firasans">
                                    Opções de Presentes
                                </span>
                            </a>
                            <a href="/" className="no-underline hover:bg-[#22394a92] block text-[#485766] hover:text-[#F0F2ED] rounded-sm p-2 transition duration-300">
                                <FontAwesomeIcon icon={faLocationDot} width={15} height={15} />
                                <span className=" ml-1 font-medium font-firasans">
                                    Endereço
                                </span>
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Header;