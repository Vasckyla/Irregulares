
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './vista-posteo.css'

export default function VistaPosteo() {
  const { id } = useParams()
  const [posteo, setPosteo] = useState(null)

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbwF7VNlaxA557V8sK3N0HhHYmwb2YV5SfjILoSaQxByvz_QzzD8xlz_zMJ-f9Y8u9bL/exec')
      .then(res => res.json())
      .then(data => {
        const match = data[parseInt(id)]
        setPosteo(match)
      })
      .catch(err => console.error('Error al cargar posteo:', err))
  }, [id])

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
