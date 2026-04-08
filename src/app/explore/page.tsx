import { ExploreContainer } from "@/features/explore/components/ExploreContainer";
import { generateMetadata as genMeta } from "@/lib/seo/metadata";

export const metadata = genMeta({
  title: "Jelajahi Jurusan SMK",
  description: "Jelajahi 20+ jurusan SMK populer di Indonesia. Lihat proyeksi gaji, skill yang dipelajari, dan prospek karir setiap jurusan.",
  url: "/explore",
  keywords: ["jurusan SMK", "daftar jurusan vokasi", "prospek kerja SMK", "gaji lulusan SMK"],
});

export default function ExplorePage() {
  return <ExploreContainer />;
}
