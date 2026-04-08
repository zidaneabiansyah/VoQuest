/**
 * SEO Metadata Utilities
 * Centralized metadata generation for better SEO
 */

import { Metadata } from "next";

const siteConfig = {
  name: "VoQuest",
  title: "VoQuest - Temukan Jalur Karir Vokasi yang Tepat",
  description:
    "Platform interaktif berbasis quiz yang membantu siswa SMA/SMK menemukan jurusan vokasi sesuai kepribadian, minat, dan gaya kerja mereka. Gratis, tanpa registrasi, hasil instan.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://voquest.vercel.app/",
  ogImage: "/og-image.png",
  keywords: [
    "vokasi",
    "SMK",
    "karir",
    "jurusan",
    "quiz karir",
    "pendidikan vokasi",
    "tes minat bakat",
    "jurusan SMK",
    "pilihan karir",
    "roadmap karir",
    "gaji SMK",
    "prospek kerja SMK",
  ],
  author: "VoQuest Team",
  creator: "VoQuest",
  publisher: "VoQuest",
};

export function generateMetadata({
  title,
  description,
  image,
  url,
  keywords,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const metaDescription = description || siteConfig.description;
  const metaImage = image || siteConfig.ogImage;
  const metaUrl = url ? `${siteConfig.url}${url}` : siteConfig.url;
  const metaKeywords = keywords
    ? [...siteConfig.keywords, ...keywords]
    : siteConfig.keywords;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    robots: noIndex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    openGraph: {
      type: "website",
      locale: "id_ID",
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@voquest",
    },
    alternates: {
      canonical: metaUrl,
    },
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}

/**
 * Generate JSON-LD structured data for better SEO
 */
export function generateStructuredData(type: "website" | "quiz" | "article", data?: any) {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type === "website" ? "WebSite" : type === "quiz" ? "Quiz" : "Article",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
  };

  if (type === "website") {
    return {
      ...baseData,
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/explore?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    };
  }

  if (type === "quiz") {
    return {
      ...baseData,
      "@type": "Quiz",
      about: {
        "@type": "Thing",
        name: "Vocational Career Assessment",
        description: "Interactive quiz to find the right vocational major",
      },
      educationalLevel: "Secondary Education",
      inLanguage: "id-ID",
      isAccessibleForFree: true,
    };
  }

  return { ...baseData, ...data };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbData(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQData(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export { siteConfig };
