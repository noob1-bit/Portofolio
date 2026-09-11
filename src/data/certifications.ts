/**
 * CANONICAL CONTENT LAYER — CERTIFICATIONS
 * Source: content/source/CV_Muhammad_Syafrudin_Hilmi.pdf
 * No UI section consumes this yet; reserved for future use so credential
 * facts live in exactly one editable place. No IDs are invented.
 */

export interface CertificationEntry {
  id: string
  name: string
  provider: string
  date: string
}

export const certifications: CertificationEntry[] = [
  {
    id: 'cert-01',
    name: 'Microsoft Excel Intermediate',
    provider: 'MySkill',
    date: 'April 2026',
  },
  {
    id: 'cert-02',
    name: 'Microsoft Word',
    provider: 'MySkill',
    date: 'April 2026',
  },
  {
    id: 'cert-03',
    name: 'Microsoft PowerPoint',
    provider: 'MySkill',
    date: 'April 2026',
  },
]
