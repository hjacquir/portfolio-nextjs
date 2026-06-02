import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//@todo rendre dynamique de la bdd
const nom = 'JACQUIR'
const prenom = 'Hatim'
const metier = 'Développeur full-stack'
const description = 'Présentation de mon CV développé NextJS'

export const metadata: Metadata = {
  title: `PortFolio - ${nom} ${prenom} - ${metier}`,
  description: `${description}`,
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html
          lang="fr"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
      <body className="min-h-full flex flex-col">{children}</body>
      </html>
  );
}
