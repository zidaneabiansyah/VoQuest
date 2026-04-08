import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "VoQuest - Temukan Jalur Karir Vokasi",
    short_name: "VoQuest",
    description: "Platform quiz interaktif untuk menemukan jurusan vokasi yang tepat",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0D9488",
    orientation: "portrait",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["education", "lifestyle"],
    lang: "id",
    dir: "ltr",
  };
}
