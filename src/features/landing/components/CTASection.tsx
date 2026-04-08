"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/solid";

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary via-primary to-accent p-12 md:p-16 text-center text-white"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6"
            >
              <SparklesIcon className="w-8 h-8" />
            </motion.div>

            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Siap Menemukan Jalur Karirmu?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Hanya butuh 5 menit untuk menemukan jurusan vokasi yang sempurna untukmu
            </p>

            <Link href="/quiz">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl text-lg px-8 py-4"
              >
                Mulai Quiz Sekarang
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

            <p className="mt-6 text-sm text-white/70">
              Gratis • Tanpa Registrasi • Hasil Instan
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
