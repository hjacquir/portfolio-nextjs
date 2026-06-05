import {prisma} from '@/lib/prisma'

export async function postExperiences(
    dateStart: Date,
    title: string,
    content: string,
    dateEnd?: Date,
): Promise<void> {
    await prisma.experiences.create({
        data : {
            dateStart: dateStart,
            dateEnd: dateEnd,
            title: title,
            content: content,
        }
    })
}

export async function listExperiences(): Promise<any> {
    return await prisma.experiences.findMany(
        {
            orderBy: {
                dateStart: "desc",
            }
        }
    )
}