import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const url = 'https://script.google.com/macros/s/AKfycbz3caW8VnrkH3Smr6J03ShVhZvGlnucBw5xxIsrgNK46eSRlWqb59SDBUmxc4YOcJAjzw/exec';

const DetalleResena = () => {
  const { id } = useParams();
  const [resena, setResena] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const encontrada = data.find(r => String(r.id) === id);
        setResena(encontrada);
      });
  }, [id]);

  const formatFecha = (fecha) => {
    const f = new Date(fecha);
    return f.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  if (!resena) return <p className="text-center mt-10">Cargando reseña...</p>;

  return (
    <article className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-3xl font-serif font-bold text-center mb-6">{resena.titulo}</h2>
      <div className="relative">
        <img
          src={resena.imagen}
          alt={resena.titulo}
          className="text-justify float-left ml-4 h-60 rounded shadow-sm"
        />
        <p className="text-gray-800 whitespace-pre-line text-justify">{resena.contenido}</p>
      </div>
      <p className="text-right italic text-gray-500 mt-6">por {resena.autor} | {formatFecha(resena.fecha)}</p>
    </article>
  );
};

export default DetalleResena;
