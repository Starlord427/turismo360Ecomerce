export default function Contacto() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Contacto</h1>
      <p className="text-lg mb-4">¿Tienes alguna pregunta o comentario? ¡Nos encantaría escucharte!</p>
      <form className="space-y-4">
        <div>
          <label htmlFor="nombre" className="block mb-2">Nombre</label>
          <input type="text" id="nombre" name="nombre" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="mensaje" className="block mb-2">Mensaje</label>
          <textarea id="mensaje" name="mensaje" rows={4} className="w-full p-2 border rounded" required></textarea>
        </div>
        <button type="submit" className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80">
          Enviar mensaje
        </button>
      </form>
    </div>
  )
}

