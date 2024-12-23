import Image from 'next/image'
import Link from 'next/link'
import DestinoCard from '../../components/DestinoCard'

const destinos = [
  {
    title: 'ANP "LA MONTAÑA"',
    location: 'MINATITLÁN, VERACRUZ',
    image: '/anp-la-montana.jpg',
    slug: 'anp-la-montana',
    description: 'Área Natural Protegida con una rica biodiversidad y hermosos paisajes.',
    reference: '[1] Comisión Nacional de Áreas Naturales Protegidas. (2023). ANP La Montaña.'
  },
  {
    title: 'ISLA DE LOS MONOS',
    location: 'CATEMACO, VERACRUZ',
    image: '/isla-de-los-monos.jpg',
    slug: 'isla-de-los-monos',
    description: 'Santuario de primates en medio de la Laguna de Catemaco.',
    reference: '[2] Secretaría de Turismo de Veracruz. (2023). Isla de los Monos, Catemaco.'
  },
  {
    title: 'CASCADA MAYOR',
    location: 'SAN PEDRO SOTEAPAN, VERACRUZ',
    image: '/cascada-mayor.jpg',
    slug: 'cascada-mayor',
    description: 'Impresionante caída de agua rodeada de exuberante vegetación.',
    reference: '[3] Guía Turística de Veracruz. (2023). Cascadas de San Pedro Soteapan.'
  }
]

export default function Destinos() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-text-primary mb-12 text-center">Nuestros Destinos</h1>
      <div className="grid md:grid-cols-2 gap-12">
        {destinos.map((destino, index) => (
          <div key={index} className="bg-surface rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-64">
              {destino.title === 'ANP "LA MONTAÑA"' ? (
                <Link href="https://turismo-comunitario-360.web.app/dashboard" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={destino.image}
                    alt={destino.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </Link>
              ) : (
                <Image
                  src={destino.image}
                  alt={destino.title}
                  layout="fill"
                  objectFit="cover"
                />
              )}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary mb-2">{destino.title}</h2>
              <p className="text-accent mb-4">{destino.location}</p>
              <p className="text-text-secondary mb-4">{destino.description}</p>
              <p className="text-sm text-text-secondary italic">{destino.reference}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

