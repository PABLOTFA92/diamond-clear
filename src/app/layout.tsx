import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Diamond Clear",
  description: "Limpeza e Manutenção de Piscinas",
  applicationName: "Diamond Clear",
  themeColor: "#1CB6D9",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
