
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './vista-posteo.css'

export default function VistaPosteo({ url }) {
  const { id } = useParams()
  const [posteo, setPosteo] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPosteo(data[parseInt(id)]))
      .catch(err => console.error('Error al cargar:', err))
  }, [id, url])

  if (!posteo) return <p style={{ textAlign: 'center' }}>Cargando...</p>

  return (
    <section className="vista-posteo">
      <h2>{posteo.titulo}</h2>
      <p className="fecha">{posteo.fecha}</p>
      {posteo.imagen && (
        <img
          src={`${import.meta.env.BASE_URL}img/posts/${posteo.imagen}`}
          alt={posteo.titulo}
          className="posteo-img"
        />
      )}
      <p className="contenido-completo">{posteo.contenido}</p>
      <p className="autor">Por <strong>{posteo.autor}</strong></p>
    </section>
  )
}
