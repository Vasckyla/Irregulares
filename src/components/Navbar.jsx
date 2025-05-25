import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-center gap-6 sticky top-0 z-10 text-gray-800 font-medium">
      <Link className="hover:text-blue-600 transition" to="/">Inicio</Link>
      <Link className="hover:text-blue-600 transition" to="/resenas">Reseñas</Link>
      <Link className="hover:text-blue-600 transition" to="/escritores">Espacio para Escritores</Link>
      <Link className="hover:text-blue-600 transition" to="/podcast">Podcast</Link>
      <Link className="hover:text-blue-600 transition" to="/contacto">Contacto</Link>
    </nav>
  );
};

export default Navbar;