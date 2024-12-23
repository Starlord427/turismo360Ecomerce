'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface DestinoCardProps {
  title: string
  location: string
  image: string
  slug: string
}

export default function DestinoCard({ title, location, image, slug }: DestinoCardProps) {
  const isANPLaMontana = title === 'ANP "LA MONTAÑA"'
  const href = isANPLaMontana 
    ? 'https://turismo-comunitario-360.web.app/dashboard'
    : '#'

  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg block shadow-lg bg-surface"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={400}
        className="w-full h-48 sm:h-56 md:h-64 object-cover"
      />
      <motion.div 
        className="absolute inset-0 bg-primary/70 flex flex-col justify-end p-4 sm:p-6 text-text-primary"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-xs sm:text-sm text-accent">{location}</span>
        <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
        {isANPLaMontana ? (
          <Link 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs sm:text-sm mt-2 bg-secondary text-secondary-foreground px-2 py-1 rounded inline-block hover:bg-accent transition-colors"
          >
            Ver recorrido 360°
          </Link>
        ) : (
          <div className="mt-2">
            <span className="text-sm sm:text-base font-semibold text-accent">Próximamente</span>
            <div className="mt-2 bg-secondary text-secondary-foreground px-2 py-1 rounded inline-block animate-pulse text-xs sm:text-sm">
              ¡Estamos trabajando en ello!
            </div>
          </div>
        )}
      </motion.div>
      {!isANPLaMontana && (
        <motion.div 
          className="absolute inset-0 bg-black/50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-text-primary text-center p-4">
            <p className="text-xl sm:text-2xl font-bold mb-2">¡Muy pronto!</p>
            <p className="text-sm sm:text-base">Estamos preparando una experiencia increíble para ti.</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

