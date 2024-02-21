import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import fundoItems from '../../../public/assets/fundoItems.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ModalInform from '../components/ModalInform/index';

export const PRESENTE = [
    {
        title: "Quarto",
        id: "Quarto",
        content: (
            <div className="flex items-center justify-center">
                <div className="p-1 -ml-2 md:-ml-2 xl:-ml-2">
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform  id="quarto1" />
                            </div>
                        </li>

                        <li id="quarto2" className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="quarto2" />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="quarto3" />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="quarto4" />

                            </div>
                        </li>
                    </ul>
                    <br />
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="quarto5" />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="quarto6" />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="quarto7" />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="quarto8" />
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
                <div className="p-1 -ml-2 md:-ml-2 xl:-ml-2">
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="sala1" />

                            </div>
                        </li>

                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="sala2" />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="sala3" />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="sala4" />

                            </div>
                        </li>
                    </ul>
                    <br />
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="sala5" />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="sala6" />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="sala7" />

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="sala8" />

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
                <div className="p-1 -ml-2 md:-ml-2 xl:-ml-2">
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform  id="cozinha1"/>

                            </div>
                        </li>

                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform  id="cozinha2"/>

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform  id="cozinha3"/>

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform  id="cozinha4"/>

                            </div>
                        </li>
                    </ul>
                    <br />
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform  id="cozinha5"/>

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform  id="cozinha6"/>

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform  id="cozinha7"/>

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform  id="cozinha8"/>

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
                <div className="p-1 -ml-2 md:-ml-2 xl:-ml-2">
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="banheiro1"/>

                            </div>
                        </li>

                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="banheiro2"/>

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="banheiro3"/>

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="banheiro4"/>

                            </div>
                        </li>
                    </ul>
                    <br />
                    <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="banheiro5"/>

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="banheiro6"/>

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="banheiro7"/>

                            </div>
                        </li>
                        <li className="grid grid-cols-1 text-center">
                            <div className="flex flex-col items-center justify-center">
                                <Image src={fundoItems.src} alt="fundoItem" width={110} height={110} className="m-6" />
                                <span className="font-Playfair text-[#76712d] text-lg uppercase -mt-5">
                                    EXEMPLO
                                </span>
                            </div>
                            <div className="flex items-center justify-center">
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#559b49] hover:bg-[#2d6133] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <ModalInform id="banheiro8"/>

                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
];