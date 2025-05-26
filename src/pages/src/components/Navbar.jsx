import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-20">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">Irregulares</h1>
        <button
          className="sm:hidden text-2xl text-gray-800"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="hidden sm:flex gap-6 text-base sm:text-lg font-medium text-gray-800">
          <Link className="hover:text-blue-600 transition" to="/">Inicio</Link>
          <Link className="hover:text-blue-600 transition" to="/resenas">Reseñas</Link>
          <Link className="hover:text-blue-600 transition" to="/escritores">Relatos</Link>
          <Link className="hover:text-blue-600 transition" to="/podcast">Podcast</Link>
          <Link className="hover:text-blue-600 transition" to="/contacto">Contacto</Link>
        </div>
      </div>
      {open && (
        <div className="sm:hidden mt-4 flex flex-col gap-4 text-base text-gray-800">
          <Link className="hover:text-blue-600 transition" to="/" onClick={() => setOpen(false)}>Inicio</Link>
          <Link className="hover:text-blue-600 transition" to="/resenas" onClick={() => setOpen(false)}>Reseñas</Link>
          <Link className="hover:text-blue-600 transition" to="/escritores" onClick={() => setOpen(false)}>Relatos</Link>
          <Link className="hover:text-blue-600 transition" to="/podcast" onClick={() => setOpen(false)}>Podcast</Link>
          <Link className="hover:text-blue-600 transition" to="/contacto" onClick={() => setOpen(false)}>Contacto</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
