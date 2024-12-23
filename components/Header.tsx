'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Phone, TwitterIcon as TikTok, Menu, ShoppingBag, X, Plus, Minus } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const { items, addToCart, removeFromCart, clearCart, getCartTotal } = useCart()

  return (
    <header className="bg-surface text-white shadow-md">
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <Image src="/logo.png" alt="Ruta Solidaria 360° Logo" width={40} height={40} />
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden="true" />
                <a href="tel:9221634833" className="hover:text-accent transition-colors text-sm sm:text-base text-white">9221634833</a>
              </div>
            </div>
            <div className="hidden sm:flex gap-2">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-white">
                <Facebook className="h-4 w-4" aria-label="Facebook" />
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-white">
                <Instagram className="h-4 w-4" aria-label="Instagram" />
              </Link>
              <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors text-white">
                <TikTok className="h-4 w-4" aria-label="TikTok" />
              </Link>
            </div>
          </div>
          <nav className="hidden sm:block">
            <ul className="flex gap-4 sm:gap-8 items-center">
              <li><Link href="/" className="hover:text-accent transition-colors font-semibold text-sm sm:text-base text-white">INICIO</Link></li>
              <li><Link href="/acerca" className="hover:text-accent transition-colors font-semibold text-sm sm:text-base text-white">ACERCA DE NOSOTROS</Link></li>
              <li><Link href="/destinos" className="hover:text-accent transition-colors font-semibold text-sm sm:text-base text-white">DESTINOS</Link></li>
              <li><Link href="/tienda" className="hover:text-accent transition-colors font-semibold text-sm sm:text-base text-white">TIENDA</Link></li>
              <li>
                <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="icon" className="relative bg-transparent border-white hover:bg-white/10" onClick={() => setIsSheetOpen(true)}>
                      <ShoppingBag className="h-6 w-6 text-white" />
                      {items.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                          {items.length}
                        </span>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent className="w-[400px] sm:w-[540px] bg-surface border-l border-white/10">
                    <SheetHeader>
                      <SheetTitle className="text-2xl font-bold text-white">Tu Carrito</SheetTitle>
                      <SheetDescription className="text-gray-300">
                        Revisa y modifica los productos en tu carrito
                      </SheetDescription>
                    </SheetHeader>
                    <Separator className="my-4 bg-white/10" />
                    <ScrollArea className="h-[60vh] pr-4">
                      {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full">
                          <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
                          <p className="text-lg font-semibold text-white">Tu carrito está vacío</p>
                          <p className="text-sm text-gray-400 mt-2">Añade algunos productos para empezar</p>
                        </div>
                      ) : (
                        <ul className="space-y-6">
                          {items.map((item) => (
                            <li key={item.id} className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg">
                              <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-md overflow-hidden">
                                <Image 
                                  src={`/placeholder.svg?height=64&width=64`} 
                                  alt={item.nombre} 
                                  width={64} 
                                  height={64} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-grow">
                                <h3 className="font-semibold text-white">{item.nombre}</h3>
                                <p className="text-sm text-gray-300">${item.precio}</p>
                                <div className="flex items-center mt-2">
                                  <Button 
                                    variant="outline" 
                                    size="icon" 
                                    onClick={() => removeFromCart(item.id)} 
                                    className="h-8 w-8 bg-transparent border-white/20 hover:bg-white/10"
                                  >
                                    <Minus className="h-4 w-4 text-white" />
                                  </Button>
                                  <span className="mx-2 font-semibold text-white">{item.cantidad}</span>
                                  <Button 
                                    variant="outline" 
                                    size="icon" 
                                    onClick={() => addToCart({...item, cantidad: 1})} 
                                    className="h-8 w-8 bg-transparent border-white/20 hover:bg-white/10"
                                  >
                                    <Plus className="h-4 w-4 text-white" />
                                  </Button>
                                </div>
                              </div>
                              <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => removeFromCart(item.id)} 
                                className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                              >
                                <X className="h-5 w-5" />
                              </Button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </ScrollArea>
                    <SheetFooter className="mt-6">
                      <div className="w-full space-y-4">
                        <Separator className="bg-white/10" />
                        <div className="flex justify-between items-center text-white">
                          <span className="font-semibold">Total:</span>
                          <span className="text-lg font-bold">${getCartTotal().toFixed(2)}</span>
                        </div>
                        <div className="flex gap-4">
                          <Button 
                            onClick={clearCart} 
                            variant="outline" 
                            className="w-1/2 bg-transparent border-white/20 text-white hover:bg-white/10"
                          >
                            Vaciar Carrito
                          </Button>
                          <Button 
                            className="w-1/2 bg-accent text-white hover:bg-accent/90"
                          >
                            Proceder al Pago
                          </Button>
                        </div>
                      </div>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4 sm:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative bg-transparent border-white hover:bg-white/10" onClick={() => setIsSheetOpen(true)}>
                  <ShoppingBag className="h-6 w-6 text-white" />
                  {items.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {items.length}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:w-[400px] bg-surface border-l border-white/10">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold text-white">Tu Carrito</SheetTitle>
                  <SheetDescription className="text-gray-300">
                    Revisa y modifica los productos en tu carrito
                  </SheetDescription>
                </SheetHeader>
                <Separator className="my-4 bg-white/10" />
                <ScrollArea className="h-[60vh] pr-4">
                  {items.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full">
                      <ShoppingBag className="h-16 w-16 text-gray-400 mb-4" />
                      <p className="text-lg font-semibold text-white">Tu carrito está vacío</p>
                      <p className="text-sm text-gray-400 mt-2">Añade algunos productos para empezar</p>
                    </div>
                  ) : (
                    <ul className="space-y-6">
                      {items.map((item) => (
                        <li key={item.id} className="flex items-center space-x-4 bg-white/5 p-4 rounded-lg">
                          <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-md overflow-hidden">
                            <Image 
                              src={`/placeholder.svg?height=64&width=64`} 
                              alt={item.nombre} 
                              width={64} 
                              height={64} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-semibold text-white">{item.nombre}</h3>
                            <p className="text-sm text-gray-300">${item.precio}</p>
                            <div className="flex items-center mt-2">
                              <Button 
                                variant="outline" 
                                size="icon" 
                                onClick={() => removeFromCart(item.id)} 
                                className="h-8 w-8 bg-transparent border-white/20 hover:bg-white/10"
                              >
                                <Minus className="h-4 w-4 text-white" />
                              </Button>
                              <span className="mx-2 font-semibold text-white">{item.cantidad}</span>
                              <Button 
                                variant="outline" 
                                size="icon" 
                                onClick={() => addToCart({...item, cantidad: 1})} 
                                className="h-8 w-8 bg-transparent border-white/20 hover:bg-white/10"
                              >
                                <Plus className="h-4 w-4 text-white" />
                              </Button>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            onClick={() => removeFromCart(item.id)} 
                            className="text-red-400 hover:text-red-300 hover:bg-red-400/10"
                          >
                            <X className="h-5 w-5" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  )}
                </ScrollArea>
                <SheetFooter className="mt-6">
                  <div className="w-full space-y-4">
                    <Separator className="bg-white/10" />
                    <div className="flex justify-between items-center text-white">
                      <span className="font-semibold">Total:</span>
                      <span className="text-lg font-bold">${getCartTotal().toFixed(2)}</span>
                    </div>
                    <div className="flex gap-4">
                      <Button 
                        onClick={clearCart} 
                        variant="outline" 
                        className="w-1/2 bg-transparent border-white/20 text-white hover:bg-white/10"
                      >
                        Vaciar Carrito
                      </Button>
                      <Button 
                        className="w-1/2 bg-accent text-white hover:bg-accent/90"
                      >
                        Proceder al Pago
                      </Button>
                    </div>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 sm:hidden">
            <ul className="flex flex-col gap-2">
              <li><Link href="/" className="hover:text-accent transition-colors font-semibold block py-2 text-white">INICIO</Link></li>
              <li><Link href="/acerca" className="hover:text-accent transition-colors font-semibold block py-2 text-white">ACERCA DE NOSOTROS</Link></li>
              <li><Link href="/destinos" className="hover:text-accent transition-colors font-semibold block py-2 text-white">DESTINOS</Link></li>
              <li><Link href="/tienda" className="hover:text-accent transition-colors font-semibold block py-2 text-white">TIENDA</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

