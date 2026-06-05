import {ExperiencesType} from '@/src/types/Experiences.type'
import {PeriodFormatter} from '@/src/components/formatter/PeriodFormatter'

export function ExperiencesCard({experience}: { experience: ExperiencesType }) {
    return (
        <article className="experience-item">
            <div className="experience-header">
                <div className="experience-card">
                    <h2 className="experience-title">{experience.title}</h2>
                </div>
                <span className="experience-period">
                        <PeriodFormatter startDate={experience.dateStart} endDate={experience.dateEnd}/>
                    </span>
                <p className="experience-content">
                    {experience.content}
                </p>
            </div>
        </article>
    )
}