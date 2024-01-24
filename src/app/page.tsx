'use client'
import React from "react";
import gatos from '../../public/assets/gatos.png';
import nomes from '../../public/assets/nomes.png';
import chaveiro from '../../public/assets/chaveiro.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <main className="bg-[url('../../public/assets/fundo.png')] bg-cover w-screen h-screen">
      <div className="grid grid-cols-1 md:grid-cols-1">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div className="mt-12">
            <img src={gatos.src} alt="gatos" className="mx-auto xl:w-44 w-[150px] " />
            <span className="uppercase grid-cols-1 grid font-georama font-bold text-[#353931] font-Playfair justify-self-center text-3xl lg:text-4xl xl:text-4xl text-center mt-4">
              Chá de casa nova
              <img src={nomes.src} alt="nomes" className="mx-auto w-[200px] sm:w-[300px]" />
            </span>
            <div className="w-full flex items-center justify-center pl-10 pr-10 sm:pl-5 sm:pr-5 md:pl-8 md:pr-8 lg:pl-12 lg:pr-12 xl:pl-36 xl:pr-36 mt-8">
              <ul className="text-[#353931] text-justify">
                <li className="text-sm">
                  <FontAwesomeIcon icon={faPaw} className="text-[#727E65] mr-1 " />
                  Links disponíveis nos nomes para a sugestão dos presentes, mas não necessariamente precisam ser especificamente estes, são apenas sugestões e exemplos para facilitar a busca.</li>
                <br  />
                <li className="text-sm">
                  <FontAwesomeIcon icon={faPaw} className="text-[#727E65] mr-1 " />
                  Você tem a opção de escolher mais do que um presente, mas se colocar o nome em um, não há mais como mudar.</li>
              </ul>
            </div>
            <div className="justify-center flex items-center">
              <img src={chaveiro.src} alt="chaveiro" width={100} />
            </div>
          </div>
        </div>

        <div>

        </div>
      </div>

    </main >
  );
}
