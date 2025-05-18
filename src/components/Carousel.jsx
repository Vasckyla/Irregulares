
import { useState, useEffect } from 'react'
import './carousel.css'

const frases = [
  { texto: "La literatura no cambia el mundo, pero cambia a las personas que pueden cambiar el mundo.", autor: "Mario Vargas Llosa" },
  { texto: "Escribo para que la muerte no tenga la última palabra.", autor: "Odysseas Elytis" },
  { texto: "Cada palabra es una chispa para encender la imaginación.", autor: "Anónimo" }
]

export default function Carousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((index + 1) % frases.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [index])

  return (
    <div className="carousel">
      <blockquote>
        <p>“{frases[index].texto}”</p>
        <footer>— {frases[index].autor}</footer>
      </blockquote>
    </div>
  )
}
