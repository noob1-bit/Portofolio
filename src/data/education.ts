/**
 * CANONICAL CONTENT LAYER — EDUCATION
 * Source: content/source/CV_Muhammad_Syafrudin_Hilmi.pdf
 * `field: Ekonomi Pembangunan` is stated in the CV's RINGKASAN PROFESIONAL
 * ("dengan fokus Ekonomi Pembangunan"), not in the PENDIDIKAN block itself.
 * No UI section consumes this yet; reserved for future use so academic
 * facts live in exactly one editable place.
 */

export interface EducationEntry {
  id: string
  institution: string
  location: string
  period: string
  degree: string
  field: string
  gpa: string
  activities: string
}

export const education: EducationEntry[] = [
  {
    id: 'edu-01',
    institution: 'Universitas Islam Darussalam Ciamis',
    location: 'Ciamis, Jawa Barat',
    period: 'Agustus 2020 – Desember 2025',
    degree: 'Sarjana Ekonomi (S1 Ekonomi)',
    field: 'Ekonomi Pembangunan',
    gpa: '3.49 / 4.00',
    activities:
      'Terlibat aktif dalam organisasi kemahasiswaan, komunitas eksternal kampus, serta program pengabdian masyarakat.',
  },
]
