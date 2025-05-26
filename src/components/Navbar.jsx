import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow-md py-4 px-6 flex justify-center gap-8 sticky top-0 z-10 text-lg font-medium text-gray-800">
    <Link className="hover:text-blue-600 transition" to="/">Inicio</Link>
    <Link className="hover:text-blue-600 transition" to="/resenas">Reseñas</Link>
    <Link className="hover:text-blue-600 transition" to="/escritores">Relatos</Link>
    <Link className="hover:text-blue-600 transition" to="/podcast">Podcast</Link>
    <Link className="hover:text-blue-600 transition" to="/contacto">Contacto</Link>
  </nav>
);
export default Navbar;
