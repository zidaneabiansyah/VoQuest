"use client";

import Link from "next/link";
import { MapIcon } from "@heroicons/react/24/outline";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Beranda", href: "/" },
      { label: "Mulai Quiz", href: "/quiz" },
      { label: "Jelajahi Jurusan", href: "/explore" },
    ],
    about: [
      { label: "Tentang VoQuest", href: "#" },
      { label: "Cara Kerja", href: "#" },
      { label: "FAQ", href: "#" },
    ],
    legal: [
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
    ],
  };

  return (
    <footer className="bg-white dark:bg-secondary border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <MapIcon className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                VoQuest
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Platform interaktif berbasis quiz yang membantu siswa SMA/SMK menemukan jurusan vokasi sesuai kepribadian, minat, dan gaya kerja mereka.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              WA-FEST VORTEX 5.0 | 2026<br />
              Sekolah Vokasi Universitas Pakuan
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold mb-4">Produk</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-bold mb-4">Tentang</h3>
            <ul className="space-y-2">
              {links.about.map((link, index) => (
                <li key={`about-${index}`}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {currentYear} VoQuest. All rights reserved.
          </p>
          <div className="flex gap-6">
            {links.legal.map((link, index) => (
              <Link
                key={`legal-${index}`}
                href={link.href}
                className="text-sm text-gray-500 dark:text-gray-500 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
