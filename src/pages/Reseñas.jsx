import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const urlResenas = 'https://script.google.com/macros/s/AKfycbz3caW8VnrkH3Smr6J03ShVhZvGlnucBw5xxIsrgNK46eSRlWqb59SDBUmxc4YOcJAjzw/exec';

const Reseñas = () => {
  const [resenas, setResenas] = useState([]);

  useEffect(() => {
    fetch(urlResenas)
      .then(res => res.json())
      .then(data => setResenas(data.reverse()));
  }, []);

  return (
    <section className="max-w-3xl mx-auto mt-8 grid gap-6">
      <h2 className="text-2xl font-serif font-bold">Todas las Reseñas</h2>
      {resenas.map(r => (
        <article key={r.id} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <img src={r.imagen} alt={r.titulo} className="w-full h-48 object-cover rounded mb-3" />
          <h3 className="text-xl font-bold text-gray-800">{r.titulo}</h3>
          <p className="text-sm italic text-gray-500">por {r.autor}</p>
          <p className="text-gray-700">{r.resumen}</p>
          <Link to={`/resenas/${r.id}`} className="text-blue-600 hover:underline mt-2 inline-block">Leer más</Link>
        </article>
      ))}
    </section>
  );
};

export default Reseñas;
