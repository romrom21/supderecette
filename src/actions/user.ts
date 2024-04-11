"use server"

import { prisma } from "../../prisma/prisma"


export const addUser = async (id: string, email: string, name: string) => {
    await prisma.user.create({
        data: {
            id,
            email,
            name,
        },
    })
}
