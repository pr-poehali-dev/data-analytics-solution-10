import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative" style={{ background: 'linear-gradient(135deg, #020c18 0%, #051525 50%, #020c18 100%)' }}>
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={40}
          borderColor="#1a2a3a"
          hoverFillColor="#0d1f2d"
        />
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}