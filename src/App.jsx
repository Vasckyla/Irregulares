import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Carrousel from './components/Carrousel';
import Footer from './components/Footer';

import Inicio from './pages/Inicio';
import Reseñas from './pages/Reseñas';
import Escritores from './pages/Escritores';
import Podcast from './pages/Podcast';
import Contacto from './pages/Contacto';
import DetalleResena from './pages/resenas/DetalleResena';
import DetalleEscritor from './pages/escritores/DetalleEscritor';

const App = () => {
  return (
    <>
      <Navbar />
      <Carrousel />
      <main className="p-4 pb-20 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/resenas" element={<Reseñas />} />
          <Route path="/resenas/:id" element={<DetalleResena />} />
          <Route path="/escritores" element={<Escritores />} />
          <Route path="/escritores/:id" element={<DetalleEscritor />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
