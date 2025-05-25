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
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-semibold">Última Reseña</h2>
        {resena ? (
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold">{resena.titulo}</h3>
            <p className="italic text-sm">por {resena.autor}</p>
            <p className="mt-2">{resena.resumen}</p>
          </div>
        ) : <p>Cargando reseña...</p>}
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Última Publicación de Escritor</h2>
        {escritor ? (
          <div className="p-4 border rounded">
            <h3 className="text-xl font-bold">{escritor.titulo}</h3>
            <p className="italic text-sm">por {escritor.autor}</p>
            <p className="mt-2">{escritor.fragmento}</p>
          </div>
        ) : <p>Cargando publicación...</p>}
      </section>
    </div>
  );
};

export default Inicio;