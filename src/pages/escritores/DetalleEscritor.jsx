import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const url = 'https://script.google.com/macros/s/AKfycbxwKjos7eKqdpY4SDS0qrEZtlNGWl3dM_--b_QKZok3txVffwpCkQPDxbY8QXKsqUzbgQ/exec';

const DetalleEscritor = () => {
  const { id } = useParams();
  const [entrada, setEntrada] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const encontrada = data.find(r => String(r.id) === id);
        setEntrada(encontrada);
      });
  }, [id]);

  if (!entrada) return <p className="text-center mt-10">Cargando publicación...</p>;

  return (
    <article className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
      <img src={entrada.imagen} alt={entrada.titulo} className="w-full h-auto rounded mb-4" />
      <h2 className="text-3xl font-serif font-bold mb-2">{entrada.titulo}</h2>
      <p className="italic text-gray-500 mb-4">por {entrada.autor} | {entrada.fecha}</p>
      <p className="text-gray-800 whitespace-pre-line">{entrada.contenido}</p>
    </article>
  );
};

export default DetalleEscritor;
