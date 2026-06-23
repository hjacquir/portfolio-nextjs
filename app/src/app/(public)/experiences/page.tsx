import type {Metadata} from 'next'
import {listExperiences} from '@/lib/repositories/Experiences.repository'
import {ExperiencesCard} from '@/components/formatter/ExperiencesCard'
import {ExperiencesType} from '@/types/Experiences.type'
// optimisation SEO : ajout des balises meta
export const metadata: Metadata = {
    title: 'Expériences',
    description: 'Liste de mes expériences professionnelles',
    openGraph: {
        title: 'Expériences',
        description: 'Liste de mes expériences professionnelles'
    }
}

export default async function list() {
    const experiences = await listExperiences()

    return (
        <>
            <main className="experiences-main">
                {
                    experiences.lenth === 0 ? (
                        <p style={{color: "var(--text-muted)", fontSize: "13px"}}>
                            Aucune expérience enregistrée.
                        </p>
                    ) : (
                        <div className="timeline">
                            {
                                experiences.map((pe: ExperiencesType) => (
                                    <ExperiencesCard key={pe.id} experience={pe}/>
                                ))
                            }
                        </div>
                    )
                }
            </main>
        </>
    )
}