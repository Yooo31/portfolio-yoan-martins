import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martins Yoan | Portfolio",
  description: "Le portfolio de Martins Yoan, développeur full-stack junior",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`text-primary bg-base-100 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
