import {faker} from '@faker-js/faker'
import {Recipe} from "@prisma/client"


interface RecipeCardProps {
    recipe: Recipe
}


export const LargeRecipeCard = (props: RecipeCardProps) => {
    const { recipe } = props

    return (
    <div className="card card-side bg-base-100 shadow-xl">
        <figure>
            <img src={faker.image.urlLoremFlickr({category: 'food'})} alt="Food"/>
        </figure>
        <div className="card-body">
            <h2 className="card-title">{recipe.name}</h2>
            <p>{recipe.description}</p>
        </div>
    </div>
    )
}