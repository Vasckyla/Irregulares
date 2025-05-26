import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const urlResenas = 'https://script.google.com/macros/s/AKfycbz3caW8VnrkH3Smr6J03ShVhZvGlnucBw5xxIsrgNK46eSRlWqb59SDBUmxc4YOcJAjzw/exec';
const urlEscritores = 'https://script.google.com/macros/s/AKfycbxwKjos7eKqdpY4SDS0qrEZtlNGWl3dM_--b_QKZok3txVffwpCkQPDxbY8QXKsqUzbgQ/exec';
const urlPodcast = 'https://script.google.com/macros/s/AKfycbxrATXdX0EziizoA1rB528fBwqBPxpK0WKlfC4aqgFBcTdB6WMeknu2L6I79Vnea6eA-A/exec?sheet=podcast';

const Inicio = () => {
  const [resena, setResena] = useState(null);
  const [escritor, setEscritor] = useState(null);
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    fetch(urlResenas).then(res => res.json()).then(data => setResena(data.at(-1)));
    fetch(urlEscritores).then(res => res.json()).then(data => setEscritor(data.at(-1)));
    fetch(urlPodcast).then(res => res.json()).then(data => setPodcast(data.at(-1)));
  }, []);

  const tarjeta = (data, tipo) => (
    <section className="bg-white rounded-2xl shadow-md sm:shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <img
        src={data.imagen || '/img/placeholder.jpg'}
        alt={data.titulo}
        className="h-40 w-full object-cover"
      />
      <div className="p-5 flex flex-col justify-between h-full">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{data.titulo}</h3>
          {data.autor && <p className="text-sm italic text-gray-500 mb-2">por {data.autor}</p>}
          <p className="text-gray-700 line-clamp-4">{data.resumen || data.descripcion || data.fragmento}</p>
        </div>
        {tipo === 'resena' && (
          <Link to={`/resenas/${data.id}`} className="mt-4 text-sm text-blue-600 hover:underline font-semibold">Leer más →</Link>
        )}
        {tipo === 'escritor' && (
          <Link to={`/escritores/${data.id}`} className="mt-4 text-sm text-blue-600 hover:underline font-semibold">Leer más →</Link>
        )}
        {tipo === 'podcast' && (
          <a href={data.link} target="_blank" rel="noopener noreferrer" className="mt-4 text-sm text-blue-600 hover:underline font-semibold">Escuchar ahora →</a>
        )}
      </div>
    </section>
  );

  return (
    <div className="grid gap-6 max-w-6xl mx-auto mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {resena && tarjeta(resena, 'resena')}
      {escritor && tarjeta(escritor, 'escritor')}
      {podcast && tarjeta(podcast, 'podcast')}
    </div>
  );
};

export default Inicio;
