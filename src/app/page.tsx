'use client'
import React from "react";
import gatos from '../../public/assets/gatos.png';
import nomes from '../../public/assets/nomes.png';
import chaveiro from '../../public/assets/chaveiro.png';

export default function Home() {
  return (
    <main className="bg-[url('../../public/assets/fundo.png')] bg-cover w-screen h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="mt-10">
          <img src={gatos.src} alt="gatos" width={200} height={200} className="mx-auto" />
          <span className="uppercase font-georama font-bold text-[#353931] font-Playfair justify-self-center text-3xl sm:text-2xl lg:text-5xl xl:text-5xl text-center mt-4">
            Chá de casa nova
            <img src={chaveiro.src} alt="chaveiro" width={80} className="mx-auto" />
          </span>
          {/* <img src={nomes.src} alt="nomes" width={300} className="mx-auto -mt-10" /> */}
          <br />
          <div className="w-full flex items-center justify-center">
            <ul className="custom-list list-disc text-[#353931] text-justify sm:text-sm lg:text-base">
              <li>Links disponíveis nos nomes para a sugestão dos presentes, <br /> mas não necessariamente precisam ser especificamente <br /> estes, são apenas sugestões e exemplos para facilitar a busca.</li>
              <li>Você tem a opção de escolher mais do que um presente,<br /> mas se colocar o nome em um, não há mais como mudar.</li>
            </ul>
          </div>
        </div>
      </div>

    </main >
  );
}
