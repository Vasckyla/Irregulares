import React, { useEffect, useState } from 'react';

const urlResenas = 'https://script.google.com/macros/s/AKfycbz3caW8VnrkH3Smr6J03ShVhZvGlnucBw5xxIsrgNK46eSRlWqb59SDBUmxc4YOcJAjzw/exec';
const urlEscritores = 'https://script.google.com/macros/s/AKfycbxwKjos7eKqdpY4SDS0qrEZtlNGWl3dM_--b_QKZok3txVffwpCkQPDxbY8QXKsqUzbgQ/exec';

const Inicio = () => {
  const [resena, setResena] = useState(null);
  const [escritor, setEscritor] = useState(null);

  useEffect(() => {
    fetch(urlResenas)
      .then(res => res.json())
      .then(data => setResena(data.at(-1)));

    fetch(urlEscritores)
      .then(res => res.json())
      .then(data => setEscritor(data.at(-1)));
  }, []);

  return (
    <div className="grid gap-8 max-w-3xl mx-auto mt-8">
      {resena && (
        <section className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2 mb-4">Última Reseña</h2>
          <h3 className="text-xl font-bold text-gray-800">{resena.titulo}</h3>
          <p className="text-sm italic text-gray-500 mb-2">por {resena.autor}</p>
          <p className="text-gray-700">{resena.resumen}</p>
        </section>
      )}

      {escritor && (
        <section className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-serif font-semibold border-b pb-2 mb-4">Última Publicación de Escritor</h2>
          <h3 className="text-xl font-bold text-gray-800">{escritor.titulo}</h3>
          <p className="text-sm italic text-gray-500 mb-2">por {escritor.autor}</p>
          <p className="text-gray-700">{escritor.fragmento}</p>
        </section>
      )}
    </div>
  );
};

export default Inicio;
