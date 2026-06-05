import {prisma} from '@/lib/prisma'

export async function postExperiences(
    dateStart: Date,
    title: string,
    content: string,
    dateEnd?: Date,
): void {
    await prisma.Experiences.create({
        data : {
            dateStart: dateStart,
            dateEnd: dateEnd,
            title: title,
            content: content,
        }
    })
}

export async function listExperiences(): void {
    return await prisma.Experiences.findMany(
        {
            orderBy: {
                dateStart: "desc",
            }
        }
    )
}