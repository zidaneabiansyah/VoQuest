"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const testimonials = [
  {
    name: "Rafi Pratama",
    role: "Siswa SMA Negeri 1 Jakarta",
    content: "VoQuest membantu saya menemukan passion di bidang teknologi. Sekarang saya yakin untuk masuk jurusan RPL!",
    avatar: "RP",
  },
  {
    name: "Siti Nurhaliza",
    role: "Siswa SMK Negeri 2 Bandung",
    content: "Roadmap karir dan proyeksi gajinya sangat membantu. Orang tua saya jadi lebih mendukung pilihan jurusan saya.",
    avatar: "SN",
  },
  {
    name: "Budi Santoso",
    role: "Guru BK SMA Negeri 5 Surabaya",
    content: "Platform yang sangat membantu dalam sesi bimbingan konseling. Siswa jadi lebih antusias membahas masa depan mereka.",
    avatar: "BS",
  },
  {
    name: "Dewi Lestari",
    role: "Siswa SMP Negeri 3 Yogyakarta",
    content: "Quiz-nya seru dan hasilnya akurat! Saya jadi tahu jurusan mana yang cocok dengan kepribadian saya.",
    avatar: "DL",
  },
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 px-4 bg-linear-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apa Kata Mereka?
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Pengalaman pengguna yang telah menemukan jalur karir mereka
          </p>
        </motion.div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <Card className="p-8 md:p-12">
                  <div className="flex flex-col items-center text-center">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl mb-6">
                      {testimonials[currentIndex].avatar}
                    </div>

                    {/* Content */}
                    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                      "{testimonials[currentIndex].content}"
                    </p>

                    {/* Author */}
                    <div>
                      <p className="font-bold text-lg">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Previous testimonial"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`
                    w-2 h-2 rounded-full transition-all
                    ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-gray-300 dark:bg-gray-600"
                    }
                  `}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
              aria-label="Next testimonial"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
