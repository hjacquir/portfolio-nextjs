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
        <main className="experiences-main">
          Bienvenue cher visiteur !
        </main>
      </>
  )
}
