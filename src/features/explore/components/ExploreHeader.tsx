"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export function ExploreHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mb-6"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Kembali ke Beranda
      </Link>

      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
          <MagnifyingGlassIcon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">Jelajahi Jurusan</h1>
          <p className="text-gray-600 dark:text-gray-300">
            Temukan jurusan SMK yang sesuai dengan minatmu
          </p>
        </div>
      </div>
    </motion.div>
  );
}
