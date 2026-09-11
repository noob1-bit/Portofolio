/**
 * CANONICAL CONTENT LAYER — EXPERIENCE
 * Source: content/source/CV_Muhammad_Syafrudin_Hilmi.pdf
 * Work and organizational experience are kept distinguishable via `kind`.
 * Responsibilities are transcribed verbatim from the CV.
 */

export interface ExperienceMetric {
  value: string
  label: string
  tone: 'default' | 'accent' | 'primary' | 'fixed'
}

export interface ExperienceEntry {
  id: string
  kind: 'work' | 'organization'
  role: string
  organization: string
  orgTone: 'primary' | 'secondary'
  period: string
  location: string
  summary: string
  badge?: string
  metrics?: ExperienceMetric[]
  highlights: string[]
  techStack: string[]
  current?: boolean
}

export const experience: ExperienceEntry[] = [
  {
    id: 'exp-01',
    kind: 'work',
    role: 'Admin & Personal Assistant',
    organization: 'PT. Ide Diconic Indonesia',
    orgTone: 'primary',
    period: 'Juni 2026 – Sekarang',
    location: 'Ciamis, Jawa Barat',
    summary: 'Admin & Personal Assistant at PT. Ide Diconic Indonesia (Juni 2026 – Sekarang).',
    badge: 'CURRENT TENURE',
    highlights: [
      'Menyusun, memperbarui, dan memelihara buku panduan (manual book) proyek guna memastikan standardisasi operasional tim.',
      'Melakukan pemeriksaan kualitas (quality control) terhadap seluruh dokumen proyek untuk menjaga akurasi dan integritas data.',
      'Mengelola administrasi operasional harian manajemen, termasuk menyusun notulensi rapat (minutes of meetings) klien secara presisi.',
      'Memproses penginputan data operasional dan mengelola berkas komersial seperti invoice, quotation, proposal, serta melakukan pelacakan pajak.',
    ],
    techStack: ['Manual Book', 'Invoice', 'Quotation', 'Proposal'],
    current: true,
  },
  {
    id: 'exp-02',
    kind: 'work',
    role: 'Editor',
    organization: 'Savisi Media Network',
    orgTone: 'secondary',
    period: 'Februari 2023 – Februari 2024',
    location: 'Ciamis, Jawa Barat',
    summary: 'Editor at Savisi Media Network (Februari 2023 – Februari 2024).',
    highlights: [
      'Mengatur operasional situs web dan mengelola jadwal publikasi secara konsisten untuk mempertahankan traffic dan ketepatan waktu rilis.',
      'Memproduksi, menyunting, dan mengurasi konten berita digital sesuai dengan standar editorial dan kode etik jurnalistik.',
      'Mengorganisir basis data publikasi media serta menyusun laporan performa konten secara berkala sebagai bahan evaluasi tim.',
    ],
    techStack: ['Website Management', 'Konten Digital', 'Laporan Performa'],
  },
  {
    id: 'exp-03',
    kind: 'organization',
    role: 'Direktur Utama',
    organization: 'Lembaga Pers Mahasiswa Islam (LAPMI) Cabang Ciamis',
    orgTone: 'secondary',
    period: 'November 2023 – November 2024',
    location: 'Ciamis, Jawa Barat',
    summary: 'Direktur Utama at Lembaga Pers Mahasiswa Islam (LAPMI) Cabang Ciamis (November 2023 – November 2024).',
    badge: 'ORGANISASI',
    highlights: [
      'Memimpin dan mengawasi seluruh operasional organisasi serta menetapkan arah strategi editorial media pers mahasiswa.',
      'Mengkoordinasikan program kerja antar divisi dan bertanggung jawab penuh dalam pengambilan keputusan strategis organisasi.',
    ],
    techStack: ['Kepemimpinan', 'Strategi Editorial'],
  },
  {
    id: 'exp-04',
    kind: 'organization',
    role: 'Sekretaris Bidang Pengembangan Anggota',
    organization: 'Himpunan Mahasiswa Islam (HMI) Cabang Ciamis',
    orgTone: 'secondary',
    period: 'November 2024 – November 2025',
    location: 'Ciamis, Jawa Barat',
    summary: 'Sekretaris Bidang Pengembangan Anggota at Himpunan Mahasiswa Islam (HMI) Cabang Ciamis (November 2024 – November 2025).',
    badge: 'ORGANISASI',
    highlights: [
      'Mengelola sistem administrasi, pengarsipan berkas, agenda internal, serta dokumentasi organisasi secara sistematis dan rapi.',
    ],
    techStack: ['Administrasi', 'Dokumentasi'],
  },
]
