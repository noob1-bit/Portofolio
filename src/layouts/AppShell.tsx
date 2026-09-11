import { ReactNode } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-surface text-on-surface font-geist">
      <Navigation />

      <main id="main-content" className="pt-14 lg:pt-16">
        {children}
      </main>

      <Footer />
    </div>
  )
}