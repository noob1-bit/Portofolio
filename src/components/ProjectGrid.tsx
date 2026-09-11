import type { Project } from '@/data/projects'
import { ProjectCard } from '@/components/ProjectCard'

interface ProjectGridProps {
  projects: Project[]
  onOpenCaseStudy?: (id: string) => void
}

/**
 * Renders the Stitch editorial project list:
 * featured flagship first, then standard two-column cards,
 * then the compact 2-column bottom deck.
 * Pure presentational — filtering happens upstream in Work.
 */
export function ProjectGrid({ projects, onOpenCaseStudy }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-space-4xl" role="status">
        <p className="font-body-lg text-on-surface-variant">
          No projects match the current filter.
        </p>
      </div>
    )
  }

  const featured = projects.filter((p) => p.featured)
  const standard = projects.filter((p) => !p.featured)

  return (
    <>
      {featured.map((p) => (
        <ProjectCard key={p.id} project={p} onOpenCaseStudy={onOpenCaseStudy} />
      ))}

      {standard.slice(0, 2).map((p) => (
        <ProjectCard key={p.id} project={p} onOpenCaseStudy={onOpenCaseStudy} />
      ))}

      {standard.slice(2).length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
          {standard.slice(2).map((p) => (
            <ProjectCard key={p.id} project={p} onOpenCaseStudy={onOpenCaseStudy} />
          ))}
        </div>
      )}
    </>
  )
}
