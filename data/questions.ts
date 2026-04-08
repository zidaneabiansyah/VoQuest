import { QuizQuestion, QuizPhase } from "@/types/quiz";

/**
 * Quiz Questions Database
 * Total: 18 questions (6 per phase)
 */
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // ===== PHASE 1: PERSONALITY (6 Questions) =====
  {
    id: "p1-q1",
    phase: QuizPhase.PERSONALITY,
    question: "Bagaimana kamu biasanya menghabiskan waktu luang?",
    options: [
      {
        id: "p1-q1-a",
        text: "Berkumpul dengan banyak teman, ngobrol, atau ikut kegiatan sosial",
        scores: { BI: 2, PA: 3, SE: 1 },
      },
      {
        id: "p1-q1-b",
        text: "Sendiri atau dengan teman dekat, baca, main game, atau hobi pribadi",
        scores: { TI: 3, TE: 2, KE: 1 },
      },
    ],
  },
  {
    id: "p1-q2",
    phase: QuizPhase.PERSONALITY,
    question: "Ketika menghadapi masalah, kamu lebih suka...",
    options: [
      {
        id: "p1-q2-a",
        text: "Menganalisis dengan logika, data, dan fakta",
        scores: { TI: 3, TE: 2, BI: 2, KE: 1 },
      },
      {
        id: "p1-q2-b",
        text: "Menggunakan intuisi, kreativitas, dan perasaan",
        scores: { SE: 3, PA: 2, KE: 1 },
      },
    ],
  },
  {
    id: "p1-q3",
    phase: QuizPhase.PERSONALITY,
    question: "Dalam mengerjakan tugas, kamu lebih fokus pada...",
    options: [
      {
        id: "p1-q3-a",
        text: "Detail kecil, akurasi, dan kesempurnaan",
        scores: { TI: 2, TE: 3, BI: 2, KE: 2 },
      },
      {
        id: "p1-q3-b",
        text: "Gambaran besar, konsep, dan visi keseluruhan",
        scores: { SE: 2, PA: 2, BI: 3 },
      },
    ],
  },
  {
    id: "p1-q4",
    phase: QuizPhase.PERSONALITY,
    question: "Dalam kelompok, kamu biasanya...",
    options: [
      {
        id: "p1-q4-a",
        text: "Memimpin, mengatur, dan mengambil keputusan",
        scores: { BI: 3, PA: 2, SE: 1 },
      },
      {
        id: "p1-q4-b",
        text: "Melaksanakan tugas dengan baik dan mendukung tim",
        scores: { TI: 2, TE: 3, KE: 2 },
      },
    ],
  },
  {
    id: "p1-q5",
    phase: QuizPhase.PERSONALITY,
    question: "Kamu lebih nyaman bekerja dengan...",
    options: [
      {
        id: "p1-q5-a",
        text: "Orang - berkomunikasi, berinteraksi, membantu",
        scores: { PA: 3, BI: 2, KE: 3, SE: 1 },
      },
      {
        id: "p1-q5-b",
        text: "Data/Benda - komputer, mesin, alat, atau sistem",
        scores: { TI: 3, TE: 3, BI: 1 },
      },
    ],
  },
  {
    id: "p1-q6",
    phase: QuizPhase.PERSONALITY,
    question: "Kamu lebih suka pekerjaan yang...",
    options: [
      {
        id: "p1-q6-a",
        text: "Rutin, terstruktur, dan dapat diprediksi",
        scores: { BI: 2, TE: 2, KE: 2 },
      },
      {
        id: "p1-q6-b",
        text: "Dinamis, penuh tantangan baru, dan tidak monoton",
        scores: { TI: 2, SE: 3, PA: 2 },
      },
    ],
  },

  // ===== PHASE 2: INTEREST (6 Questions) =====
  {
    id: "p2-q1",
    phase: QuizPhase.INTEREST,
    question: "Bidang mana yang paling menarik perhatianmu?",
    options: [
      {
        id: "p2-q1-a",
        text: "Teknologi & Komputer - coding, website, aplikasi, game",
        scores: { TI: 5 },
      },
      {
        id: "p2-q1-b",
        text: "Bisnis & Ekonomi - jual beli, marketing, keuangan",
        scores: { BI: 5 },
      },
      {
        id: "p2-q1-c",
        text: "Seni & Desain - gambar, fashion, video, musik",
        scores: { SE: 5 },
      },
      {
        id: "p2-q1-d",
        text: "Kesehatan & Sains - medis, farmasi, laboratorium",
        scores: { KE: 5 },
      },
      {
        id: "p2-q1-e",
        text: "Teknik & Manufaktur - mesin, listrik, otomotif, bangunan",
        scores: { TE: 5 },
      },
      {
        id: "p2-q1-f",
        text: "Perhotelan & Pariwisata - kuliner, hotel, travel",
        scores: { PA: 5 },
      },
    ],
  },
  {
    id: "p2-q2",
    phase: QuizPhase.INTEREST,
    question: "Mata pelajaran favorit kamu di sekolah?",
    options: [
      {
        id: "p2-q2-a",
        text: "Matematika & Fisika",
        scores: { TI: 3, TE: 3, BI: 1 },
      },
      {
        id: "p2-q2-b",
        text: "Bahasa & Seni",
        scores: { SE: 3, PA: 2 },
      },
      {
        id: "p2-q2-c",
        text: "Biologi & Kimia",
        scores: { KE: 3, TE: 1 },
      },
      {
        id: "p2-q2-d",
        text: "Ekonomi & Akuntansi",
        scores: { BI: 3 },
      },
    ],
  },
  {
    id: "p2-q3",
    phase: QuizPhase.INTEREST,
    question: "Aktivitas mana yang paling kamu nikmati?",
    options: [
      {
        id: "p2-q3-a",
        text: "Membuat sesuatu dengan tangan (merakit, memperbaiki, crafting)",
        scores: { TE: 3, SE: 2 },
      },
      {
        id: "p2-q3-b",
        text: "Memecahkan puzzle, teka-teki, atau masalah logika",
        scores: { TI: 3, TE: 1 },
      },
      {
        id: "p2-q3-c",
        text: "Berkreasi (menggambar, desain, menulis, musik)",
        scores: { SE: 3, TI: 1 },
      },
      {
        id: "p2-q3-d",
        text: "Membantu orang lain atau merawat sesuatu",
        scores: { KE: 3, PA: 2 },
      },
    ],
  },
  {
    id: "p2-q4",
    phase: QuizPhase.INTEREST,
    question: "Konten online apa yang sering kamu tonton?",
    options: [
      {
        id: "p2-q4-a",
        text: "Tutorial coding, tech review, atau gaming",
        scores: { TI: 3 },
      },
      {
        id: "p2-q4-b",
        text: "Bisnis, motivasi, atau tips finansial",
        scores: { BI: 3 },
      },
      {
        id: "p2-q4-c",
        text: "Desain, fashion, atau konten kreatif",
        scores: { SE: 3 },
      },
      {
        id: "p2-q4-d",
        text: "Kuliner, travel, atau lifestyle",
        scores: { PA: 3 },
      },
    ],
  },
  {
    id: "p2-q5",
    phase: QuizPhase.INTEREST,
    question: "Jika punya waktu luang 3 bulan, kamu ingin belajar...",
    options: [
      {
        id: "p2-q5-a",
        text: "Membuat aplikasi atau website",
        scores: { TI: 4 },
      },
      {
        id: "p2-q5-b",
        text: "Memulai bisnis online atau jualan",
        scores: { BI: 4 },
      },
      {
        id: "p2-q5-c",
        text: "Desain grafis atau video editing",
        scores: { SE: 4 },
      },
      {
        id: "p2-q5-d",
        text: "Merakit atau memperbaiki kendaraan/elektronik",
        scores: { TE: 4 },
      },
    ],
  },
  {
    id: "p2-q6",
    phase: QuizPhase.INTEREST,
    question: "Proyek impian yang ingin kamu wujudkan?",
    options: [
      {
        id: "p2-q6-a",
        text: "Startup teknologi atau aplikasi viral",
        scores: { TI: 3, BI: 2 },
      },
      {
        id: "p2-q6-b",
        text: "Brand fashion atau produk kreatif sendiri",
        scores: { SE: 3, BI: 1 },
      },
      {
        id: "p2-q6-c",
        text: "Klinik atau layanan kesehatan masyarakat",
        scores: { KE: 3 },
      },
      {
        id: "p2-q6-d",
        text: "Restoran, cafe, atau bisnis hospitality",
        scores: { PA: 3, BI: 1 },
      },
    ],
  },

  // ===== PHASE 3: WORK STYLE & ENVIRONMENT (6 Questions) =====
  {
    id: "p3-q1",
    phase: QuizPhase.WORK_STYLE,
    question: "Kamu lebih suka bekerja...",
    options: [
      {
        id: "p3-q1-a",
        text: "Dalam tim besar dengan banyak kolaborasi",
        scores: { BI: 2, PA: 3, SE: 1 },
      },
      {
        id: "p3-q1-b",
        text: "Solo atau tim kecil dengan fokus mendalam",
        scores: { TI: 3, TE: 2, KE: 1 },
      },
    ],
  },
  {
    id: "p3-q2",
    phase: QuizPhase.WORK_STYLE,
    question: "Lingkungan kerja ideal kamu adalah...",
    options: [
      {
        id: "p3-q2-a",
        text: "Kantor dengan AC, meja, dan komputer",
        scores: { TI: 3, BI: 3, SE: 2 },
      },
      {
        id: "p3-q2-b",
        text: "Lapangan, workshop, atau bisa remote/mobile",
        scores: { TE: 3, PA: 2, KE: 1 },
      },
    ],
  },
  {
    id: "p3-q3",
    phase: QuizPhase.WORK_STYLE,
    question: "Jam kerja yang kamu inginkan...",
    options: [
      {
        id: "p3-q3-a",
        text: "Terstruktur 9-5, jelas kapan mulai dan selesai",
        scores: { BI: 2, TE: 2, KE: 2 },
      },
      {
        id: "p3-q3-b",
        text: "Fleksibel, bisa atur sendiri asal target tercapai",
        scores: { TI: 3, SE: 3, PA: 1 },
      },
    ],
  },
  {
    id: "p3-q4",
    phase: QuizPhase.WORK_STYLE,
    question: "Kamu lebih tertarik dengan karir yang...",
    options: [
      {
        id: "p3-q4-a",
        text: "Fokus di Indonesia, dekat keluarga dan komunitas lokal",
        scores: { TE: 2, PA: 2, KE: 2 },
      },
      {
        id: "p3-q4-b",
        text: "Punya peluang internasional, kerja di luar negeri",
        scores: { TI: 3, BI: 2, SE: 2 },
      },
    ],
  },
  {
    id: "p3-q5",
    phase: QuizPhase.WORK_STYLE,
    question: "Prioritas utama dalam karir?",
    options: [
      {
        id: "p3-q5-a",
        text: "Gaji stabil dan benefit jelas setiap bulan",
        scores: { BI: 2, TE: 2, KE: 3 },
      },
      {
        id: "p3-q5-b",
        text: "Potensi income tidak terbatas (freelance, bisnis, komisi)",
        scores: { TI: 2, SE: 3, PA: 2 },
      },
    ],
  },
  {
    id: "p3-q6",
    phase: QuizPhase.WORK_STYLE,
    question: "Definisi sukses bagimu adalah...",
    options: [
      {
        id: "p3-q6-a",
        text: "Pensiun nyaman, punya rumah, dan keluarga bahagia",
        scores: { BI: 2, TE: 2, KE: 2 },
      },
      {
        id: "p3-q6-b",
        text: "Memberikan impact besar ke masyarakat atau industri",
        scores: { TI: 2, SE: 2, PA: 2, KE: 3 },
      },
    ],
  },
];
