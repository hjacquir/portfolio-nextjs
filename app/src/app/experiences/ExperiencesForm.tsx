"use client"

import {useActionState, useState} from "react";
import {createExperiences} from '@/src/app/experiences/actions'

const initialState = {succes: false, error: {}}

export function ExperiencesForm() {
    const [responseAfterForSubmission, formAction, isPendingAfterFormSubmission] = useActionState(createExperiences, initialState)

    return (
        <>
            <form action={formAction}>
                <input required={true} name="title" placeholder="titre" />
                <input required={true} type="date" name="dateStart" />
                <input type="date" name="dateEnd" defaultValue="" />
                <textarea name="content" placeholder="Contenu" defaultValue="content" />
                <button type="submit" disabled={isPendingAfterFormSubmission}>
                    {isPendingAfterFormSubmission ? 'Création en cours ...' : 'Enregistrer'}
                </button>
            </form>
        </>
    )
}