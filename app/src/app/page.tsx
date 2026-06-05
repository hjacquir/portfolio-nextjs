import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Accueil',
    description: 'Présentation de mon CV',
    openGraph: {
        title: 'Accueil',
        description: 'Présentation de mon CV'
    }
}

export default function Home() {
  return (
      <>
        <header className="experiences-header">
          <p className="header-eyebrow">Portfolio · CV</p>
          <h1 className="header-name">Accueil</h1>
          <div className="header-meta">
            <span className="header-meta-item">{process.env.SITE_TITLE}</span>
          </div>
        </header>
        <main className="experiences-main">
          Bienvenue cher visiteur !
        </main>
        <footer className="experiences-footer">
          <nav className="footer-links">
            <a href="/experiences" className="footer-link">Expériences</a>
            <a href="/competences" className="footer-link">Compétences</a>
            <a href="/contact" className="footer-link">Contact</a>
          </nav>
        </footer>
      </>
  )
}
