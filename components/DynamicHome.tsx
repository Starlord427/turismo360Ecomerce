'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import DestinoCard from './DestinoCard'
import GaleriaItem from './GaleriaItem'
import { Camera, Users, Heart, Globe } from 'lucide-react'
import Link from 'next/link';
import { Button } from '@/components/ui/button'

const destinos = [
  {
    title: 'ANP "LA MONTAÑA"',
    location: 'MINATITLÁN, VERACRUZ',
    image: '/anp-la-montana.jpg',
    slug: 'anp-la-montana'
  },
  {
    title: 'ISLA DE LOS MONOS',
    location: 'CATEMACO, VERACRUZ',
    image: '/isla-de-los-monos.jpg',
    slug: 'isla-de-los-monos'
  },
  {
    title: 'CASCADA MAYOR',
    location: 'SAN PEDRO SOTEAPAN, VERACRUZ',
    image: '/cascada-mayor.jpg',
    slug: 'cascada-mayor'
  }
]

const beneficios = [
  {
    icon: Camera,
    title: 'Experiencias Inmersivas',
    description: 'Disfruta de recorridos virtuales en 360° que te transportarán a hermosos destinos rurales.'
  },
  {
    icon: Users,
    title: 'Apoyo Comunitario',
    description: 'Tu visita virtual contribuye directamente al desarrollo económico de las comunidades locales.'
  },
  {
    icon: Heart,
    title: 'Turismo Sostenible',
    description: 'Promueve un turismo responsable que respeta y preserva el patrimonio natural y cultural.'
  },
  {
    icon: Globe,
    title: 'Accesibilidad Global',
    description: 'Explora destinos únicos desde cualquier parte del mundo, sin limitaciones geográficas.'
  }
]

const galeriaItems = [
  { id: 1, image: '/galeria-1.jpg', alt: 'Vegetación en ANP La Montaña 1' },
  { id: 2, image: '/galeria-2.jpg', alt: 'Vegetación en ANP La Montaña 2' },
  { id: 3, image: '/galeria-3.jpg', alt: 'Vegetación en ANP La Montaña 3' },
  { id: 4, image: '/galeria-4.jpg', alt: 'Vegetación en ANP La Montaña 4' },
  { id: 5, image: '/galeria-5.jpg', alt: 'Vegetación en ANP La Montaña 5' },
  { id: 6, image: '/galeria-6.jpg', alt: 'Vegetación en ANP La Montaña 6' },
]

export default function DynamicHome() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-background text-black">
      <motion.div ref={ref} className="relative h-screen overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src="/hero-background.jpg"
            alt="Paisaje de Veracruz"
            fill
            className="object-cover brightness-50"
            priority
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
            RUTA<br />
            SOLIDARIA<br />
            360°
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">Bienvenidos a los recorridos Virtuales</p>
        </motion.div>
      </motion.div>

      <section className="py-12 sm:py-16 md:py-20 bg-accent text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">TIENDA SOLIDARIA</h2>
            <p className="text-lg sm:text-xl md:text-2xl mb-8">
              Explora y adquiere productos únicos de nuestras comunidades locales
            </p>
            <Link href="/tienda" passHref>
              <Button size="lg" className="bg-white text-accent hover:bg-white/90 transition-colors duration-200">
                Visitar Tienda Solidaria
              </Button>
            </Link>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 text-accent">
              <h3 className="text-xl font-semibold mb-2">Artesanías</h3>
              <p>Descubre hermosas creaciones hechas a mano por artesanos locales.</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-accent">
              <h3 className="text-xl font-semibold mb-2">Productos Agrícolas</h3>
              <p>Prueba los sabores auténticos de nuestra región.</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-accent">
              <h3 className="text-xl font-semibold mb-2">Experiencias</h3>
              <p>Adquiere paquetes para vivir experiencias únicas en nuestras comunidades.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <span className="text-secondary font-semibold">DESCUBRIR LUGAR</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mt-2">DESTINOS TURÍSTICOS</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destinos.map((destino, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <DestinoCard {...destino} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">BENEFICIOS DE RUTA SOLIDARIA 360°</h2>
            <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg">
              Descubre cómo nuestro proyecto impulsa el turismo sostenible y apoya a las comunidades locales
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-surface rounded-lg p-4 sm:p-6 shadow-lg"
              >
                <beneficio.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">{beneficio.title}</h3>
                <p className="text-text-secondary text-sm sm:text-base">{beneficio.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-surface">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">GALERÍA DE FOTOS</h2>
            <p className="mt-4 text-text-secondary text-sm sm:text-base md:text-lg">
              Explora la belleza de nuestros destinos a través de estas imágenes
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {galeriaItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <GaleriaItem {...item} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

