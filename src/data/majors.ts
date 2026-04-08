import { Major } from "@/types/major";

/**
 * Vocational Majors Database
 * 20 popular SMK majors in Indonesia with realistic data
 * Salary data based on BPS and market research 2024-2025
 */
export const MAJORS: Major[] = [
  // ===== TEKNOLOGI INFORMASI =====
  {
    id: "rpl",
    name: "Rekayasa Perangkat Lunak",
    category: "TI",
    description:
      "Jurusan yang mempelajari pembuatan software, aplikasi mobile, dan website. Cocok untuk yang suka coding dan problem solving.",
    avgSalaryYear1: 4500000,
    avgSalaryYear5: 12000000,
    avgSalaryYear10: 25000000,
    skills: [
      "HTML/CSS/JavaScript",
      "React/Vue/Angular",
      "Node.js/Python",
      "Database (SQL/NoSQL)",
      "Git & Version Control",
      "API Development",
      "Problem Solving",
      "Agile/Scrum",
    ],
    careerRoadmap: [
      { year: 0, title: "Junior Developer", description: "Mulai karir sebagai programmer pemula", salary: 4500000 },
      { year: 2, title: "Mid-Level Developer", description: "Menangani project lebih kompleks", salary: 8000000 },
      { year: 5, title: "Senior Developer", description: "Lead technical decisions", salary: 12000000 },
      { year: 8, title: "Tech Lead / Architect", description: "Memimpin tim engineering", salary: 20000000 },
      { year: 10, title: "Engineering Manager / CTO", description: "Strategic technology leadership", salary: 25000000 },
    ],
    industries: ["Startup Tech", "E-commerce", "Fintech", "Perbankan", "Pemerintahan", "Konsultan IT"],
    scoreWeights: { TI: 5, TE: 1, BI: 2, KE: 0, SE: 1, PA: 0 },
  },
  {
    id: "tkj",
    name: "Teknik Komputer dan Jaringan",
    category: "TI",
    description:
      "Fokus pada infrastruktur IT, jaringan komputer, server, dan keamanan sistem. Cocok untuk yang suka hardware dan troubleshooting.",
    avgSalaryYear1: 4000000,
    avgSalaryYear5: 10000000,
    avgSalaryYear10: 18000000,
    skills: [
      "Networking (Cisco/MikroTik)",
      "Server Administration",
      "Cybersecurity",
      "Linux/Windows Server",
      "Cloud Computing (AWS/Azure)",
      "Troubleshooting",
      "Virtualization",
    ],
    careerRoadmap: [
      { year: 0, title: "IT Support", description: "Help desk dan troubleshooting", salary: 4000000 },
      { year: 2, title: "Network Administrator", description: "Kelola infrastruktur jaringan", salary: 7000000 },
      { year: 5, title: "System Engineer", description: "Design dan implement sistem", salary: 10000000 },
      { year: 8, title: "IT Manager", description: "Manage IT operations", salary: 15000000 },
      { year: 10, title: "IT Director / CISO", description: "Strategic IT leadership", salary: 18000000 },
    ],
    industries: ["Corporate", "Telekomunikasi", "Data Center", "ISP", "Bank", "Pemerintahan"],
    scoreWeights: { TI: 5, TE: 2, BI: 1, KE: 0, SE: 0, PA: 0 },
  },
  {
    id: "multimedia",
    name: "Multimedia",
    category: "TI",
    description:
      "Kombinasi teknologi dan kreativitas. Belajar video editing, animasi, desain grafis, dan produksi konten digital.",
    avgSalaryYear1: 3500000,
    avgSalaryYear5: 9000000,
    avgSalaryYear10: 15000000,
    skills: [
      "Adobe Premiere/After Effects",
      "Photoshop/Illustrator",
      "3D Modeling (Blender)",
      "Motion Graphics",
      "UI/UX Design",
      "Photography/Videography",
      "Content Creation",
    ],
    careerRoadmap: [
      { year: 0, title: "Junior Designer", description: "Desain grafis dan editing", salary: 3500000 },
      { year: 2, title: "Content Creator", description: "Produksi konten digital", salary: 6000000 },
      { year: 5, title: "Creative Lead", description: "Lead creative projects", salary: 9000000 },
      { year: 8, title: "Art Director", description: "Strategic creative direction", salary: 12000000 },
      { year: 10, title: "Creative Director", description: "Overall creative vision", salary: 15000000 },
    ],
    industries: ["Agency Kreatif", "Production House", "Media", "Startup", "E-commerce", "Content Creator"],
    scoreWeights: { TI: 3, TE: 0, BI: 1, KE: 0, SE: 4, PA: 1 },
  },
  {
    id: "animasi",
    name: "Animasi",
    category: "TI",
    description:
      "Spesialisasi dalam pembuatan animasi 2D/3D, game art, dan visual effects. Industri yang berkembang pesat di Indonesia.",
    avgSalaryYear1: 3800000,
    avgSalaryYear5: 10000000,
    avgSalaryYear10: 18000000,
    skills: [
      "2D/3D Animation",
      "Character Design",
      "Rigging & Modeling",
      "Unity/Unreal Engine",
      "Storyboarding",
      "VFX",
      "Game Development",
    ],
    careerRoadmap: [
      { year: 0, title: "Junior Animator", description: "Animasi karakter dan asset", salary: 3800000 },
      { year: 2, title: "3D Artist", description: "Modeling dan texturing", salary: 7000000 },
      { year: 5, title: "Senior Animator", description: "Complex animation projects", salary: 10000000 },
      { year: 8, title: "Animation Supervisor", description: "Lead animation team", salary: 15000000 },
      { year: 10, title: "Animation Director", description: "Creative direction", salary: 18000000 },
    ],
    industries: ["Game Studio", "Animation Studio", "Film Production", "Advertising", "Edtech"],
    scoreWeights: { TI: 3, TE: 0, BI: 0, KE: 0, SE: 5, PA: 0 },
  },

  // ===== TEKNIK & MANUFAKTUR =====
  {
    id: "teknik-mesin",
    name: "Teknik Mesin",
    category: "TE",
    description:
      "Mempelajari perancangan, pembuatan, dan perawatan mesin industri. Cocok untuk yang suka hands-on dan problem solving teknis.",
    avgSalaryYear1: 4200000,
    avgSalaryYear5: 9000000,
    avgSalaryYear10: 16000000,
    skills: [
      "CAD/CAM (AutoCAD, SolidWorks)",
      "CNC Programming",
      "Machining",
      "Welding",
      "Quality Control",
      "Maintenance",
      "Blueprint Reading",
    ],
    careerRoadmap: [
      { year: 0, title: "Operator Mesin", description: "Operasional mesin produksi", salary: 4200000 },
      { year: 2, title: "Technician", description: "Maintenance dan repair", salary: 6500000 },
      { year: 5, title: "Mechanical Engineer", description: "Design dan improvement", salary: 9000000 },
      { year: 8, title: "Production Manager", description: "Manage production line", salary: 13000000 },
      { year: 10, title: "Plant Manager", description: "Overall factory operations", salary: 16000000 },
    ],
    industries: ["Manufaktur", "Otomotif", "Oil & Gas", "Mining", "Construction", "FMCG"],
    scoreWeights: { TI: 1, TE: 5, BI: 1, KE: 0, SE: 0, PA: 0 },
  },
  {
    id: "teknik-otomotif",
    name: "Teknik Otomotif",
    category: "TE",
    description:
      "Spesialisasi kendaraan bermotor, dari motor hingga mobil. Industri yang selalu dibutuhkan dengan prospek cerah.",
    avgSalaryYear1: 3800000,
    avgSalaryYear5: 8000000,
    avgSalaryYear10: 14000000,
    skills: [
      "Engine Repair",
      "Electrical System",
      "Diagnostic Tools",
      "Body Repair",
      "Automotive Technology",
      "Customer Service",
    ],
    careerRoadmap: [
      { year: 0, title: "Mekanik", description: "Service dan repair kendaraan", salary: 3800000 },
      { year: 2, title: "Senior Mekanik", description: "Handle complex repairs", salary: 6000000 },
      { year: 5, title: "Workshop Supervisor", description: "Lead workshop team", salary: 8000000 },
      { year: 8, title: "Service Manager", description: "Manage service operations", salary: 11000000 },
      { year: 10, title: "Workshop Owner", description: "Own automotive business", salary: 14000000 },
    ],
    industries: ["Dealer Mobil/Motor", "Workshop", "Rental", "Logistik", "Mining"],
    scoreWeights: { TI: 0, TE: 5, BI: 1, KE: 0, SE: 0, PA: 0 },
  },
  {
    id: "teknik-elektro",
    name: "Teknik Elektro",
    category: "TE",
    description:
      "Fokus pada sistem kelistrikan, elektronika, dan instrumentasi. Dibutuhkan di hampir semua industri modern.",
    avgSalaryYear1: 4500000,
    avgSalaryYear5: 10000000,
    avgSalaryYear10: 17000000,
    skills: [
      "Electrical Wiring",
      "PLC Programming",
      "Control Systems",
      "Power Distribution",
      "Electronics",
      "Troubleshooting",
      "Safety Standards",
    ],
    careerRoadmap: [
      { year: 0, title: "Electrical Technician", description: "Instalasi dan maintenance", salary: 4500000 },
      { year: 2, title: "Electrician", description: "Complex electrical work", salary: 7000000 },
      { year: 5, title: "Electrical Engineer", description: "Design electrical systems", salary: 10000000 },
      { year: 8, title: "Electrical Supervisor", description: "Lead electrical team", salary: 14000000 },
      { year: 10, title: "Chief Electrical Engineer", description: "Strategic planning", salary: 17000000 },
    ],
    industries: ["Manufaktur", "Construction", "PLN", "Oil & Gas", "Mining", "Property"],
    scoreWeights: { TI: 2, TE: 5, BI: 0, KE: 0, SE: 0, PA: 0 },
  },
  {
    id: "teknik-las",
    name: "Teknik Pengelasan",
    category: "TE",
    description:
      "Keahlian khusus dalam pengelasan berbagai material. Skill yang sangat dicari dengan gaji kompetitif.",
    avgSalaryYear1: 4000000,
    avgSalaryYear5: 9000000,
    avgSalaryYear10: 15000000,
    skills: [
      "SMAW/GMAW/GTAW Welding",
      "Blueprint Reading",
      "Metal Fabrication",
      "Quality Inspection",
      "Safety Procedures",
      "Welding Certification",
    ],
    careerRoadmap: [
      { year: 0, title: "Welder", description: "Basic welding operations", salary: 4000000 },
      { year: 2, title: "Certified Welder", description: "Specialized welding", salary: 7000000 },
      { year: 5, title: "Welding Inspector", description: "Quality control", salary: 9000000 },
      { year: 8, title: "Welding Supervisor", description: "Lead welding team", salary: 12000000 },
      { year: 10, title: "Welding Engineer", description: "Process optimization", salary: 15000000 },
    ],
    industries: ["Shipbuilding", "Oil & Gas", "Construction", "Manufaktur", "Mining"],
    scoreWeights: { TI: 0, TE: 5, BI: 0, KE: 0, SE: 1, PA: 0 },
  },

  // ===== BISNIS & MANAJEMEN =====
  {
    id: "akuntansi",
    name: "Akuntansi dan Keuangan",
    category: "BI",
    description:
      "Mengelola pembukuan, laporan keuangan, dan perpajakan. Dibutuhkan di semua jenis bisnis dan organisasi.",
    avgSalaryYear1: 4000000,
    avgSalaryYear5: 9000000,
    avgSalaryYear10: 16000000,
    skills: [
      "Financial Accounting",
      "Tax Regulation",
      "Excel Advanced",
      "Accounting Software",
      "Financial Analysis",
      "Auditing",
      "Reporting",
    ],
    careerRoadmap: [
      { year: 0, title: "Junior Accountant", description: "Data entry dan pembukuan", salary: 4000000 },
      { year: 2, title: "Staff Accountant", description: "Laporan keuangan", salary: 6500000 },
      { year: 5, title: "Senior Accountant", description: "Complex accounting", salary: 9000000 },
      { year: 8, title: "Accounting Manager", description: "Lead accounting team", salary: 13000000 },
      { year: 10, title: "Finance Director", description: "Strategic financial planning", salary: 16000000 },
    ],
    industries: ["Corporate", "KAP", "Perbankan", "Startup", "Pemerintahan", "Konsultan"],
    scoreWeights: { TI: 1, TE: 0, BI: 5, KE: 0, SE: 0, PA: 0 },
  },
  {
    id: "pemasaran",
    name: "Pemasaran (Marketing)",
    category: "BI",
    description:
      "Strategi penjualan, branding, dan promosi produk. Era digital membuat marketing semakin menarik dan dinamis.",
    avgSalaryYear1: 3800000,
    avgSalaryYear5: 10000000,
    avgSalaryYear10: 18000000,
    skills: [
      "Digital Marketing",
      "Social Media Management",
      "Content Marketing",
      "SEO/SEM",
      "Market Research",
      "Sales Strategy",
      "Communication",
    ],
    careerRoadmap: [
      { year: 0, title: "Marketing Staff", description: "Execute marketing campaigns", salary: 3800000 },
      { year: 2, title: "Digital Marketer", description: "Online marketing specialist", salary: 7000000 },
      { year: 5, title: "Marketing Manager", description: "Lead marketing strategy", salary: 10000000 },
      { year: 8, title: "Brand Manager", description: "Brand development", salary: 15000000 },
      { year: 10, title: "CMO", description: "Chief Marketing Officer", salary: 18000000 },
    ],
    industries: ["E-commerce", "FMCG", "Startup", "Agency", "Retail", "Media"],
    scoreWeights: { TI: 1, TE: 0, BI: 5, KE: 0, SE: 2, PA: 2 },
  },
  {
    id: "otkp",
    name: "Otomatisasi Tata Kelola Perkantoran",
    category: "BI",
    description:
      "Administrasi perkantoran modern dengan teknologi. Backbone dari operasional perusahaan yang efisien.",
    avgSalaryYear1: 3500000,
    avgSalaryYear5: 7000000,
    avgSalaryYear10: 12000000,
    skills: [
      "Office Administration",
      "Microsoft Office Suite",
      "Document Management",
      "Communication",
      "Time Management",
      "Customer Service",
      "Data Entry",
    ],
    careerRoadmap: [
      { year: 0, title: "Admin Staff", description: "General office administration", salary: 3500000 },
      { year: 2, title: "Executive Assistant", description: "Support management", salary: 5500000 },
      { year: 5, title: "Office Manager", description: "Manage office operations", salary: 7000000 },
      { year: 8, title: "Operations Manager", description: "Operational efficiency", salary: 10000000 },
      { year: 10, title: "General Manager", description: "Overall management", salary: 12000000 },
    ],
    industries: ["Corporate", "Pemerintahan", "Startup", "Konsultan", "Semua Industri"],
    scoreWeights: { TI: 1, TE: 0, BI: 5, KE: 0, SE: 0, PA: 1 },
  },
  {
    id: "bdp",
    name: "Bisnis Daring dan Pemasaran",
    category: "BI",
    description:
      "Fokus pada e-commerce dan bisnis online. Jurusan yang sangat relevan dengan era digital saat ini.",
    avgSalaryYear1: 3500000,
    avgSalaryYear5: 11000000,
    avgSalaryYear10: 20000000,
    skills: [
      "E-commerce Management",
      "Marketplace Optimization",
      "Digital Advertising",
      "Analytics",
      "Dropshipping",
      "Customer Acquisition",
      "Conversion Optimization",
    ],
    careerRoadmap: [
      { year: 0, title: "E-commerce Staff", description: "Manage online store", salary: 3500000 },
      { year: 2, title: "Marketplace Specialist", description: "Optimize sales channels", salary: 6500000 },
      { year: 5, title: "E-commerce Manager", description: "Lead online business", salary: 11000000 },
      { year: 8, title: "Growth Manager", description: "Scale online business", salary: 16000000 },
      { year: 10, title: "E-commerce Director", description: "Strategic digital business", salary: 20000000 },
    ],
    industries: ["E-commerce", "Startup", "Retail", "FMCG", "Marketplace"],
    scoreWeights: { TI: 2, TE: 0, BI: 5, KE: 0, SE: 1, PA: 1 },
  },

  // ===== KESEHATAN =====
  {
    id: "keperawatan",
    name: "Keperawatan",
    category: "KE",
    description:
      "Merawat dan membantu pasien dengan profesional. Profesi mulia yang selalu dibutuhkan masyarakat.",
    avgSalaryYear1: 4000000,
    avgSalaryYear5: 8000000,
    avgSalaryYear10: 13000000,
    skills: [
      "Patient Care",
      "Medical Procedures",
      "Health Assessment",
      "Emergency Response",
      "Communication",
      "Empathy",
      "Medical Records",
    ],
    careerRoadmap: [
      { year: 0, title: "Perawat Pelaksana", description: "Direct patient care", salary: 4000000 },
      { year: 2, title: "Perawat Klinik", description: "Specialized nursing", salary: 6000000 },
      { year: 5, title: "Perawat Senior", description: "Lead nursing team", salary: 8000000 },
      { year: 8, title: "Kepala Ruangan", description: "Ward management", salary: 10000000 },
      { year: 10, title: "Supervisor Keperawatan", description: "Nursing operations", salary: 13000000 },
    ],
    industries: ["Rumah Sakit", "Klinik", "Puskesmas", "Home Care", "Corporate Health"],
    scoreWeights: { TI: 0, TE: 0, BI: 1, KE: 5, SE: 0, PA: 2 },
  },
  {
    id: "farmasi",
    name: "Farmasi Klinis dan Komunitas",
    category: "KE",
    description:
      "Ahli obat-obatan dan kesehatan masyarakat. Peran penting dalam sistem kesehatan Indonesia.",
    avgSalaryYear1: 4200000,
    avgSalaryYear5: 9000000,
    avgSalaryYear10: 15000000,
    skills: [
      "Pharmaceutical Knowledge",
      "Drug Dispensing",
      "Patient Counseling",
      "Inventory Management",
      "Regulatory Compliance",
      "Quality Control",
    ],
    careerRoadmap: [
      { year: 0, title: "Asisten Apoteker", description: "Pharmacy operations", salary: 4200000 },
      { year: 2, title: "Teknisi Farmasi", description: "Medication management", salary: 6500000 },
      { year: 5, title: "Supervisor Farmasi", description: "Lead pharmacy team", salary: 9000000 },
      { year: 8, title: "Pharmacy Manager", description: "Manage pharmacy operations", salary: 12000000 },
      { year: 10, title: "Pharmacy Owner", description: "Own pharmacy business", salary: 15000000 },
    ],
    industries: ["Apotek", "Rumah Sakit", "Distributor Farmasi", "Industri Farmasi", "Pemerintahan"],
    scoreWeights: { TI: 0, TE: 0, BI: 2, KE: 5, SE: 0, PA: 0 },
  },
  {
    id: "analis-kesehatan",
    name: "Analis Kesehatan",
    category: "KE",
    description:
      "Melakukan pemeriksaan laboratorium untuk diagnosis penyakit. Peran krusial dalam dunia medis.",
    avgSalaryYear1: 3800000,
    avgSalaryYear5: 8000000,
    avgSalaryYear10: 13000000,
    skills: [
      "Laboratory Techniques",
      "Medical Equipment",
      "Sample Analysis",
      "Quality Control",
      "Data Recording",
      "Safety Procedures",
    ],
    careerRoadmap: [
      { year: 0, title: "Analis Junior", description: "Basic lab testing", salary: 3800000 },
      { year: 2, title: "Analis Kesehatan", description: "Complex testing", salary: 6000000 },
      { year: 5, title: "Senior Analis", description: "Specialized analysis", salary: 8000000 },
      { year: 8, title: "Supervisor Lab", description: "Lead lab operations", salary: 11000000 },
      { year: 10, title: "Lab Manager", description: "Manage laboratory", salary: 13000000 },
    ],
    industries: ["Rumah Sakit", "Laboratorium Klinik", "Puskesmas", "Research", "Industri Farmasi"],
    scoreWeights: { TI: 1, TE: 1, BI: 1, KE: 5, SE: 0, PA: 0 },
  },

  // ===== SENI & KREATIF =====
  {
    id: "dkv",
    name: "Desain Komunikasi Visual",
    category: "SE",
    description:
      "Desain grafis, branding, dan komunikasi visual. Industri kreatif yang terus berkembang pesat.",
    avgSalaryYear1: 3500000,
    avgSalaryYear5: 10000000,
    avgSalaryYear10: 18000000,
    skills: [
      "Adobe Creative Suite",
      "Typography",
      "Branding",
      "Layout Design",
      "Illustration",
      "UI/UX Design",
      "Print & Digital Design",
    ],
    careerRoadmap: [
      { year: 0, title: "Junior Designer", description: "Basic design work", salary: 3500000 },
      { year: 2, title: "Graphic Designer", description: "Professional design projects", salary: 6500000 },
      { year: 5, title: "Senior Designer", description: "Lead design projects", salary: 10000000 },
      { year: 8, title: "Art Director", description: "Creative direction", salary: 15000000 },
      { year: 10, title: "Creative Director", description: "Overall creative vision", salary: 18000000 },
    ],
    industries: ["Agency Kreatif", "Startup", "Media", "E-commerce", "Advertising", "Freelance"],
    scoreWeights: { TI: 2, TE: 0, BI: 1, KE: 0, SE: 5, PA: 1 },
  },
  {
    id: "tata-busana",
    name: "Tata Busana (Fashion Design)",
    category: "SE",
    description:
      "Desain dan produksi pakaian. Industri fashion Indonesia yang semakin go international.",
    avgSalaryYear1: 3200000,
    avgSalaryYear5: 8000000,
    avgSalaryYear10: 15000000,
    skills: [
      "Fashion Design",
      "Pattern Making",
      "Sewing Techniques",
      "Textile Knowledge",
      "Fashion Illustration",
      "Trend Forecasting",
    ],
    careerRoadmap: [
      { year: 0, title: "Fashion Assistant", description: "Support design process", salary: 3200000 },
      { year: 2, title: "Fashion Designer", description: "Create fashion collections", salary: 5500000 },
      { year: 5, title: "Senior Designer", description: "Lead fashion projects", salary: 8000000 },
      { year: 8, title: "Head Designer", description: "Brand creative direction", salary: 12000000 },
      { year: 10, title: "Fashion Brand Owner", description: "Own fashion business", salary: 15000000 },
    ],
    industries: ["Fashion Brand", "Garment Industry", "Boutique", "Retail", "E-commerce"],
    scoreWeights: { TI: 0, TE: 1, BI: 2, KE: 0, SE: 5, PA: 1 },
  },

  // ===== PARIWISATA & HOSPITALITY =====
  {
    id: "perhotelan",
    name: "Perhotelan (Hotel Management)",
    category: "PA",
    description:
      "Manajemen hotel dan akomodasi. Industri pariwisata Indonesia yang terus tumbuh.",
    avgSalaryYear1: 3500000,
    avgSalaryYear5: 8000000,
    avgSalaryYear10: 15000000,
    skills: [
      "Guest Service",
      "Front Office Operations",
      "Housekeeping Management",
      "F&B Service",
      "Hotel Systems",
      "Communication",
      "Problem Solving",
    ],
    careerRoadmap: [
      { year: 0, title: "Front Office Staff", description: "Guest check-in/out", salary: 3500000 },
      { year: 2, title: "Supervisor", description: "Lead hotel operations", salary: 5500000 },
      { year: 5, title: "Department Manager", description: "Manage hotel department", salary: 8000000 },
      { year: 8, title: "Assistant Manager", description: "Support hotel management", salary: 12000000 },
      { year: 10, title: "Hotel Manager", description: "Overall hotel operations", salary: 15000000 },
    ],
    industries: ["Hotel", "Resort", "Villa", "Apartemen", "Event Venue"],
    scoreWeights: { TI: 0, TE: 0, BI: 3, KE: 0, SE: 1, PA: 5 },
  },
  {
    id: "tata-boga",
    name: "Tata Boga (Culinary Arts)",
    category: "PA",
    description:
      "Seni kuliner dan manajemen dapur. Peluang karir dari chef hingga food entrepreneur.",
    avgSalaryYear1: 3200000,
    avgSalaryYear5: 9000000,
    avgSalaryYear10: 18000000,
    skills: [
      "Cooking Techniques",
      "Food Presentation",
      "Menu Planning",
      "Kitchen Management",
      "Food Safety",
      "Cost Control",
      "Creativity",
    ],
    careerRoadmap: [
      { year: 0, title: "Commis Chef", description: "Basic kitchen operations", salary: 3200000 },
      { year: 2, title: "Chef de Partie", description: "Station chef", salary: 5500000 },
      { year: 5, title: "Sous Chef", description: "Second in command", salary: 9000000 },
      { year: 8, title: "Head Chef", description: "Lead kitchen operations", salary: 14000000 },
      { year: 10, title: "Executive Chef / Restaurant Owner", description: "Culinary leadership", salary: 18000000 },
    ],
    industries: ["Restaurant", "Hotel", "Catering", "Food Startup", "Culinary School"],
    scoreWeights: { TI: 0, TE: 1, BI: 2, KE: 1, SE: 3, PA: 5 },
  },
  {
    id: "usaha-perjalanan",
    name: "Usaha Perjalanan Wisata",
    category: "PA",
    description:
      "Manajemen tour dan travel. Industri pariwisata yang menjanjikan di Indonesia.",
    avgSalaryYear1: 3300000,
    avgSalaryYear5: 7500000,
    avgSalaryYear10: 14000000,
    skills: [
      "Tour Planning",
      "Customer Service",
      "Destination Knowledge",
      "Ticketing Systems",
      "Communication",
      "Sales",
      "Problem Solving",
    ],
    careerRoadmap: [
      { year: 0, title: "Tour Consultant", description: "Handle tour bookings", salary: 3300000 },
      { year: 2, title: "Tour Leader", description: "Lead tour groups", salary: 5500000 },
      { year: 5, title: "Tour Manager", description: "Manage tour operations", salary: 7500000 },
      { year: 8, title: "Operations Manager", description: "Overall tour business", salary: 11000000 },
      { year: 10, title: "Travel Agency Owner", description: "Own travel business", salary: 14000000 },
    ],
    industries: ["Travel Agency", "Tour Operator", "Airlines", "Online Travel", "Destination Management"],
    scoreWeights: { TI: 1, TE: 0, BI: 3, KE: 0, SE: 1, PA: 5 },
  },
];

/**
 * Get major by ID
 */
export function getMajorById(id: string): Major | undefined {
  return MAJORS.find((major) => major.id === id);
}

/**
 * Get majors by category
 */
export function getMajorsByCategory(category: string): Major[] {
  return MAJORS.filter((major) => major.category === category);
}

/**
 * Search majors by name or description
 */
export function searchMajors(query: string): Major[] {
  const lowerQuery = query.toLowerCase();
  return MAJORS.filter(
    (major) =>
      major.name.toLowerCase().includes(lowerQuery) ||
      major.description.toLowerCase().includes(lowerQuery)
  );
}
