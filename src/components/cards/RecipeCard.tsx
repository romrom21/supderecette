"use client"

import {faker} from '@faker-js/faker'
import {Recipe} from "@prisma/client"
import {useParams, useRouter} from 'next/navigation'
import {Params} from "next/dist/shared/lib/router/utils/route-matcher"


interface RecipeCardProps {
    recipe: Recipe
}

export const RecipeCard = (props: RecipeCardProps) => {
    const {recipe} = props
    const router = useRouter()
    const slug: Params = useParams()

    const handleClick = () => {
        router.push(`/recipes/${recipe.id}`)
    }

    const globalRating = recipe.ratings.reduce((acc, rating) => acc + rating.value, 0) / recipe.ratings.length

    return (
        <div className={`card w-96 bg-base-100 shadow-xl ${Object.keys(slug).includes("id") ? "cursor-default" : "cursor-pointer"}`} onClick={handleClick}>
            <figure><img src={faker.image.urlLoremFlickr({category: 'food'})} alt="Food"/></figure>
            <div className="card-body">
                <h2 className="card-title">{recipe.name}</h2>
                <div className="rating rating-sm">
                    <input type="radio" name="rating-6"
                           className={`mask mask-star-2 bg-orange-400`} disabled checked={globalRating >= 1}/>
                    <input type="radio" name="rating-6"
                           className={`mask mask-star-2 bg-orange-400`} disabled checked={globalRating >= 2}/>
                    <input type="radio" name="rating-6"
                           className={`mask mask-star-2 bg-orange-400`} disabled checked={globalRating >= 3}/>
                    <input type="radio" name="rating-6"
                           className={`mask mask-star-2 bg-orange-400`} disabled checked={globalRating >= 4}/>
                    <input type="radio" name="rating-6"
                           className={`mask mask-star-2 bg-orange-400`} disabled checked={globalRating >= 5}/>
                </div>
                <p>{recipe.description}</p>
            </div>
        </div>
    )
}