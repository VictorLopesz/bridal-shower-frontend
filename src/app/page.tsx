'use client'
import React from "react";
import gatos from '../../public/assets/gatos.png';
import nomes from '../../public/assets/nomes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import Presentes from "./components/Presentes";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  return (
    <main
      className="w-full h-full"
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
          <div className="mt-8">
            <Image src={gatos.src} alt="gatos" width={150} height={150} className="mx-auto xl:w-44" />
            <span className="uppercase grid-cols-1 grid font-georama font-bold text-[#353931] font-Playfair justify-self-center text-3xl md:text-5xl lg:text-4xl xl:text-4xl text-center mt-4">
              Chá de casa nova
              <Image src={nomes.src} alt="nomes" width={200} height={200} className="mx-auto sm:w-[300px]" />
            </span>
          </div>
        </div>
          <Presentes />
      </div>
    </main >
  );
}
