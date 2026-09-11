/**
 * CANONICAL CONTENT LAYER — PROFILE
 * Source: content/source/CV_Muhammad_Syafrudin_Hilmi.pdf
 * Facts below are transcribed from the CV. Fields the CV does not
 * cover remain bracketed placeholders. Do not display the CV filename publicly.
 */

export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface TelemetryItem {
  value: string
  label: string
  highlight?: boolean
  kernel?: boolean
}

export interface ContactChannel {
  title: string
  subtitle: string
}

export interface ContactData {
  email: string
  engagementStatus: string
  ctaTitle: string
  ctaLede: string
  copyLabel: string
  openClientLabel: string
  channelsLabel: string
  channelsTitle: string
  advisory: ContactChannel
  pgpLabel: string
  pgpFingerprint: string
  pgpNote: string
  formTitle: string
  formSla: string
  nameLabel: string
  orgLabel: string
  typeLabel: string
  inquiryTypes: string[]
  briefLabel: string
  briefPlaceholder: string
  submitLabel: string
  formNote: string
}

export interface AboutPillar {
  title: string
  text: string
}

export interface AboutDossier {
  profileId: string
  baseStation: string
  currentRole: string
  focusLabel: string
  focusText: string
  readingLabel: string
  readingBench: string[]
}

export interface Profile {
  name: string
  role: string
  headline: string
  bio: string
  // Neutral site-status word for the navigation badge. Must not imply
  // job availability unless the user confirms it (Phase 11.6).
  statusBadge: string
  classification: string
  version: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  socialLinks: SocialLink[]
  telemetry: TelemetryItem[]
  thesisLabel: string
  thesisTitle: string
  thesisQuote: string
  thesisAttribution: string
  aboutBio: string
  pillars: AboutPillar[]
  dossier: AboutDossier
  uptimeLabel: string
  uptimeValue: string
  contact: ContactData
}

const PROFESSIONAL_SUMMARY =
  'Lulusan Sarjana Ekonomi (IPK 3.49/4.00) dari Universitas Islam Darussalam Ciamis dengan fokus Ekonomi Pembangunan. Memiliki pengalaman profesional dalam manajemen administrasi, pengelolaan dokumen komersial, serta manajemen media digital. Didukung oleh rekam jejak kepemimpinan yang kuat sebagai Direktur Utama organisasi LAPMI. Menguasai pengolahan data menggunakan Microsoft Excel serta memiliki sertifikasi kompetensi yang relevan. Pribadi yang komunikatif, disiplin, dan adaptif untuk berkontribusi secara optimal di bidang Administrasi, Operasional, maupun Keuangan.'

export const profile: Profile = {
  name: 'Muhammad Syafrudin Hilmi',
  role: 'Admin & Personal Assistant',
  headline: `Hi, I'm Muhammad Syafrudin Hilmi.`,
  bio: PROFESSIONAL_SUMMARY,
  // Phone removed from the public data layer (Phase 11.13): never rendered
  // by any component, not required by the site. Kept in the CV PDF only.
  statusBadge: 'Active',
  classification: 'ARCH_SPEC_2024.V4 // RUNTIME STATUS: ONLINE',
  version: 'v9.2 PROD',
  primaryCta: { label: 'Explore My Work', href: '#work' },
  // Real user-provided PDF deployed at public/cv/Muhammad-Syafrudin-Hilmi-CV.pdf.
  secondaryCta: { label: 'DOWNLOAD CV (PDF)', href: '/cv/Muhammad-Syafrudin-Hilmi-CV.pdf' },
  socialLinks: [
    // GitHub intentionally absent: no URL provided — never fabricate one.
    // Components render only the entries listed here (LinkedIn + email).
    { label: 'linkedin.com/in/muhammadsyafrudinhilmi', url: 'https://linkedin.com/in/muhammadsyafrudinhilmi', icon: 'share' },
    { label: 'msyafrudinh1@gmail.com', url: 'mailto:msyafrudinh1@gmail.com', icon: 'mail' },
  ],
  // No performance metrics on file — neutral em-dash states, never fiction.
  telemetry: [
    { value: '—', label: 'Case studies published' },
    { value: '—', label: 'Live demos' },
    { value: '—', label: 'Open-source repos' },
    { value: '—', label: 'Verified outcomes', highlight: true },
  ],
  thesisLabel: 'PROFILE',
  thesisTitle: 'Muhammad Syafrudin Hilmi',
  thesisQuote: 'Administration, operations, and finance support — handled accurately and reliably.',
  thesisAttribution: 'Primary focus',
  aboutBio: PROFESSIONAL_SUMMARY,
  pillars: [
    {
      title: 'Administration',
      text: 'Day-to-day administration and commercial documents — invoice, quotation, proposal — kept accurate and organized.',
    },
    {
      title: 'Digital Media',
      text: 'Website operations and news content publishing to editorial standards and schedules.',
    },
    {
      title: 'Data Handling',
      text: 'Spreadsheet-based processing and reporting with attention to detail.',
    },
  ],
  dossier: {
    profileId: 'PORTFOLIO PROFILE',
    baseStation: 'Ciamis, Jawa Barat',
    currentRole: 'Admin & Personal Assistant @ PT. Ide Diconic Indonesia',
    focusLabel: 'PRIMARY FOCUS',
    focusText: 'Administrasi, Operasional, Keuangan',
    readingLabel: 'CERTIFICATIONS',
    readingBench: [
      'Microsoft Excel Intermediate — MySkill',
      'Microsoft Word — MySkill',
      'Microsoft PowerPoint — MySkill',
    ],
  },
  uptimeLabel: 'EDUCATION',
  uptimeValue: 'S1 Economics — GPA 3.49 / 4.00',
  contact: {
    email: 'msyafrudinh1@gmail.com',
    // Neutral: no availability, SLA, or response-time claims (Phase 11.7).
    engagementStatus: 'DIRECT CONTACT',
    ctaTitle: 'Get in Touch',
    ctaLede: 'For inquiries, reach out directly by email using the details or the form below.',
    copyLabel: 'COPY: msyafrudinh1@gmail.com',
    openClientLabel: 'OPEN EMAIL CLIENT',
    channelsLabel: 'CONTACT CHANNELS',
    channelsTitle: 'Direct Channels',
    advisory: {
      title: 'Replies by Email',
      subtitle: 'No scheduling tool connected',
    },
    pgpLabel: 'PGP FINGERPRINT',
    pgpFingerprint: '—',
    pgpNote: 'No public key published.',
    formTitle: 'TRANSMISSION PORTAL',
    formSla: 'RESPONSE CHANNEL: EMAIL',
    nameLabel: 'NAME / PRINCIPAL',
    orgLabel: 'ORGANIZATION / ENTITY',
    typeLabel: 'ENGAGEMENT NATURE',
    inquiryTypes: ['General Inquiry', 'Project Inquiry', 'Other'],
    briefLabel: 'SYSTEM BRIEF & OBJECTIVES',
    briefPlaceholder: 'Briefly describe your inquiry…',
    submitLabel: 'TRANSMIT BRIEF',
    formNote: 'Opens your email app — nothing is sent automatically.',
  },
}
