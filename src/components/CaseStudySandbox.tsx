import { useCallback, useEffect, useRef, useState } from 'react'
import type { CaseStudyLogLine, SandboxSpec } from '@/data/projects'

const logToneStyles: Record<CaseStudyLogLine['tone'], string> = {
  ok: 'text-emerald-400',
  plain: 'text-on-surface',
  muted: 'text-outline',
  accent: 'text-tertiary',
}

interface CaseStudySandboxProps {
  spec: SandboxSpec
  onClose: () => void
}

/**
 * Interactive simulator drawer (Stitch `#demoModal`).
 * Real dialog behavior: labelled, ESC/outside close, initial focus,
 * focus trap, focus restoration, background scroll lock.
 */
export function CaseStudySandbox({ spec, onClose }: CaseStudySandboxProps) {
  const [packets, setPackets] = useState(0)
  const [flash, setFlash] = useState(false)
  const [log, setLog] = useState<CaseStudyLogLine[]>(spec.seedLog)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const flashTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* ── Mount: lock scroll, focus close, snapshot previous focus ── */
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()

    return () => {
      document.body.style.overflow = originalOverflow
      previous?.focus()
      if (flashTimer.current) clearTimeout(flashTimer.current)
    }
  }, [])

  const handleBurst = useCallback(() => {
    setPackets((p) => p + 100)
    setFlash(true)
    if (flashTimer.current) clearTimeout(flashTimer.current)
    flashTimer.current = setTimeout(() => setFlash(false), 600)
    setLog((lines) => [
      ...lines,
      {
        text: `> Ingested 100 deltas @ ${new Date().toISOString().substring(11, 23)} — [CONVERGED]`,
        tone: 'accent',
      },
    ])
  }, [])

  const handleClear = useCallback(() => {
    setPackets(0)
    setFlash(false)
    setLog(spec.seedLog)
  }, [spec.seedLog])

  /* ── ESC close + Tab trap ── */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key !== 'Tab' || !dialogRef.current) return
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, [tabindex]:not([tabindex="-1"])'
      )
      if (focusables.length === 0) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (!first || !last) return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center p-space-md"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="sandbox-title"
        className="bg-surface-container-low max-w-4xl w-full rounded p-space-lg shadow-2xl flex flex-col gap-space-md relative"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span id="sandbox-title" className="font-mono-label text-on-surface uppercase">
              {spec.title}
            </span>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close simulator"
            className="text-on-surface-variant hover:text-on-surface transition-colors p-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          <div className="md:col-span-2 bg-surface-container-lowest rounded p-space-md flex flex-col gap-space-sm h-64 justify-between">
            <div className="flex justify-between font-mono-label text-outline">
              <span>{spec.busLabel}</span>
              <span className="text-tertiary">PACKETS: {packets}</span>
            </div>
            <div className="grid grid-cols-6 gap-2 my-auto" aria-hidden="true">
              {spec.nodes.map((node) => (
                <div
                  key={node}
                  className={`h-8 rounded flex items-center justify-center font-mono-label text-[10px] transition-colors ${
                    flash
                      ? 'bg-primary-container text-on-primary-container'
                      : 'bg-surface-container text-secondary'
                  }`}
                >
                  {node}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={handleBurst}
                className="px-space-sm py-1 bg-primary-container text-on-primary-container font-mono-label rounded hover:bg-primary hover:text-on-primary transition-colors"
              >
                {spec.burstLabel}
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="px-space-sm py-1 bg-surface-container text-secondary font-mono-label rounded hover:bg-surface-container-high transition-colors"
              >
                {spec.clearLabel}
              </button>
            </div>
          </div>

          <div
            className="bg-surface-container-lowest rounded p-space-md font-mono-code flex flex-col gap-1 text-[11px] text-secondary overflow-y-auto h-64"
            role="log"
            aria-label="Simulator console"
          >
            {log.map((line, i) => (
              <div key={i} className={logToneStyles[line.tone]}>
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
