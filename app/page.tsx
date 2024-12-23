import dynamic from 'next/dynamic'

const DynamicHome = dynamic(() => import('../components/DynamicHome'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-2xl text-primary">Cargando...</p>
    </div>
  ),
})

export default function Home() {
  return <DynamicHome />
}

