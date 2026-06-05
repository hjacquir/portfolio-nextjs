import type { Metadata } from "next";
import "./globals.css";

const title= process.env.SITE_TITLE
const description= process.env.SITE_META_DESCRIPTION
// optimisation SEO : ajout metadate avec héritage
export const metadata: Metadata = {
  title: {
      template: `%s | ${title}`,
      default: `${title}`
  },
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
