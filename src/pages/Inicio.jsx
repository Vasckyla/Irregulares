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

  return (
    <div className="grid gap-6 max-w-6xl mx-auto mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {resena && (
        <section className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold border-b pb-2 mb-4">Última Reseña</h2>
            <h3 className="text-lg font-bold">{resena.titulo}</h3>
            <p className="text-sm italic text-gray-500 mb-2">por {resena.autor}</p>
            <p className="text-gray-700">{resena.resumen}</p>
          </div>
          <Link
            to={`/resenas/${resena.id}`}
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Leer más →
          </Link>
        </section>
      )}

      {escritor && (
        <section className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold border-b pb-2 mb-4">Última Publicación</h2>
            <h3 className="text-lg font-bold">{escritor.titulo}</h3>
            <p className="text-sm italic text-gray-500 mb-2">por {escritor.autor}</p>
            <p className="text-gray-700">{escritor.fragmento}</p>
          </div>
          <Link
            to={`/escritores/${escritor.id}`}
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Leer más →
          </Link>
        </section>
      )}

      {podcast && (
        <section className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold border-b pb-2 mb-4">Nuevo Episodio</h2>
            <h3 className="text-lg font-semibold">{podcast.titulo}</h3>
            <p className="text-gray-700 mb-2">{podcast.descripcion}</p>
          </div>
          <a
            href={podcast.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Escuchar ahora →
          </a>
        </section>
      )}
    </div>
  );
};

export default Inicio;
