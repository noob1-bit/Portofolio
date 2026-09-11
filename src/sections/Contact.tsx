import { useState, type FormEvent, type ReactNode } from 'react'
import { profile } from '@/data/profile'

function isUsableEmail(value: string): boolean {
  return !value.includes('[') && !value.includes(']') && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function CopyIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

export function Contact() {
  const { contact } = profile
  const emailUsable = isUsableEmail(contact.email)
  const [copied, setCopied] = useState(false)
  const [notice, setNotice] = useState<string | null>(null)
  const [name, setName] = useState('')
  const [org, setOrg] = useState('')
  const [typeIndex, setTypeIndex] = useState(0)
  const [brief, setBrief] = useState('')
  const [errors, setErrors] = useState<string[]>([])

  const handleCopy = async () => {
    if (!emailUsable) {
      setCopied(false)
      setNotice('[NO EMAIL CONFIGURED — ADD A REAL ADDRESS IN PROFILE DATA]')
      return
    }
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
      setNotice(null)
    } catch {
      setCopied(false)
      setNotice(contact.email)
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const problems: string[] = []
    if (!name.trim()) problems.push('[NAME IS REQUIRED]')
    if (!org.trim()) problems.push('[ORGANIZATION IS REQUIRED]')
    if (!brief.trim()) problems.push('[BRIEF IS REQUIRED]')
    if (!emailUsable) problems.push('[NO RECIPIENT EMAIL CONFIGURED — ADD A REAL ADDRESS IN PROFILE DATA]')
    setErrors(problems)
    if (problems.length > 0) return

    // Static deployment: dispatch via the visitor's own email client.
    // Nothing is stored or sent automatically.
    const inquiryType = contact.inquiryTypes[typeIndex] ?? ''
    const subject = `[PORTFOLIO INQUIRY] ${inquiryType} — ${name.trim()} (${org.trim()})`
    const body = `${brief.trim()}\n\n— ${name.trim()}, ${org.trim()}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setNotice('[OPENING YOUR EMAIL CLIENT TO DISPATCH THIS BRIEF — NOTHING WAS SENT AUTOMATICALLY]')
  }

  const github = profile.socialLinks.find((l) => l.icon === 'code')
  const linkedin = profile.socialLinks.find((l) => l.icon === 'share')

  return (
    <section id="contact" aria-labelledby="contact-heading" className="w-full bg-surface-container-lowest">
      <div className="content-wrapper py-space-3xl lg:py-space-4xl flex flex-col gap-space-3xl">
        {/* Closing CTA banner */}
        <div className="p-space-xl lg:p-space-2xl bg-surface-container-low rounded shadow-md flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-xl relative overflow-hidden">
          <div className="flex flex-col gap-space-sm max-w-2xl relative z-10">
            <div className="flex items-center gap-space-xs font-mono-label text-tertiary uppercase">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
              <span>{contact.engagementStatus}</span>
            </div>
            <h2 id="contact-heading" className="font-headline-lg lg:font-display-xl text-on-surface font-semibold tracking-tight">
              {contact.ctaTitle}
            </h2>
            <p className="font-body-md text-on-surface-variant">{contact.ctaLede}</p>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-space-sm w-full sm:w-auto relative z-10 shrink-0">
            <button
              type="button"
              onClick={handleCopy}
              className="px-space-lg py-space-md rounded bg-on-surface text-surface font-mono-label font-semibold tracking-wider uppercase hover:bg-surface-bright hover:text-on-surface transition-all flex items-center justify-center gap-space-sm"
              aria-live="polite"
            >
              <CopyIcon />
              <span>{copied ? '[COPIED TO CLIPBOARD]' : contact.copyLabel}</span>
            </button>
            {emailUsable ? (
              <a
                href={`mailto:${contact.email}`}
                className="px-space-lg py-space-md rounded bg-surface-container text-on-surface font-mono-label tracking-wider uppercase hover:bg-surface-container-high transition-all flex items-center justify-center gap-space-sm"
              >
                <MailIcon />
                <span>{contact.openClientLabel}</span>
              </a>
            ) : (
              <span
                aria-disabled="true"
                title="Placeholder link — destination not yet available"
                className="px-space-lg py-space-md rounded bg-surface-container text-on-surface font-mono-label tracking-wider uppercase flex items-center justify-center gap-space-sm opacity-70"
              >
                <MailIcon />
                <span>{contact.openClientLabel}</span>
              </span>
            )}
          </div>
        </div>
        {notice && (
          <p role="status" className="font-mono-code text-tertiary">
            {notice}
          </p>
        )}

        {/* Channels + form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-2xl">
          {/* Channels */}
          <div className="lg:col-span-5 flex flex-col gap-space-lg">
            <div className="flex flex-col gap-space-xs">
              <span className="font-mono-label text-tertiary uppercase">{contact.channelsLabel}</span>
              <h3 className="font-headline-md text-on-surface font-semibold">{contact.channelsTitle}</h3>
            </div>
            <div className="flex flex-col gap-space-sm">
              {/* Advisory (placeholder destination) */}
              <span
                aria-disabled="true"
                title="Placeholder link — destination not yet available"
                className="p-space-md bg-surface-container rounded flex items-center justify-between"
              >
                <span className="flex items-center gap-space-md">
                  <span className="w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center text-primary" aria-hidden="true">
                    <CalendarIcon />
                  </span>
                  <span>
                    <span className="font-headline-sm text-on-surface block font-medium">{contact.advisory.title}</span>
                    <span className="font-mono-label text-outline uppercase">{contact.advisory.subtitle}</span>
                  </span>
                </span>
                <span className="text-outline" aria-hidden="true"><ArrowIcon /></span>
              </span>
              {/* GitHub */}
              {github && (
                <ChannelRow
                  icon={<CodeIcon />}
                  iconTone="text-on-surface"
                  title={github.label}
                  subtitle="[OPEN SOURCE SUBTITLE]"
                  href={github.url}
                  external
                />
              )}
              {/* LinkedIn */}
              {linkedin && (
                <ChannelRow
                  icon={<ShareIcon />}
                  iconTone="text-tertiary"
                  title={linkedin.label}
                  subtitle="Professional network"
                  href={linkedin.url}
                  external
                />
              )}
            </div>
            {/* PGP block */}
            <div className="p-space-md bg-surface-container-low rounded flex flex-col gap-space-xs">
              <span className="font-mono-label text-outline uppercase">{contact.pgpLabel}</span>
              <span className="font-mono-code text-secondary break-all">{contact.pgpFingerprint}</span>
              <span className="font-mono-label text-tertiary mt-space-xs">{contact.pgpNote}</span>
            </div>
          </div>

          {/* Inquiry form */}
          <div className="lg:col-span-7 bg-surface-container-low p-space-lg lg:p-space-xl rounded shadow-md flex flex-col gap-space-lg">
            <div className="flex items-center justify-between">
              <span className="font-mono-label text-outline uppercase">{contact.formTitle}</span>
              <span className="font-mono-label text-secondary">{contact.formSla}</span>
            </div>
            <form className="flex flex-col gap-space-md" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label className="font-mono-label text-on-surface uppercase" htmlFor="sender-name">
                    {contact.nameLabel} <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="sender-name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-surface-container rounded p-space-md font-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-high transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-mono-label text-on-surface uppercase" htmlFor="sender-org">
                    {contact.orgLabel} <span className="text-primary" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="sender-org"
                    type="text"
                    required
                    autoComplete="organization"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    className="w-full bg-surface-container rounded p-space-md font-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-high transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-space-xs">
                <span className="font-mono-label text-on-surface uppercase" id="inquiry-type-label">
                  {contact.typeLabel} <span className="text-primary" aria-hidden="true">*</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs" role="group" aria-labelledby="inquiry-type-label">
                  {contact.inquiryTypes.map((type, i) => (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={typeIndex === i}
                      onClick={() => setTypeIndex(i)}
                      className={`py-space-sm px-space-md rounded font-mono-label uppercase text-left transition-all ${
                        typeIndex === i
                          ? 'bg-surface-container-high text-on-surface'
                          : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-space-xs">
                <label className="font-mono-label text-on-surface uppercase" htmlFor="project-brief">
                  {contact.briefLabel} <span className="text-primary" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="project-brief"
                  required
                  rows={4}
                  value={brief}
                  onChange={(e) => setBrief(e.target.value)}
                  placeholder={contact.briefPlaceholder}
                  className="w-full bg-surface-container rounded p-space-md font-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-high transition-colors resize-none"
                />
              </div>

              {errors.length > 0 && (
                <div role="alert" className="p-space-md bg-surface-container rounded">
                  <ul className="flex flex-col gap-1 font-mono-code text-error">
                    {errors.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-xs">
                <span className="font-mono-label text-outline">{contact.formNote}</span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-space-xl py-space-md rounded bg-primary-container text-on-primary-container font-mono-label font-semibold uppercase tracking-wider hover:bg-primary hover:text-on-primary transition-all shadow-md flex items-center justify-center gap-space-sm"
                >
                  <span>{contact.submitLabel}</span>
                  <SendIcon />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function ChannelRow({
  icon,
  iconTone,
  title,
  subtitle,
  href,
  external,
}: {
  icon: ReactNode
  iconTone: string
  title: string
  subtitle: string
  href: string
  external?: boolean
}) {
  const isPlaceholder = href === '#'
  const inner = (
    <>
      <span className="flex items-center gap-space-md">
        <span className={`w-10 h-10 rounded bg-surface-container-highest flex items-center justify-center ${iconTone}`} aria-hidden="true">
          {icon}
        </span>
        <span>
          <span className="font-headline-sm text-on-surface block font-medium">{title}</span>
          <span className="font-mono-label text-outline uppercase">{subtitle}</span>
        </span>
      </span>
      <span className="text-outline" aria-hidden="true">
        {external ? <ExternalIcon /> : <ArrowIcon />}
      </span>
    </>
  )

  if (isPlaceholder) {
    return (
      <span
        aria-disabled="true"
        title="Placeholder link — destination not yet available"
        className="p-space-md bg-surface-container rounded flex items-center justify-between"
      >
        {inner}
      </span>
    )
  }
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      className="p-space-md bg-surface-container rounded flex items-center justify-between hover:bg-surface-container-high transition-colors shadow-sm"
    >
      {inner}
    </a>
  )
}
