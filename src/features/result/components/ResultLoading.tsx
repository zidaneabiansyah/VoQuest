"use client";

import { motion } from "framer-motion";
import { MapIcon } from "@heroicons/react/24/outline";

/**
 * Dramatic loading animation with rotating compass
 */
export function ResultLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary/10 via-white to-accent/10 dark:from-primary/20 dark:via-dark-bg dark:to-accent/20">
      <div className="text-center">
        {/* Rotating Compass */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="inline-block mb-8"
        >
          <MapIcon className="w-24 h-24 text-primary" />
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Menganalisis Jawabanmu...
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            Kompas karir sedang mencari arah terbaikmu
          </p>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
                className="w-3 h-3 rounded-full bg-primary"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
