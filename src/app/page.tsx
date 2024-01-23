'use client'
import React from 'react';
import Header from './components/Header';

export default function Home() {
  return (
    <main className="bg-[url('../../public/assets/background.jpg')] bg-cover w-full h-screen">
      <Header />
    </main>
  );
}
