"use client";

import { ProgressBar } from "@/components/ui/ProgressBar";
import { motion } from "framer-motion";

interface QuizProgressProps {
  progress: number;
}

export function QuizProgress({ progress }: QuizProgressProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 }}
      className="mb-8"
    >
      <ProgressBar progress={progress} showLabel={true} />
    </motion.div>
  );
}
