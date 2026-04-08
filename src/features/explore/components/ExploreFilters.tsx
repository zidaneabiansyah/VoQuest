"use client";

import { CategoryCode, CATEGORIES } from "@/lib/constants/categories";
import { Badge } from "@/components/ui/Badge";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type SortOption = "name" | "salary-asc" | "salary-desc";

interface ExploreFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: CategoryCode | "all";
  onCategoryChange: (category: CategoryCode | "all") => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
}

export function ExploreFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: ExploreFiltersProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-8 space-y-6"
    >
      {/* Search Bar */}
      <div className="relative">
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Cari jurusan..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary focus:outline-none transition-colors"
        />
      </div>

      {/* Category Filter */}
      <div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Filter Bidang:
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={selectedCategory === "all" ? "primary" : "default"}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onCategoryChange("all")}
          >
            Semua
          </Badge>
          {Object.entries(CATEGORIES).map(([code, name]) => (
            <Badge
              key={code}
              variant={selectedCategory === code ? "primary" : "default"}
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => onCategoryChange(code as CategoryCode)}
            >
              {name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Sort Options */}
      <div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
          Urutkan:
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge
            variant={sortBy === "name" ? "primary" : "default"}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onSortChange("name")}
          >
            Nama A-Z
          </Badge>
          <Badge
            variant={sortBy === "salary-asc" ? "primary" : "default"}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onSortChange("salary-asc")}
          >
            Gaji Terendah
          </Badge>
          <Badge
            variant={sortBy === "salary-desc" ? "primary" : "default"}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => onSortChange("salary-desc")}
          >
            Gaji Tertinggi
          </Badge>
        </div>
      </div>
    </motion.div>
  );
}
