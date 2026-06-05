import {postExperiences} from '@/lib/repositories/Experiences.repository'

export async function main() {
    await postExperiences(
        new Date('2026-01-06'),
        'Titre par défaut 1',
        'Contenu par défaut 1',
        new Date('2026-02'),
    )

    await postExperiences(
        new Date('2026-03-01'),
        'Titre par défaut 2',
        'Contenu par défaut 2'
    )
}

main()
