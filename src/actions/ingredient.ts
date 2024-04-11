"use server"
import {prisma} from "../../prisma/prisma"
import {Ingredient} from "@prisma/client"

export const addIngredient = async (recipeId: number, name: string, amount: number, unit: string): Promise<Ingredient> => {
    return prisma.ingredient.create({
        data: {
            name,
            amount,
            recipeId,
            unit
        },
    })
}

export const deleteIngredient = async (ingredientId: number) : Promise<void> => {
    await prisma.ingredient.delete({
        where: {
            id: ingredientId
        }
    })
}