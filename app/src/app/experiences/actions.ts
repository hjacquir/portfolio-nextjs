"use server"

import {postExperiences} from '@/lib/repositories/Experiences.repository'
import {revalidatePath} from "next/cache";
import {ExperiencesState} from '@/src/types/ExperiencesState'

export async function createExperiences(previousState: ExperiencesState, formData: FormData) {
    try {
        const dateEnd = formData.get('dateEnd') as string;
        const dateEndValue = dateEnd.trim() === '' ? null : new Date(dateEnd);

        await postExperiences(
            new Date(formData.get("dateStart") as string),
            formData.get("title") as string,
            formData.get("content") as string,
            dateEndValue,
        )
    } catch {
        return {
            success: false,
            errors: {
                _form: ["Erreur lors de la création"]
            }
        }
    }

    revalidatePath("/experiences")

    return {
        success: true,
        errors: {}
    }
}