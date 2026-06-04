import {listProfessionalExperiences} from '@/lib/repositories/professionnalExperiences.repository'
import {ProfessionalExperiencesCard} from '@/src/components/formatter/ProfessionalExperiencesCard'

export default async function list() {
    // todo renommer
    const professionalExperiences = await listProfessionalExperiences()

    return (
        <>
            <header className="experiences-header">
                <p className="header-eyebrow">Portfolio · CV</p>
                <h1 className="header-name">Expériences</h1>
                <div className="header-meta">
                    <span className="header-meta-item">{process.env.SITE_TITLE}</span>
                </div>
            </header>
            <main className="experiences-main">
                {
                    professionalExperiences.lenth === 0 ? (
                        <p style={{color: "var(--text-muted)", fontSize: "13px"}}>
                            Aucune expérience enregistrée.
                        </p>
                    ) : (
                        <div className="timeline">
                            {
                                professionalExperiences.map((pe) => (
                                    <ProfessionalExperiencesCard key={pe.id} experience={pe}/>
                                ))
                            }
                        </div>
                    )
                }
            </main>
            <footer className="experiences-footer">
                <nav className="footer-links">
                    <a href="/" className="footer-link">Acceuil</a>
                    <a href="/competences" className="footer-link">Compétences</a>
                    <a href="/contact" className="footer-link">Contact</a>
                </nav>
            </footer>
        </>
    )
}