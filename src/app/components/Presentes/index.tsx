import React, { useState, useTransition } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TabButton from '../tabButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';

import { Fade } from 'react-awesome-reveal';
import fundoItems from '../../../../public/assets/fundoItems.png';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const PRESENTE = [
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
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
                                    <button type="button" className="bg-[#6c9f34] hover:bg-[#526e31] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faEye} className="text-[#fff]" />
                                    </button>
                                </Link>
                                <Link rel="stylesheet" href="https://google.com" target="_blank" className="">
                                    <button type="button" className="bg-[#3f54b3] hover:bg-[#334b78] text-white font-bold py-1 px-2 rounded m-1">
                                        <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                                    </button>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    },
];

const Presentes = () => {
    const [tab, setTab] = useState("Sala");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: any) => {
        startTransition(() => {
            setTab(id);
        })
    }

    return (
        <div className="sm:mt-0 xl:mt-14 lg:mt-14 xl:-ml-40 lg:-ml-40">
            <div className="mt-8 flex justify-center ml-2 sm:ml-2 items-center sm:text-sm lg:text-3xl xl:text-3xl">
                <Fade
                    cascade={true}
                    duration={500}
                >
                    <div className="mt-8 flex -m-6">
                        <TabButton className="font-Playfair"
                            selectTab={() => handleTabChange("Sala")}
                            active={tab === "Sala"}
                        >
                            {" "}
                            <span className="">
                                Sala
                            </span>
                            <br />
                            {" "}

                        </TabButton>
                        ·
                        <TabButton className="font-Playfair"
                            selectTab={() => handleTabChange("Cozinha")}
                            active={tab === "Cozinha"}
                        >
                            {" "}
                            <span className="ml-1">Cozinha</span> <br />  {" "}

                        </TabButton>
                        ·
                        <TabButton className="font-Playfair"
                            selectTab={() => handleTabChange("Quarto")}
                            active={tab === "Quarto"}
                        >
                            {" "}
                            <span className="ml-1">Quarto</span>
                            <br />  {" "}

                        </TabButton>
                        ·
                        <TabButton className="font-Playfair"
                            selectTab={() => handleTabChange("Banheiro")}
                            active={tab === "Banheiro"}
                        >
                            {" "}
                            <span className="ml-1">Banheiro</span> <br />  {" "}

                        </TabButton>
                    </div>
                </Fade>
            </div>
            {PRESENTE.find((t) => t.id === tab)?.content}
        </div>
    )
}

export default Presentes;
