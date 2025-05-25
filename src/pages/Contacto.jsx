const Contacto = () => (
  <section className="max-w-2xl mx-auto mt-8 bg-white p-6 rounded-xl shadow-md">
    <h2 className="text-2xl font-serif font-bold mb-4">Contacto</h2>
    <form className="grid gap-4">
      <input type="text" placeholder="Nombre" className="p-2 border rounded" />
      <input type="email" placeholder="Email" className="p-2 border rounded" />
      <textarea placeholder="Tu mensaje..." rows="4" className="p-2 border rounded" />
      <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Enviar</button>
    </form>
  </section>
);
export default Contacto;