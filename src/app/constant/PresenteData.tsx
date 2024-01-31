import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';

import fundoItems from '../../../public/assets/fundoItems.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ModalInform from './../components/ModalInform/index';


export const PRESENTE = [
    {
        title: "Quarto",
        id: "Quarto",
        content: (
            <div className="flex items-center justify-center">
                <div className="p-7 -ml-2 md:-ml-2 xl:-ml-2">
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />
                            </div>
                        </li>

                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                    </ul>
                    <br />
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Sala",
        id: "Sala",
        content: (
            <div className="flex items-center justify-center">
                <div className="p-7 -ml-2 md:-ml-2 xl:-ml-2">
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>

                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                    </ul>
                    <br />
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        )
    },
    {
        title: "Cozinha",
        id: "Cozinha",
        content: (
            <div className="flex items-center justify-center">
                <div className="p-7 -ml-2 md:-ml-2 xl:-ml-2">
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>

                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                    </ul>
                    <br />
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "Banheiro",
        id: "Banheiro",
        content: (
            <div className="flex items-center justify-center">
                <div className="p-7 -ml-2 md:-ml-2 xl:-ml-2">
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>

                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                    </ul>
                    <br />
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={120} height={120} className="m-7" />
                                <span className="font-Playfair text-[#76712d] font-semibold text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform />

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
];
