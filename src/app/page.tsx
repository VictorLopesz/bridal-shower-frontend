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
      className="w-full h-full bg-[#F2F4F3]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
          <div className="mt-8">
            <Image src={gatos.src} alt="gatos" width={150} height={150} className="mx-auto xl:w-44" />
            <span className="uppercase grid-cols-1 grid font-georama font-bold text-[#353931] font-Playfair justify-self-center text-3xl md:text-5xl lg:text-4xl xl:text-4xl text-center mt-4">
              Chá de casa nova
              <Image src={nomes.src} alt="nomes" width={200} height={200} className="mx-auto sm:w-[300px]" />
            </span>
            <br />
            <div className="w-full flex items-center justify-center pl-10 pr-10 sm:pl-5 sm:pr-5 md:pl-8 md:pr-8 lg:pl-12 lg:pr-12 xl:pl-36 xl:pr-36 mt-8">
              <ul className="text-[#353931] text-justify">
                <p className="items-center justify-center flex text-sm font-semibold p-1 text-slate-800">
                  Como funciona a escolha de presentes?
                </p>
                <p className="flex items-center justify-start -mb-2">
                  <FaAngleRight width={10} height={10} className="m-2" />
                  <p className="text-sm font-roboto-condensed m-2 font-semibold p-1 text-slate-500">
                    Você tem entre Sala, Quarto, Cozinha e Banheiro para escolher um ou mais presentes, basta clicar no cômodo desejado.
                  </p>
                </p>
                <span className="flex items-center justify-start">
                  <p className="bg-[#559b49] text-white font-bold py-1 px-2 rounded m-1">
                    <FontAwesomeIcon icon={faEye} className="text-[#fff]" />                    </p>
                  <FaAngleRight width={10} height={10} className="m-2" />
                  <p className="text-sm font-roboto-condensed m-2 font-semibold p-1 text-slate-500">
                    Página indicativa para visualizar o presente e o preço.
                  </p>
                </span>
                <span className="flex items-center justify-start">
                  <p className="bg-[#917235] text-white font-bold py-1 px-2 rounded m-1">
                    <FontAwesomeIcon icon={faGift} className="text-[#fff]" />
                  </p>
                  <FaAngleRight width={10} height={10} className="m-2" />
                  <p className="text-sm font-roboto-condensed m-2 font-semibold p-1 text-slate-500">
                   Escolheu o presente? Preencha suas informações aqui.
                  </p>
                </span>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full h-full bg-[#F2F4F3]">
          <Presentes />
        </div>
      </div>
    </main >
  );
}
