import Image from 'next/image'

const productos = [
  { id: 1, nombre: "Artesanía local", precio: 250, imagen: "/placeholder.svg?height=200&width=200" },
  { id: 2, nombre: "Productos agrícolas", precio: 100, imagen: "/placeholder.svg?height=200&width=200" },
  { id: 3, nombre: "Textiles tradicionales", precio: 300, imagen: "/placeholder.svg?height=200&width=200" },
]

export default function ProductosLocales() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-4">Productos Locales</h1>
      <p className="text-lg mb-4">Apoya a nuestra comunidad adquiriendo productos auténticos elaborados por artesanos y agricultores locales.</p>
      <div className="grid md:grid-cols-3 gap-8">
        {productos.map((producto) => (
          <div key={producto.id} className="border rounded-lg p-4 space-y-4">
            <Image 
              src={producto.imagen} 
              alt={producto.nombre} 
              width={200} 
              height={200}
              className="rounded-lg mx-auto"
            />
            <h2 className="text-xl font-semibold">{producto.nombre}</h2>
            <p className="text-lg font-bold">${producto.precio}</p>
            <button className="w-full bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80">
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

