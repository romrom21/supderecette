"use client"

import {useParams} from "next/navigation"
import {Recipe} from "@prisma/client"
import {useEffect, useState} from "react"
import {getRecipe} from "@/actions/recipe"
import {RecipeCard} from "@/components/cards/RecipeCard"
import IngredientsCard from "@/components/cards/IngredientsCard"
import StepsCard from "@/components/cards/StepsCard"
import FeedbacksCard from "@/components/cards/FeedbacksCard"
import RatingCard from "@/components/cards/RatingCard"

const RecipePage = () => {
    const [recipe, setRecipe] = useState<Recipe | null>(null)
    const slug = useParams()

    useEffect(() => {
        const id = slug.id

        if (!id) return console.error("No id provided")

        if (typeof id !== "string") return console.error("Id is not a string")

        getRecipe(Number(id)).then((data: Recipe) => {
            setRecipe(data)
        })
    }, [slug])


    return (
        <div className={"m-4 flex items-center justify-center"}>
            {recipe != null ?
                (
                    <div className={"flex flex-col gap-2"}>
                        <div className={"flex flex-row gap-2"}>
                            <RecipeCard recipe={recipe}/>
                            <IngredientsCard recipe={recipe}/>
                        </div>

                        <div className={"flex flex-col gap-2"}>
                            <StepsCard recipe={recipe}/>
                            <RatingCard recipe={recipe}/>
                            <FeedbacksCard recipe={recipe}/>
                        </div>
                    </div>
                )
                : (<span className="loading loading-dots loading-lg"></span>
                )
            }
        </div>
    )
}

export default RecipePage