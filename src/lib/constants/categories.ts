/**
 * Vocational Categories
 * Based on Indonesian SMK majors classification
 */
export const CATEGORIES = {
  TI: "Teknologi Informasi",
  TE: "Teknik & Manufaktur",
  BI: "Bisnis & Manajemen",
  KE: "Kesehatan",
  SE: "Seni & Kreatif",
  PA: "Pariwisata & Hospitality",
} as const;

export type CategoryCode = keyof typeof CATEGORIES;

export const CATEGORY_EXAMPLES = {
  TI: ["RPL", "Multimedia", "TKJ", "Animasi"],
  TE: ["Teknik Mesin", "Otomotif", "Elektro", "Las"],
  BI: ["Akuntansi", "Pemasaran", "OTKP", "BDP"],
  KE: ["Keperawatan", "Farmasi", "Analis Kesehatan"],
  SE: ["DKV", "Tata Busana", "Kriya", "Tata Kecantikan"],
  PA: ["Perhotelan", "Tata Boga", "Usaha Perjalanan"],
} as const;
