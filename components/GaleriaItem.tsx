import Image from 'next/image'
import { useState } from 'react'

interface GaleriaItemProps {
  image: string
  alt: string
}

export default function GaleriaItem({ image, alt }: GaleriaItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div 
        className="relative overflow-hidden rounded-lg cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={image}
          alt={alt}
          width={300}
          height={300}
          className="w-full h-[300px] object-cover transition-transform hover:scale-110"
        />
      </div>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-primary bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <div className="max-w-3xl max-h-full p-4">
            <Image
              src={image}
              alt={alt}
              width={1200}
              height={800}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}

