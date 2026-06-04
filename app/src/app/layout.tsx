import type { Metadata } from "next";
import "./globals.css";

const title= process.env.SITE_TITLE
const description= process.env.SITE_META_DESCRIPTION

export const metadata: Metadata = {
  title: `${title}`,
  description: `${description}`,
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr">
      <body>
      <div className="experiences-layout">
          {children}
      </div>
      </body>
      </html>
  );
}
