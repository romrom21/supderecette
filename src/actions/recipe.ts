"use server"
import {prisma} from "../../prisma/prisma"
import {Recipe} from "@prisma/client"

export const addRecipe = async (name: string, description: string, userId: string): Promise<Recipe> => {
    return prisma.recipe.create({
        data: {
            name,
            description,
            userId
        },
    })
}

export const getRecipes = async (): Promise<Recipe[]> => {
    return prisma.recipe.findMany({
        include: {
            ingredients: true,
            ratings: true
        }
    })
}

export const getRecipe = async (id: number): Promise<Recipe> => {
    return prisma.recipe.findUnique({
        where: {
            id
        },
        include: {
            ingredients: true,
            steps: true,
            user: true,
            comments: {
                include: {
                    user: true
                }
            },
            ratings: true
        }
    })
}