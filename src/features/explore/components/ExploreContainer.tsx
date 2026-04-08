"use client";

import { useState, useMemo } from "react";
import { MAJORS } from "@/data/majors";
import { CategoryCode, CATEGORIES } from "@/lib/constants/categories";
import { ExploreHeader } from "./ExploreHeader";
import { ExploreFilters } from "./ExploreFilters";
import { ExploreMajorCard } from "./ExploreMajorCard";
import { MajorDetailModal } from "./MajorDetailModal";
import { Major } from "@/types/major";
import { motion } from "framer-motion";

type SortOption = "name" | "salary-asc" | "salary-desc";

export function ExploreContainer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<CategoryCode | "all">("all");
  const [sortBy, setSortBy] = useState<SortOption>("name");
  const [selectedMajor, setSelectedMajor] = useState<Major | null>(null);

  // Filter and sort majors
  const filteredMajors = useMemo(() => {
    let result = MAJORS;

    // Filter by search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (major) =>
          major.name.toLowerCase().includes(query) ||
          major.description.toLowerCase().includes(query) ||
          CATEGORIES[major.category].toLowerCase().includes(query)
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      result = result.filter((major) => major.category === selectedCategory);
    }

    // Sort
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "salary-asc":
          return a.avgSalaryYear1 - b.avgSalaryYear1;
        case "salary-desc":
          return b.avgSalaryYear10 - a.avgSalaryYear10;
        default:
          return 0;
      }
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-linear-to-br from-light-bg via-white to-primary/5 dark:from-dark-bg dark:via-secondary dark:to-primary/10">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <ExploreHeader />

        {/* Filters */}
        <ExploreFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-6"
        >
          <p className="text-gray-600 dark:text-gray-300">
            Menampilkan <strong>{filteredMajors.length}</strong> jurusan
            {selectedCategory !== "all" && (
              <span> di kategori <strong>{CATEGORIES[selectedCategory]}</strong></span>
            )}
          </p>
        </motion.div>

        {/* Majors Grid */}
        {filteredMajors.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMajors.map((major, index) => (
              <motion.div
                key={major.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ExploreMajorCard
                  major={major}
                  onClick={() => setSelectedMajor(major)}
                />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
              Tidak ada jurusan yang ditemukan
            </p>
            <p className="text-gray-400 dark:text-gray-500">
              Coba ubah filter atau kata kunci pencarian
            </p>
          </motion.div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedMajor && (
        <MajorDetailModal
          major={selectedMajor}
          onClose={() => setSelectedMajor(null)}
        />
      )}
    </div>
  );
}
