import { Metadata } from 'next'
import TiendaVirtual from '@/components/TiendaVirtual'

export const metadata: Metadata = {
  title: 'Tienda Virtual | Ruta Solidaria 360°',
  description: 'Descubre y adquiere productos endémicos de nuestras comunidades locales.',
}

export default function TiendaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-text-primary mb-12 text-center">Tienda Solidaria</h1>
      <p className="text-lg text-text-secondary mb-8 text-center max-w-2xl mx-auto">
        Explora y adquiere productos únicos y auténticos de nuestras comunidades locales. 
        Cada compra contribuye directamente al desarrollo económico de estas regiones.
      </p>
      <TiendaVirtual />
    </div>
  )
}

