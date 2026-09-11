import { useCallback, useState } from 'react'
import './styles/globals.css'
import { AppShell } from '@/layouts/AppShell'
import { Hero } from '@/sections/Hero'
import { Work } from '@/sections/Work'
import { CaseStudy } from '@/sections/CaseStudy'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Experience } from '@/sections/Experience'
import { Contact } from '@/sections/Contact'
import { projects, getFeaturedProject } from '@/data/projects'

function App() {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(
    () => getFeaturedProject(projects)?.id ?? 'proj-01'
  )

  /* Select a dossier and bring it into view (prev/next live inside it). */
  const handleNavigateCaseStudy = useCallback((id: string) => {
    setActiveCaseStudyId(id)
    document.getElementById('case-study')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <AppShell>
      {/* ── Home / Hero ── */}
      <section id="home" aria-labelledby="hero-heading">
        <Hero />
      </section>

      {/* ── Work / Systems Index ── */}
      <Work onOpenCaseStudy={handleNavigateCaseStudy} />

      {/* ── Case Study / Technical Dossier ── */}
      <CaseStudy projectId={activeCaseStudyId} onNavigate={handleNavigateCaseStudy} />

      {/* ── About ── */}
      <About />

      {/* ── Skills ── */}
      <Skills />

      {/* ── Experience ── */}
      <Experience />

      {/* ── Contact ── */}
      <Contact />
    </AppShell>
  )
}

export default App