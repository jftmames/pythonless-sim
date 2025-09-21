
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simulador Pythonless",
  description: "Simula qué hace Python sin ejecutarlo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-dvh bg-white text-gray-900">{children}</body>
    </html>
  );
}
