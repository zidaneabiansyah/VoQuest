/**
 * PDF Generation Utilities
 * Simple HTML-to-PDF conversion for result download
 */

import { Major } from "@/types/major";
import { formatSalary } from "./scoring";

/**
 * Generate PDF content as HTML string
 */
export function generateResultHTML(major: Major, matchPercentage: number): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>VoQuest - Hasil Quiz Karir</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Arial', sans-serif;
      line-height: 1.6;
      color: #1e293b;
      padding: 40px;
      max-width: 800px;
      margin: 0 auto;
    }
    .header {
      text-align: center;
      margin-bottom: 40px;
      padding-bottom: 20px;
      border-bottom: 3px solid #0d9488;
    }
    .logo {
      font-size: 32px;
      font-weight: bold;
      color: #0d9488;
      margin-bottom: 10px;
    }
    .subtitle {
      color: #64748b;
      font-size: 14px;
    }
    .match-badge {
      display: inline-block;
      background: #0d9488;
      color: white;
      padding: 8px 20px;
      border-radius: 20px;
      font-weight: bold;
      margin: 20px 0;
    }
    .section {
      margin-bottom: 30px;
    }
    .section-title {
      font-size: 20px;
      font-weight: bold;
      color: #0d9488;
      margin-bottom: 15px;
      padding-bottom: 10px;
      border-bottom: 2px solid #e2e8f0;
    }
    .major-name {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 10px;
    }
    .category {
      display: inline-block;
      background: #f1f5f9;
      padding: 4px 12px;
      border-radius: 12px;
      font-size: 12px;
      color: #475569;
      margin-bottom: 15px;
    }
    .description {
      color: #475569;
      margin-bottom: 20px;
    }
    .salary-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      margin: 20px 0;
    }
    .salary-box {
      background: #f8fafc;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
    }
    .salary-label {
      font-size: 12px;
      color: #64748b;
      margin-bottom: 5px;
    }
    .salary-value {
      font-size: 16px;
      font-weight: bold;
      color: #0d9488;
    }
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin: 15px 0;
    }
    .skill-item {
      background: #f1f5f9;
      padding: 8px 12px;
      border-radius: 6px;
      font-size: 14px;
    }
    .roadmap-item {
      display: flex;
      gap: 15px;
      margin-bottom: 15px;
      padding: 15px;
      background: #f8fafc;
      border-radius: 8px;
    }
    .roadmap-year {
      background: #0d9488;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      flex-shrink: 0;
    }
    .roadmap-content {
      flex: 1;
    }
    .roadmap-title {
      font-weight: bold;
      margin-bottom: 5px;
    }
    .roadmap-desc {
      font-size: 14px;
      color: #64748b;
    }
    .industries {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 15px 0;
    }
    .industry-tag {
      background: #e0f2fe;
      color: #0369a1;
      padding: 6px 12px;
      border-radius: 6px;
      font-size: 13px;
    }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #e2e8f0;
      text-align: center;
      color: #64748b;
      font-size: 12px;
    }
    @media print {
      body {
        padding: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="logo">🧭 VoQuest</div>
    <div class="subtitle">Hasil Quiz Karir Vokasi</div>
    <div class="match-badge">${matchPercentage}% Match</div>
  </div>

  <div class="section">
    <div class="major-name">${major.name}</div>
    <div class="category">${getCategoryName(major.category)}</div>
    <div class="description">${major.description}</div>
  </div>

  <div class="section">
    <div class="section-title">💰 Proyeksi Gaji</div>
    <div class="salary-grid">
      <div class="salary-box">
        <div class="salary-label">Tahun 1</div>
        <div class="salary-value">${formatSalary(major.avgSalaryYear1)}</div>
      </div>
      <div class="salary-box">
        <div class="salary-label">Tahun 5</div>
        <div class="salary-value">${formatSalary(major.avgSalaryYear5)}</div>
      </div>
      <div class="salary-box">
        <div class="salary-label">Tahun 10</div>
        <div class="salary-value">${formatSalary(major.avgSalaryYear10)}</div>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="section-title">🎯 Skill yang Dipelajari</div>
    <div class="skills-grid">
      ${major.skills.map(skill => `<div class="skill-item">✓ ${skill}</div>`).join('')}
    </div>
  </div>

  <div class="section">
    <div class="section-title">🗺️ Roadmap Karir</div>
    ${major.careerRoadmap.map(milestone => `
      <div class="roadmap-item">
        <div class="roadmap-year">${milestone.year === 0 ? '1' : milestone.year}</div>
        <div class="roadmap-content">
          <div class="roadmap-title">${milestone.title}</div>
          <div class="roadmap-desc">${milestone.description}</div>
        </div>
      </div>
    `).join('')}
  </div>

  <div class="section">
    <div class="section-title">🏢 Industri Terkait</div>
    <div class="industries">
      ${major.industries.map(industry => `<div class="industry-tag">${industry}</div>`).join('')}
    </div>
  </div>

  <div class="footer">
    <p>Dokumen ini dibuat oleh VoQuest - Platform Quiz Karir Vokasi</p>
    <p>Tanggal: ${new Date().toLocaleDateString('id-ID', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })}</p>
    <p style="margin-top: 10px;">
      <strong>Disclaimer:</strong> Proyeksi gaji dan informasi karir bersifat estimasi berdasarkan data pasar.
      Hasil aktual dapat bervariasi tergantung lokasi, perusahaan, dan performa individu.
    </p>
  </div>
</body>
</html>
  `;
}

function getCategoryName(code: string): string {
  const categories: Record<string, string> = {
    TI: "Teknologi Informasi",
    TE: "Teknik & Manufaktur",
    BI: "Bisnis & Manajemen",
    KE: "Kesehatan",
    SE: "Seni & Kreatif",
    PA: "Pariwisata & Hospitality",
  };
  return categories[code] || code;
}

/**
 * Download HTML as PDF using browser print
 */
export function downloadResultAsPDF(major: Major, matchPercentage: number) {
  const html = generateResultHTML(major, matchPercentage);
  
  // Create a new window with the HTML content
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Popup diblokir! Mohon izinkan popup untuk download PDF.');
    return;
  }

  printWindow.document.write(html);
  printWindow.document.close();

  // Wait for content to load, then trigger print
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print();
    }, 250);
  };
}
