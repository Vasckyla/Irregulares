
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './posteos.css'

export default function PosteosDesdeSheet({ url, base }) {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const limpios = data.filter(p => p.titulo && p.contenido && p.fecha)
        const ordenados = limpios.sort((a, b) => new Date(b.fecha) - new Date(a.fecha))
        setItems(ordenados)
      })
      .catch(err => console.error('Error al cargar:', err))
  }, [url])

  return (
    <section className="lista-posteos">
      <h2>{base === 'blog' ? 'Blog' : 'Reseñas'}</h2>
      <div className="posteo-grid">
        {items.map((p, idx) => (
          <article key={idx} className="posteo-card">
            {p.imagen && (
              <img
                src={`${import.meta.env.BASE_URL}img/posts/${p.imagen}`}
                alt={p.titulo}
                className="posteo-img"
              />
            )}
            <h3>{p.titulo}</h3>
            <span className="fecha">{p.fecha}</span>
            <p>{p.contenido.split(' ').slice(0, 30).join(' ')}...</p>
            <p className="autor">Por <strong>{p.autor}</strong></p>
            <Link to={`/${base}/${idx}`} className="leer-mas">Leer más</Link>
          </article>
        ))}
      </div>
    </section>
  )
}
