import { skills, type SkillDomain } from '@/data/skills'

const accentStyles: Record<SkillDomain['accent'], string> = {
  tertiary: 'text-tertiary',
  primary: 'text-primary',
  'fixed-dim': 'text-tertiary-fixed-dim',
  secondary: 'text-secondary',
}

function DomainCard({ domain }: { domain: SkillDomain }) {
  return (
    <article
      className={`p-space-lg bg-surface-container-low rounded flex flex-col justify-between gap-space-lg shadow-md hover:bg-surface-container transition-colors ${
        domain.wide ? 'md:col-span-2 lg:col-span-2' : ''
      }`}
    >
      <div className="flex flex-col gap-space-md">
        <div className="flex items-center justify-between">
          <span className={`font-mono-label uppercase ${accentStyles[domain.accent]}`}>
            DOMAIN {domain.index} // {domain.code}
          </span>
          <span className="font-mono-label px-space-xs py-0.5 bg-surface-container-highest rounded text-on-surface">
            {domain.years}
          </span>
        </div>
        <h3 className="font-headline-sm text-on-surface font-semibold">{domain.title}</h3>
        <p className="font-body-sm text-on-surface-variant">{domain.description}</p>

        {domain.technologies.length > 0 && (
          <div className="flex flex-wrap gap-space-xs pt-space-xs">
            {domain.technologies.map((tech) => (
              <span key={tech} className="px-space-sm py-1 bg-surface-container rounded font-mono-label text-secondary">
                {tech}
              </span>
            ))}
          </div>
        )}

        {domain.practices && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
            {domain.practices.map((practice) => (
              <div key={practice.abbr} className="p-space-sm bg-surface-container rounded">
                <span className="font-mono-label text-primary block">{practice.abbr}</span>
                <span className="font-body-sm text-secondary">{practice.full}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {domain.contextText && (
        <div className="p-space-md bg-surface-container rounded">
          <span className="font-mono-label text-outline uppercase block mb-1">
            VERIFIED PRODUCTION CONTEXT
          </span>
          <p className="font-mono-code text-on-surface">{domain.contextText}</p>
        </div>
      )}

      {domain.principle && (
        <div className="p-space-md bg-surface-container rounded flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
          <div>
            <span className="font-mono-label text-outline uppercase block">{domain.principle.label}</span>
            <span className="font-mono-code text-on-surface">{domain.principle.text}</span>
          </div>
          <span className="font-mono-label text-tertiary font-semibold uppercase whitespace-nowrap">
            {domain.principle.linkLabel}
          </span>
        </div>
      )}
    </article>
  )
}

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="w-full bg-surface-container-lowest">
      <div className="content-wrapper py-space-3xl lg:py-space-4xl flex flex-col gap-space-2xl">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-sm">
              <span className="font-mono-label text-tertiary uppercase tracking-widest">[SEC_02 // STACK]</span>
              <span className="w-8 h-[1px] bg-outline-variant/60" aria-hidden="true" />
              <span className="font-mono-label text-outline uppercase">PROVEN CAPABILITIES</span>
            </div>
            <h2 id="skills-heading" className="font-headline-lg text-on-surface font-semibold tracking-tight">
              Capabilities
            </h2>
          </div>
          <p className="font-mono-code text-on-surface-variant max-w-lg">
            Skill areas from CV — no invented proficiency scores.
          </p>
        </div>

        {/* Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {skills.map((domain) => (
            <DomainCard key={domain.id} domain={domain} />
          ))}
        </div>
      </div>
    </section>
  )
}
