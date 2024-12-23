'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductoCard from './ProductoCard'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const productos = [
  {
    id: 1,
    nombre: "Café Orgánico de Altura",
    precio: 150,
    imagen: "/cafe-organico.jpg",
    localidad: "Minatitlán",
    descripcion: "Café de alta calidad cultivado en las montañas de Veracruz.",
    categoria: "Alimentos"
  },
  {
    id: 2,
    nombre: "Textil Bordado a Mano",
    precio: 500,
    imagen: "/textil-bordado.jpg",
    localidad: "Catemaco",
    descripcion: "Hermoso textil con diseños tradicionales, hecho a mano por artesanas locales.",
    categoria: "Artesanías"
  },
  {
    id: 3,
    nombre: "Miel de Abeja Melipona",
    precio: 200,
    imagen: "/miel-melipona.jpg",
    localidad: "San Pedro Soteapan",
    descripcion: "Miel pura de abeja melipona, conocida por sus propiedades medicinales.",
    categoria: "Alimentos"
  },
  {
    id: 4,
    nombre: "Figura de Barro Negro",
    precio: 350,
    imagen: "/figura-barro-negro.jpg",
    localidad: "Minatitlán",
    descripcion: "Elegante figura decorativa hecha con la técnica tradicional de barro negro.",
    categoria: "Artesanías"
  },
  {
    id: 5,
    nombre: "Salsa de Chile Habanero",
    precio: 80,
    imagen: "/salsa-habanero.jpg",
    localidad: "Catemaco",
    descripcion: "Salsa picante artesanal elaborada con chiles habaneros frescos de la región.",
    categoria: "Alimentos"
  },
  {
    id: 6,
    nombre: "Hamaca Tejida a Mano",
    precio: 800,
    imagen: "/hamaca-tejida.jpg",
    localidad: "San Pedro Soteapan",
    descripcion: "Cómoda hamaca tejida a mano con fibras naturales y tintes orgánicos.",
    categoria: "Artesanías"
  }
]

export default function TiendaVirtual() {
  const [filtro, setFiltro] = useState("")
  const [categoria, setCategoria] = useState("Todos")

  const productosFiltrados = productos.filter(producto => 
    (producto.nombre.toLowerCase().includes(filtro.toLowerCase()) || 
     producto.localidad.toLowerCase().includes(filtro.toLowerCase())) &&
    (categoria === "Todos" || producto.categoria === categoria)
  )

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <Input
          type="text"
          placeholder="Buscar productos o localidades..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="w-full md:w-1/3"
        />
        <Select value={categoria} onValueChange={setCategoria}>
          <SelectTrigger className="w-full md:w-1/4">
            <SelectValue placeholder="Categoría" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Todos">Todos</SelectItem>
            <SelectItem value="Alimentos">Alimentos</SelectItem>
            <SelectItem value="Artesanías">Artesanías</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {productosFiltrados.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </motion.div>

      {productosFiltrados.length === 0 && (
        <p className="text-center text-text-secondary mt-8">
          No se encontraron productos que coincidan con tu búsqueda.
        </p>
      )}

      <div className="mt-12 bg-surface p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Impacto en la Comunidad</h2>
        <p className="text-white/80 mb-4">
          En Ruta Solidaria 360°, nos enorgullece apoyar a las comunidades locales ayudándoles a promocionar 
          sus productos únicos. Cada compra que realizas tiene un impacto directo en la vida de los artesanos 
          y productores, fomentando la preservación de técnicas tradicionales y el desarrollo económico sostenible.
        </p>
        <Button className="bg-accent hover:bg-accent/80">Conoce Más Sobre Nuestro Impacto</Button>
      </div>
    </div>
  )
}

