"use server"
import {prisma} from "../../prisma/prisma"
import {Comment} from "@prisma/client"

export const addComment = async (recipeId: number, content: string, userId: string) => {
    await prisma.comment.create({
        data: {
            content,
            recipeId,
            userId
        },
    });
}

export const getComments = async (recipeId: number) : Promise<Comment[]> => {
    return prisma.comment.findMany({
        where: {
            recipeId
        },
        include: {
            user: true
        }
    });
}