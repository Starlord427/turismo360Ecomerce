'use client'

import { useCart } from '@/context/CartContext'
import { ShoppingBag, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function ShoppingCart() {
  const { items, removeFromCart, clearCart, getCartTotal } = useCart()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <ShoppingBag className="h-6 w-6" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {items.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Carrito de Compras</SheetTitle>
          <SheetDescription>
            Revisa tus productos seleccionados
          </SheetDescription>
        </SheetHeader>
        {items.length === 0 ? (
          <p className="text-center text-text-secondary mt-8">Tu carrito está vacío</p>
        ) : (
          <>
            <ul className="mt-8 space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{item.nombre}</h3>
                    <p className="text-sm text-text-secondary">
                      Cantidad: {item.cantidad} x ${item.precio}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFromCart(item.id)}
                    className="hover:bg-red-100 hover:text-red-600 transition-colors duration-200"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <p className="text-lg font-bold">Total: ${getCartTotal()}</p>
              <div className="mt-4 space-x-2">
                <Button onClick={clearCart} variant="outline" className="text-sm sm:text-base py-2 px-4">
                  Vaciar Carrito
                </Button>
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 text-sm sm:text-base py-2 px-4">
                  Proceder al Pago
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}

