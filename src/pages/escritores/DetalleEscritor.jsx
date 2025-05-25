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
        const encontrada = data.find(e => String(e.id) === id);
        setEntrada(encontrada);
      });
  }, [id]);

  const formatFecha = (fecha) => {
    const f = new Date(fecha);
    return f.toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  if (!entrada) return <p className="text-center mt-10">Cargando publicación...</p>;

  return (
    <article className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-3xl font-serif font-bold text-center mb-6">{entrada.titulo}</h2>
      <div className="relative">
        <img
          src={entrada.imagen}
          alt={entrada.titulo}
          className="float-right ml-4 w-20 rounded shadow-sm"
        />
        <p className="text-gray-800 whitespace-pre-line text-justify">{entrada.contenido}</p>
      </div>
      <p className="italic text-gray-500 mt-6">por {entrada.autor} | {formatFecha(entrada.fecha)}</p>
    </article>
  );
};

export default DetalleEscritor;
