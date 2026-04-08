"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MapIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Compass Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 text-primary"
            >
              <MapIcon className="w-full h-full" />
            </motion.div>
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          </div>
        </motion.div>

        {/* Typewriter Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          VoQuest
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
        >
          Temukan Jalur Karir Vokasi yang Tepat Untukmu
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Platform interaktif berbasis quiz yang membantu siswa SMA/SMK menemukan jurusan vokasi
          sesuai kepribadian, minat, dan gaya kerja mereka.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <Link href="/quiz">
            <Button size="lg" className="text-lg px-8 py-4 shadow-lg hover:shadow-xl">
              Mulai Perjalananmu
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
