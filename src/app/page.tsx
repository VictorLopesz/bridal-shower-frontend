import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../../public/assets/background.png';

export default function Home() {
  return (
    <main className="bg-cover bg-center h-screen">
      <Header />
    </main>
  );
}
