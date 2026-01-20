import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Diamond Clear",
    short_name: "Diamond Clear",
    description: "Limpeza e Manutenção de Piscinas",
    start_url: "/login",
    display: "standalone",
    background_color: "#F8FCFF",
    theme_color: "#1CB6D9",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ]
  };
}
