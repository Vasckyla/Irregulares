import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const urlEscritores = 'https://script.google.com/macros/s/AKfycbxwKjos7eKqdpY4SDS0qrEZtlNGWl3dM_--b_QKZok3txVffwpCkQPDxbY8QXKsqUzbgQ/exec';

const Escritores = () => {
  const [escritos, setEscritos] = useState([]);

  useEffect(() => {
    fetch(urlEscritores)
      .then(res => res.json())
      .then(data => setEscritos(data.reverse()));
  }, []);

  return (
    <section className="max-w-3xl mx-auto mt-8 grid gap-6">
      <h2 className="text-2xl font-serif font-bold">Publicaciones de Escritores</h2>
      {escritos.map(e => (
        <article key={e.id} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <img src={e.imagen} alt={e.titulo} className="w-full h-48 object-cover rounded mb-3" />
          <h3 className="text-xl font-bold text-gray-800">{e.titulo}</h3>
          <p className="text-sm italic text-gray-500">por {e.autor}</p>
          <p className="text-gray-700">{e.fragmento}</p>
          <Link to={`/escritores/${e.id}`} className="text-blue-600 hover:underline mt-2 inline-block">Leer más</Link>
        </article>
      ))}
    </section>
  );
};

export default Escritores;
