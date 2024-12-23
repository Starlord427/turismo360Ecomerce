'use client'

import Image from 'next/image'
import Slider from 'react-slick'
import { motion } from 'framer-motion'

interface GaleriaItem {
  id: number
  image: string
  alt: string
}

interface GaleriaCarruselProps {
  items: GaleriaItem[]
}

export default function GaleriaCarrusel({ items }: GaleriaCarruselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="relative">
      <Slider {...settings} className="gallery-slider">
        {items.map((item) => (
          <motion.div 
            key={item.id} 
            className="px-2"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={item.image}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          </motion.div>
        ))}
      </Slider>
    </div>
  )
}

