import { useEffect, useState } from 'react';

const frases = [
  { texto: 'El mundo está hecho de historias, no de átomos.', autor: 'Muriel Rukeyser', img: '/img/carrousel1.jpg' },
  { texto: 'La literatura es la prueba de que la vida no basta.', autor: 'Fernando Pessoa', img: '/img/carrousel2.jpg' },
  { texto: 'Nada más bello que una mente desatada.', autor: 'Anónimo', img: '/img/carrousel3.jpg' },
];

const Carrousel = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex((index + 1) % frases.length), 5000);
    return () => clearInterval(interval);
  }, [index]);

  const frase = frases[index];

  return (
    <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] relative overflow-hidden">
      <img src={frase.img} alt="frase" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-black/60 text-white text-center p-4 sm:p-6 rounded max-w-xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-serif italic">“{frase.texto}”</p>
          <p className="mt-2 text-sm text-gray-300">— {frase.autor}</p>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
