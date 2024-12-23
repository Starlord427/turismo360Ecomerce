export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="mb-4 text-sm sm:text-base">&copy; {new Date().getFullYear()} Ruta Solidaria 360°. Todos los derechos reservados.</p>
        <p className="text-accent text-xs sm:text-sm">Turismo virtual para la economía social y solidaria</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="text-white hover:text-accent transition-colors">Términos y condiciones</a>
          <a href="#" className="text-white hover:text-accent transition-colors">Política de privacidad</a>
        </div>
      </div>
    </footer>
  )
}

