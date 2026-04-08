"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import {
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: ClipboardDocumentCheckIcon,
    title: "Quiz Interaktif",
    description: "18 pertanyaan yang dirancang untuk mengenali kepribadian, minat, dan gaya kerjamu",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: ChartBarIcon,
    title: "Proyeksi Gaji",
    description: "Lihat estimasi penghasilan dari tahun pertama hingga 10 tahun ke depan",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MapIcon,
    title: "Roadmap Karir",
    description: "Timeline visual perjalanan karirmu dari lulus SMK hingga menjadi expert",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: SparklesIcon,
    title: "RPG Skill Tree",
    description: "Skill tree bergaya game yang menunjukkan kemampuan yang perlu dikuasai",
    color: "from-amber-500 to-amber-600",
  },
];

export function FeaturePreview() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Fitur yang Membantumu
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Platform lengkap dengan visualisasi menarik untuk membantu kamu menemukan jalur karir yang tepat
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover className="p-6 h-full">
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
