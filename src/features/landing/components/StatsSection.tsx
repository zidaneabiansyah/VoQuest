"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItemProps {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function StatItem({ value, label, suffix = "", delay = 0 }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count.toLocaleString("id-ID")}
        {suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
        {label}
      </div>
    </motion.div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Kenapa Memilih Jalur Vokasi?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <StatItem value={142} label="Jurusan SMK di Indonesia" delay={0.1} />
          <StatItem value={85} label="Tingkat Penyerapan Kerja" suffix="%" delay={0.2} />
          <StatItem value={12} label="Rata-rata Gaji Awal (Juta/Bulan)" delay={0.3} />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-gray-600 dark:text-gray-300 mt-12 max-w-3xl mx-auto"
        >
          Lulusan SMK memiliki keunggulan kompetitif dengan skill praktis yang langsung dibutuhkan
          industri. Dengan memilih jurusan yang tepat, peluang sukses karirmu semakin besar.
        </motion.p>
      </div>
    </section>
  );
}
