import { Globe, Layers, Hexagon, Triangle, Circle, Square, Box } from 'lucide-react'

const logoMap = {
  'logo-1': () => (
    <div className="flex items-center gap-2">
      <Globe size={26} strokeWidth={2.5} />
      <span className="text-xl font-bold tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>GlobalTech</span>
    </div>
  ),
  'logo-2': () => (
    <div className="flex items-center gap-2">
      <Layers size={26} strokeWidth={2.5} />
      <span className="text-xl font-semibold" style={{ fontFamily: 'var(--font-display)' }}>Stack</span>
    </div>
  ),
  'logo-3': () => (
    <div className="flex items-center gap-2">
      <Hexagon size={26} strokeWidth={2.5} />
      <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Hexa</span>
    </div>
  ),
  'logo-4': () => (
    <div className="flex items-center gap-2">
      <Triangle size={24} className="rotate-180" strokeWidth={3} />
      <span className="text-lg font-bold uppercase tracking-widest" style={{ fontFamily: 'var(--font-display)' }}>Pinnacle</span>
    </div>
  ),
  'logo-5': () => (
    <div className="flex items-center gap-2">
      <Circle size={24} strokeWidth={3} />
      <span className="text-xl font-medium tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Orbit</span>
    </div>
  ),
  'logo-6': () => (
    <div className="flex items-center gap-2">
      <Square size={24} strokeWidth={3} />
      <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>Block</span>
    </div>
  ),
  'logo-7': () => (
    <div className="flex items-center gap-2">
      <Box size={26} strokeWidth={2.5} />
      <span className="text-xl font-semibold tracking-tighter" style={{ fontFamily: 'var(--font-display)' }}>Cube</span>
    </div>
  ),
}

export function CompanyLogo({ src, name }: { src: string; name: string }) {
  const Logo = logoMap[src as keyof typeof logoMap]
  
  if (!Logo) {
    return <span className="font-mono text-sm tracking-tight">{name}</span>
  }
  
  return (
    <div className="text-muted-foreground/60 transition-all duration-300 hover:text-muted-foreground hover:scale-105 cursor-pointer">
      <Logo />
    </div>
  )
}
