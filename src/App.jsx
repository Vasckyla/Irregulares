import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Reseñas from './pages/Reseñas';
import DetalleResena from './pages/resenas/DetalleResena';
import Escritores from './pages/Escritores';
import DetalleEscritor from './pages/escritores/DetalleEscritor';
import Podcast from './pages/Podcast';
import Contacto from './pages/Contacto';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="p-4 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/resenas" element={<Reseñas />} />
          <Route path="/resenas/:id" element={<DetalleResena />} />
          <Route path="/escritores" element={<Escritores />} />
          <Route path="/escritores/:id" element={<DetalleEscritor />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  );
};

export default App;