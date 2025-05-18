
import { useEffect, useState } from 'react'
import './posteos.css'

export default function PosteosDesdeSheet({ url }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const limpios = data.filter(p => p.titulo && p.contenido && p.fecha)
        const ordenados = limpios.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
        setItems(ordenados)
      })
      .catch(err => console.error("Error al cargar posteos:", err))
  }, [url])

  return (
    <section className="lista-posteos">
      <h2>Publicaciones</h2>
      <div className="posteo-grid">
        {items.map((p, idx) => (
          <article key={idx} className="posteo-card">
            {p.imagen && (
              <img
                src={p.imagen.startsWith('/public/img/') ? p.imagen : '/public/img/posts' + p.imagen}
                alt={p.titulo}
                className="posteo-img"
              />
            )}
            <h3>{p.titulo}</h3>
            <span className="fecha">{p.fecha}</span>
            <p>{p.contenido.slice(0, 140)}...</p>
            <span className="autor">Por {p.autor}</span>
          </article>
        ))}
      </div>
    </section>
  )
}
