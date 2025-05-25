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
        const encontrada = data.find(r => r.id === id);
        setResena(encontrada);
      });
  }, [id]);

  if (!resena) return <p className="text-center mt-10">Cargando reseña...</p>;

  return (
    <article className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
      <img src={resena.imagen} alt={resena.titulo} className="w-full h-auto rounded mb-4" />
      <h2 className="text-3xl font-serif font-bold mb-2">{resena.titulo}</h2>
      <p className="italic text-gray-500 mb-4">por {resena.autor} | {resena.fecha}</p>
      <p className="text-gray-800 whitespace-pre-line">{resena.contenido}</p>
    </article>
  );
};

export default DetalleResena;
