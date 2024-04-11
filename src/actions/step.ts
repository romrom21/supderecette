"use server"

import {prisma} from "../../prisma/prisma"
import {Step} from "@prisma/client"

export const addStep = async (recipeId: number, content: string, number: number) : Promise<Step> => {
    return  prisma.step.create({
        data: {
            content,
            number,
            recipeId
        }
    })
}

export const deleteStep = async (stepId: number) => {
    await prisma.step.delete({
        where: {
            id: stepId
        }
    })
}