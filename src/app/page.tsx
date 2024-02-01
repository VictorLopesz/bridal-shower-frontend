'use client'
import React from "react";
import gatos from '../../public/assets/gatos.png';
import nomes from '../../public/assets/nomes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import Presentes from "./components/Presentes";
import Image from "next/image";


export default function Home() {
  return (
    <main
      className="bg-cover w-full h-screen"
      style={{
        backgroundImage: `url('/assets/fundo2.png')`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-1">
          <div className="mt-8">
            <Image src={gatos.src} alt="gatos" width={150} height={150} className="mx-auto xl:w-44" />
            <span className="uppercase grid-cols-1 grid font-georama font-bold text-[#353931] font-Playfair justify-self-center text-3xl lg:text-4xl xl:text-4xl text-center mt-4">
              Chá de casa nova
              {/* <Image src={nomes.src} alt="nomes" width={200} height={200} className="mx-auto sm:w-[300px]" /> */}
            </span>
            <br />
            <div className="w-full flex items-center justify-center pl-10 pr-10 sm:pl-5 sm:pr-5 md:pl-8 md:pr-8 lg:pl-12 lg:pr-12 xl:pl-36 xl:pr-36 mt-8">
              <ul className="text-[#353931] text-justify">
                <li className="text-sm">
                  <FontAwesomeIcon icon={faPaw} className="text-[#727E65] mr-1 " />
                  Links disponíveis nos nomes para a sugestão dos presentes, mas não necessariamente precisam ser especificamente estes, são apenas sugestões e exemplos para facilitar a busca.</li>
                <br />
                <li className="text-sm">
                  <FontAwesomeIcon icon={faPaw} className="text-[#727E65] mr-1 " />
                  Você tem a opção de escolher mais do que um presente, mas se colocar o nome em um, não há mais como mudar.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-cover w-full h-full"
          style={{
            backgroundImage: `url('/assets/fundo2.png')`,
            backgroundAttachment: 'fixed'
          }}
        >
          <Presentes />
        </div>
      </div>

    </main >
  );
}
