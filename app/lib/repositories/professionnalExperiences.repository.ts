import {prisma} from '@/lib/prisma'

export async function postProfessionalExperiences(
    dateStart: Date,
    title: string,
    content: string,
    dateEnd?: Date,
): void {
    await prisma.ProfessionalExperiences.create({
        data : {
            dateStart: dateStart,
            dateEnd: dateEnd,
            title: title,
            content: content,
        }
    })
}