/**
 * CANONICAL CONTENT LAYER — SKILLS
 * Source: content/source/CV_Muhammad_Syafrudin_Hilmi.pdf
 * Items are transcribed verbatim from the CV's Technical / Personal /
 * Language sections. Microsoft Word & PowerPoint appear via the CV's
 * SERTIFIKASI section (MySkill, April 2026), not the KEAHLIAN block.
 * No proficiency scores exist in the CV, so none are modeled.
 */

export interface SkillPractice {
  abbr: string
  full: string
}

export interface SkillPrinciple {
  label: string
  text: string
  linkLabel: string
}

export interface SkillDomain {
  id: string
  index: string
  code: string
  accent: 'tertiary' | 'primary' | 'fixed-dim' | 'secondary'
  title: string
  years: string
  description: string
  technologies: string[]
  contextText: string
  practices?: SkillPractice[]
  principle?: SkillPrinciple
  wide?: boolean
}

export const skills: SkillDomain[] = [
  {
    id: 'skill-administrasi',
    index: '01',
    code: 'ADMINISTRASI',
    accent: 'tertiary',
    title: 'Administrasi & Manajemen Dokumen',
    years: '—',
    description: 'Day-to-day administration and commercial document handling — invoice, quotation, proposal.',
    technologies: ['Pengelolaan Administrasi', 'Invoice', 'Quotation', 'Proposal'],
    contextText: '—',
  },
  {
    id: 'skill-media',
    index: '02',
    code: 'MEDIA DIGITAL',
    accent: 'primary',
    title: 'Media Digital & Desain',
    years: '—',
    description: 'Canva design, social media handling, and website content management.',
    technologies: ['Desain Canva', 'Pengelolaan Media Sosial', 'Website Management'],
    contextText: '—',
  },
  {
    id: 'skill-data',
    index: '03',
    code: 'PENGOLAHAN DATA',
    accent: 'fixed-dim',
    title: 'Pengolahan Data & Perkantoran',
    years: '—',
    description: 'Spreadsheet and office-document processing with Microsoft Excel, Word, and PowerPoint.',
    technologies: ['Microsoft Excel', 'Microsoft Word', 'Microsoft PowerPoint'],
    contextText: '—',
  },
  {
    id: 'skill-personal',
    index: '04',
    code: 'INTERPERSONAL',
    accent: 'secondary',
    title: 'Keahlian Personal',
    years: '—',
    description: 'Effective communication, time management, teamwork, and adaptability.',
    technologies: [
      'Komunikasi Efektif',
      'Manajemen Waktu',
      'Kerja Sama Tim',
      'Pemecahan Masalah',
      'Ketelitian',
      'Adaptabilitas',
    ],
    contextText: '—',
  },
  {
    id: 'skill-bahasa',
    index: '05',
    code: 'BAHASA',
    accent: 'tertiary',
    title: 'Kemampuan Bahasa',
    years: '—',
    description: 'Indonesian (fluent) and English (intermediate), as listed on CV.',
    technologies: [],
    contextText: '',
    practices: [
      { abbr: 'ID', full: 'Bahasa Indonesia (Fasih/Native)' },
      { abbr: 'EN', full: 'Bahasa Inggris (Intermediate)' },
    ],
    principle: {
      label: 'SELF-ASSESSED',
      text: 'Levels as listed on CV.',
      linkLabel: '',
    },
    wide: true,
  },
]
