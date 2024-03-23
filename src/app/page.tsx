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
      <Presentes />
    </main >
  );
}
