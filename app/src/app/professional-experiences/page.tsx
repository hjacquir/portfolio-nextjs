import {listProfessionalExperiences} from '@/lib/repositories/professionnalExperiences.repository'
import {formatPeriod} from '@/lib/utils/format-period'

export default async function list() {
    const professionalExperiences = await listProfessionalExperiences()

    return (
        <ul>
            {
                professionalExperiences.map((pe) => (
                        <li key={pe.id}>
                            {/*todo ajouter durée*/}
                            <h2>{formatPeriod(pe.dateStart, pe.dateEnd)}</h2>
                            <h3>{pe.title}</h3>
                            <p>{pe.content}</p>
                        </li>
                    )
                )
            }
        </ul>
    );
}