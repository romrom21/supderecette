"use server"

import {prisma} from "../../prisma/prisma"
import {Rating} from "@prisma/client"

export const addRating = async (recipeId: number, userId: string, value: number): Promise<Rating> => {
    return prisma.rating.create({
        data: {
            recipeId,
            userId,
            value
        },
    });
}

export const updateRating = async (id: number, value: number): Promise<Rating> => {
    return prisma.rating.update({
        where: {
                id
        },
        data: {
            value
        }
    });
}

export const getRating = async (recipeId: number, userId: string) : Promise<Rating> => {
    return prisma.rating.findUnique({
        where: {
            recipeId,
            userId
        }
    });
}