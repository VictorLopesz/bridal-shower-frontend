'use client'
import React, { useState } from 'react';
import Header from './components/Header';

export default function Home() {

  const [isScrolled, setIsScrolled] = useState(false);

  const changeNavbarCollor = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY >= 630) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', changeNavbarCollor);
  }

  return (
    <main className="bg-[#FBFCF9] w-full h-screen">
      <Header />
    </main>
  );
}
