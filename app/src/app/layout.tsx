import type { Metadata } from "next";
import {Navigation} from '@/src/components/Navigation'
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

const navigationLinks = [
    {
        href: '/',
        label: 'Accueil',
    },
    {
        href: '/experiences',
        label: 'Expériences',
    }
]

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="fr">
      <body>
      <div className="experiences-layout">
          <header className="experiences-header">
              <p className="header-eyebrow">Portfolio · CV</p>
              <div className="header-meta">
                  <span className="header-meta-item">{process.env.SITE_TITLE}</span>
              </div>
              <nav className="navigation">
                  {
                      navigationLinks.map((item) => (
                          <Navigation href={item.href} key={item.href}>
                              {item.label}
                          </Navigation>
                      ))
                  }
              </nav>
          </header>
          {children}
      </div>
      </body>
      </html>
  );
}
