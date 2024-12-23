'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { toast } from 'react-hot-toast'

interface Producto {
  id: number
  nombre: string
  precio: number
  imagen: string
  localidad: string
  descripcion: string
  categoria: string
}

interface ProductoCardProps {
  producto: Producto
}

export default function ProductoCard({ producto }: ProductoCardProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1
    })
    toast.success(`${producto.nombre} añadido al carrito`)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden bg-surface">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-xl mb-2 text-text-primary">{producto.nombre}</CardTitle>
          <CardDescription className="text-sm text-text-secondary mb-2">
            {producto.localidad} - {producto.categoria}
          </CardDescription>
          <p className="text-text-secondary">{producto.descripcion}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4">
          <span className="text-xl font-bold text-primary">${producto.precio}</span>
          <Button className="bg-primary text-white hover:bg-primary/90 transition-colors duration-200" onClick={handleAddToCart}>
            <ShoppingCart className="mr-2 h-4 w-4" /> Agregar al Carrito
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

