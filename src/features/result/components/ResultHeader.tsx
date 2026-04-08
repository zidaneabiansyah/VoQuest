"use client";

import { motion } from "framer-motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export function ResultHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
      >
        <SparklesIcon className="w-8 h-8 text-primary" />
      </motion.div>

      <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
        Hasil Quiz Kamu!
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Berdasarkan kepribadian, minat, dan gaya kerjamu, kami menemukan jalur karir yang sempurna untukmu
      </p>
    </motion.div>
  );
}
