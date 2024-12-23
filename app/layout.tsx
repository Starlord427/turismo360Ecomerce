import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CartProvider } from '@/context/CartContext'
import { Toaster } from 'react-hot-toast'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ruta Solidaria 360°',
  description: 'Turismo virtual para la economía social y solidaria',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <ScrollToTopButton />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}

